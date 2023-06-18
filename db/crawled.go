package database

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type CrawledUrl struct {
	ID              uuid.UUID      `json:"id" gorm:"primaryKey;type:uuid;default:gen_random_uuid()"`
	Url             string         `json:"url" gorm:"unique;not null"`
	Success         bool           `json:"success"`
	CrawlDuration   time.Duration  `json:"crawlDuration"`
	ResponseCode    int            `json:"responseCode"`
	PageTitle       string         `json:"pageTitle"`
	PageDescription string         `json:"pageDescription"`
	Headings        string         `json:"headings"`
	LastTested      time.Time      `json:"lastTested"`
	CreatedAt       time.Time      `gorm:"autoCreateTime"`
	UpdatedAt       time.Time      `gorm:"autoUpdateTime"`
	DeletedAt       gorm.DeletedAt `gorm:"index"`
}

func GetAllUrls() ([]CrawledUrl, error) {
	var urls []CrawledUrl

	tx := db.Find(&urls)

	if tx.Error != nil {
		return []CrawledUrl{}, tx.Error
	}

	return urls, nil
}

func GetUrl(id uint64) (CrawledUrl, error) {
	var url CrawledUrl

	tx := db.Where("id = ?", id).First(&url)

	if tx.Error != nil {
		return CrawledUrl{}, tx.Error
	}

	return url, nil
}

func CreateUrl(input CrawledUrl) error {
	tx := db.Create(&input)
	return tx.Error
}

func UpdateUrl(input CrawledUrl) error {
	tx := db.Save(&input)
	return tx.Error
}

func DeleteUrl(id uuid.UUID) error {
	// Unscoped is for a full delete instead of a soft delete
	tx := db.Unscoped().Delete(&CrawledUrl{}, id)
	return tx.Error
}
