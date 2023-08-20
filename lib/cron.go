package lib

import (
	"fmt"
	"os"
	"os/exec"
	"time"

	"github.com/robfig/cron/v3"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	database "ytsruh.com/search/db"
)

func RunCron() {
	c := cron.New()
	c.AddFunc("0 * * * *", searchEngine) // Run every hour
	c.AddFunc("0 0 * * 1", backupDB)     // Run at midnight every Monday night
	c.Start()
	cronCount := len(c.Entries())
	fmt.Printf("Setup %d cron jobs \n", cronCount)
}

func searchEngine() {
	fmt.Println("started search engine crawl...")
	defer fmt.Println("search engine crawl has finished")
	// Get crawl settings
	settings, settingsErr := database.GetSettings()
	if settingsErr != nil {
		fmt.Println("something went wrong getting the settings")
		return
	}
	// Check if search is turned on by checking settings
	if !settings.SearchOn {
		fmt.Println("search is turned off")
		return
	} else {
		// Get next X urls to be tested
		initialUrls, err := database.GetNextCrawlUrls(settings.Amount)
		if err != nil {
			fmt.Println("something went wrong getting the url list")
			return
		}
		newUrls := []database.CrawledUrl{}
		testedTime := time.Now()
		// Loop over the slice and run crawl on each url
		for _, value := range initialUrls {
			result := RunCrawl(value.Url)
			// Check if the crawl was not successul
			if !result.Success {
				// Push a failed crawl to the array
				fmt.Println("something went wrong running the crawl")
				// Update row in database
				_, err := database.UpdateUrl(database.CrawledUrl{
					ID:              value.ID,
					Url:             result.Url,
					Success:         false,
					CrawlDuration:   result.CrawlData.CrawlTime,
					ResponseCode:    result.ResponseCode,
					PageTitle:       result.CrawlData.PageTitle,
					PageDescription: result.CrawlData.PageDescription,
					Headings:        result.CrawlData.Headings,
					LastTested:      &testedTime,
				})
				if err != nil {
					fmt.Println("something went wrong updating a failed url")
				}
				continue
			}
			// Push a successful crawl to the array
			_, err := database.UpdateUrl(database.CrawledUrl{
				ID:              value.ID,
				Url:             result.Url,
				Success:         true,
				CrawlDuration:   result.CrawlData.CrawlTime,
				ResponseCode:    result.ResponseCode,
				PageTitle:       result.CrawlData.PageTitle,
				PageDescription: result.CrawlData.PageDescription,
				Headings:        result.CrawlData.Headings,
				LastTested:      &testedTime,
			})
			if err != nil {
				fmt.Printf("something went wrong updating %v /n", value.Url)
			}
			// Push the newly found external urls to an array
			for _, newUrl := range result.CrawlData.Links.External {
				newUrls = append(newUrls, database.CrawledUrl{Url: newUrl})
			}
		} // End of range
		if settings.AddNew {
			// Insert newly found urls into database
			error := database.InsertManyUrls(&newUrls)
			if error != nil {
				fmt.Println("something went wrong adding new urls to database")
			}
			fmt.Printf("Added %d new urls to database \n", len(newUrls))
		} else {
			fmt.Printf("Adding new urls to database is disabled")
		}
	}

}

func backupDB() {
	fmt.Println("started backup...")
	defer fmt.Println("backup has finished")
	// Define the connection string
	connectionString := os.Getenv("DB_URL")
	// Generate a filename with the current date and time
	backupFileName := "search/" + time.Now().Format("20060102") + ".sql"
	// Connect to the PostgreSQL database
	db, err := gorm.Open(postgres.Open(connectionString), &gorm.Config{})
	if err != nil {
		fmt.Println("Failed to connect to database:", err)
		return
	}
	dbConn, err := db.DB()
	if err != nil {
		fmt.Println("Failed to get database connection:", err)
		return
	}
	defer dbConn.Close()

	// Execute the pg_dump command to backup the database
	cmd := exec.Command("pg_dump", connectionString)
	output, err := cmd.Output()
	if err != nil {
		fmt.Println("Failed to backup database:", err)
		return
	}
	uploadErr := UploadFile(output, backupFileName)
	if uploadErr != nil {
		fmt.Println("Failed to upload database backup:", uploadErr)
		return
	}
	fmt.Println("Backup completed successfully! File:", backupFileName)
}
