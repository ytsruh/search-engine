package lib

import (
	"fmt"

	"github.com/robfig/cron/v3"
)

func RunCron() {
	c := cron.New()
	//c.AddFunc("0 * * * *", searchEngine) // Run every hour
	c.Start()
	cronCount := len(c.Entries())
	fmt.Printf("Setup %d cron jobs \n", cronCount)
}

// func searchEngine() {
// 	fmt.Println("started search engine crawl...")
// 	defer fmt.Println("search engine crawl has finished")
// 	// Get crawl settings
// 	settings, settingsErr := database.GetSettings()
// 	if settingsErr != nil {
// 		fmt.Println("something went wrong getting the settings")
// 		return
// 	}
// 	// Check if search is turned on by checking settings
// 	if !settings.SearchOn {
// 		fmt.Println("search is turned off")
// 		return
// 	} else {
// 		// Get next X urls to be tested
// 		initialUrls, err := database.GetNextCrawlUrls(settings.Amount)
// 		if err != nil {
// 			fmt.Println("something went wrong getting the url list")
// 			return
// 		}
// 		newUrls := []database.CrawledUrl{}
// 		testedTime := time.Now()
// 		// Loop over the slice and run crawl on each url
// 		for _, value := range initialUrls {
// 			result := RunCrawl(value.Url)
// 			// Check if the crawl was not successul
// 			if !result.Success {
// 				// Push a failed crawl to the array
// 				fmt.Println("something went wrong running the crawl")
// 				// Update row in database
// 				_, err := database.UpdateUrl(database.CrawledUrl{
// 					ID:              value.ID,
// 					Url:             result.Url,
// 					Success:         false,
// 					CrawlDuration:   result.CrawlData.CrawlTime,
// 					ResponseCode:    result.ResponseCode,
// 					PageTitle:       result.CrawlData.PageTitle,
// 					PageDescription: result.CrawlData.PageDescription,
// 					Headings:        result.CrawlData.Headings,
// 					LastTested:      &testedTime,
// 				})
// 				if err != nil {
// 					fmt.Println("something went wrong updating a failed url")
// 				}
// 				continue
// 			}
// 			// Push a successful crawl to the array
// 			_, err := database.UpdateUrl(database.CrawledUrl{
// 				ID:              value.ID,
// 				Url:             result.Url,
// 				Success:         true,
// 				CrawlDuration:   result.CrawlData.CrawlTime,
// 				ResponseCode:    result.ResponseCode,
// 				PageTitle:       result.CrawlData.PageTitle,
// 				PageDescription: result.CrawlData.PageDescription,
// 				Headings:        result.CrawlData.Headings,
// 				LastTested:      &testedTime,
// 			})
// 			if err != nil {
// 				fmt.Printf("something went wrong updating %v /n", value.Url)
// 			}
// 			// Push the newly found external urls to an array
// 			for _, newUrl := range result.CrawlData.Links.External {
// 				newUrls = append(newUrls, database.CrawledUrl{Url: newUrl})
// 			}
// 		} // End of range
// 		if settings.AddNew {
// 			// Insert newly found urls into database
// 			error := database.InsertManyUrls(&newUrls)
// 			if error != nil {
// 				fmt.Println("something went wrong adding new urls to database")
// 			}
// 			fmt.Printf("Added %d new urls to database \n", len(newUrls))
// 		} else {
// 			fmt.Printf("Adding new urls to database is disabled")
// 		}
// 	}

// }
