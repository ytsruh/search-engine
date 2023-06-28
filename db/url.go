package database

import (
	"fmt"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type CrawledUrl struct {
	ID              uuid.UUID      `json:"id" gorm:"primaryKey;type:uuid;default:gen_random_uuid()"`
	Url             string         `json:"url" gorm:"unique;not null"`
	Success         bool           `json:"success" gorm:"default:null"`
	CrawlDuration   time.Duration  `json:"crawlDuration"`
	ResponseCode    int            `json:"responseCode"`
	PageTitle       string         `json:"pageTitle"`
	PageDescription string         `json:"pageDescription"`
	Headings        string         `json:"headings"`
	LastTested      *time.Time     `json:"lastTested"` // Use pointer so this value can be nil
	CreatedAt       time.Time      `gorm:"autoCreateTime"`
	UpdatedAt       time.Time      `gorm:"autoUpdateTime"`
	DeletedAt       gorm.DeletedAt `gorm:"index"`
}

type SearchResult struct {
	Url             string `json:"url" gorm:"unique;not null"`
	PageTitle       string `json:"pageTitle"`
	PageDescription string `json:"pageDescription"`
}

func GetAllUrls() ([]CrawledUrl, error) {
	var urls []CrawledUrl
	tx := db.Find(&urls)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return []CrawledUrl{}, tx.Error
	}
	return urls, nil
}

func GetUrl(id uint64) (CrawledUrl, error) {
	var url CrawledUrl
	tx := db.Where("id = ?", id).First(&url)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return CrawledUrl{}, tx.Error
	}
	return url, nil
}

func CreateUrl(input *CrawledUrl) error {
	tx := db.Create(input)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return tx.Error
	}
	return nil
}

func InsertManyUrls(input *[]CrawledUrl) error {
	// Ignore if the entry has conflict (is not unique)
	tx := db.Clauses(clause.OnConflict{DoNothing: true}).Create(input)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return tx.Error
	}
	return nil
}

func UpdateUrl(input CrawledUrl) (*gorm.DB, error) {
	// Dont update 'created_at' column
	tx := db.Omit("created_at").Save(&input)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return nil, tx.Error
	}
	return tx, nil
}

func DeleteUrl(id uuid.UUID) (*gorm.DB, error) {
	// Unscoped is for a full delete instead of a soft delete
	tx := db.Unscoped().Delete(&CrawledUrl{}, id)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return nil, tx.Error
	}
	return tx, nil
}

func GetNextCrawlUrls(limit int) ([]CrawledUrl, error) {
	var urls []CrawledUrl
	tx := db.Where("last_tested IS NULL").Limit(limit).Find(&urls)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return []CrawledUrl{}, tx.Error
	}
	return urls, nil
}

func TextSearch(input string) ([]CrawledUrl, error) {
	searchText := "%" + input + "%"
	var urls []CrawledUrl
	tx := db.Where("success = ? AND url LIKE ?", true, searchText).Or("page_title LIKE ?", searchText).Or("page_description LIKE ?", searchText).Or("headings LIKE ?", searchText).Find(&urls)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return []CrawledUrl{}, tx.Error
	}
	return urls, nil
}

type Result struct {
	Date  time.Time `json:"date"`
	Count int       `json:"count"`
}
type Counts struct {
	CountAll   int64 `json:"countAll"`
	CountTrue  int64 `json:"countTrue"`
	CountFalse int64 `json:"countFalse"`
}
type Stats struct {
	Count  Counts   `json:"counts"`
	Latest []Result `json:"latest"`
}

func GetPublicStats() (Stats, error) {
	var CountAll int64
	var CountTrue int64
	var CountFalse int64
	var results []Result

	db.Model(&CrawledUrl{}).Count(&CountAll)
	db.Model(&CrawledUrl{}).Where("success = ?", true).Count(&CountTrue)
	db.Model(&CrawledUrl{}).Where("success = ?", false).Count(&CountFalse)

	startDate := time.Now().UTC().AddDate(0, 0, -7).Truncate(24 * time.Hour)
	endDate := time.Now().UTC().Truncate(24 * time.Hour) // Truncate to midnight so results will not include today
	db.Model(&CrawledUrl{}).
		Select("DATE_TRUNC('day', created_at AT TIME ZONE 'UTC') AS date, COUNT(*) AS count").
		Where("created_at BETWEEN ? AND ?", startDate, endDate).
		Group("DATE_TRUNC('day', created_at AT TIME ZONE 'UTC')").
		Order("date ASC").
		Scan(&results)
	return Stats{
		Count: Counts{
			CountAll:   CountAll,
			CountTrue:  CountTrue,
			CountFalse: CountFalse,
		},
		Latest: results,
	}, nil
}
