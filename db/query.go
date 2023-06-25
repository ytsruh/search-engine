package database

import (
	"fmt"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type SearchQuery struct {
	ID        uuid.UUID      `json:"id" gorm:"primaryKey;type:uuid;default:gen_random_uuid()"`
	Query     string         `json:"query"`
	IP        string         `json:"ip"`
	UserAgent string         `json:"user_agent"`
	Platform  string         `json:"platform"`
	CreatedAt time.Time      `gorm:"autoCreateTime"`
	UpdatedAt time.Time      `gorm:"autoUpdateTime"`
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

func CreateQuery(input *SearchQuery) error {
	tx := db.Create(input)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return tx.Error
	}
	return nil
}

func GetAllQueries() ([]SearchQuery, error) {
	var queries []SearchQuery
	tx := db.Find(&queries)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return []SearchQuery{}, tx.Error
	}
	return queries, nil
}

func GetQueryByID(id uuid.UUID) (SearchQuery, error) {
	var query SearchQuery
	tx := db.Where("id = ?", id).First(&query)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return SearchQuery{}, tx.Error
	}
	return query, nil
}
