package database

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var db *gorm.DB

func Setup() {
	dburl := os.Getenv("DB_URL")
	var err error

	db, err = gorm.Open(postgres.Open(dburl), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})
	if err != nil {
		log.Println("Error connecting to the Database")
		panic(err)
	}

	err = db.AutoMigrate(&CrawledUrl{}, &Settings{})
	if err != nil {
		log.Println(err)
	}
	log.Println("Successfully connected to the Database")
}
