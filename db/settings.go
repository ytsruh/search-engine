package database

import (
	"fmt"
	"gorm.io/gorm"
	"time"
)

type Settings struct {
	ID        uint           `gorm:"primaryKey"`
	SearchOn  bool           `json:"on"`
	Amount    int            `json:"amount"`
	CreatedAt time.Time      `gorm:"autoCreateTime"`
	UpdatedAt time.Time      `gorm:"autoUpdateTime"`
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

func GetSettings() (Settings, error) {
	var settings Settings
	tx := db.First(&settings)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return Settings{}, tx.Error
	}
	return settings, nil
}

func UpdateSettings(input Settings) (*gorm.DB, error) {
	// Dont update 'created_at' column
	tx := db.Where("id = ?", 1).Omit("created_at").Save(&input)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return nil, tx.Error
	}
	return tx, nil
}
