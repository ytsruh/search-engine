package lib

import (
	"context"
	"fmt"
	"time"

	"github.com/robfig/cron/v3"
	"github.com/steebchen/prisma-client-go/runtime/types"
	"ytsruh.com/search/db"
)

func RunCron() {
	c := cron.New()
	c.AddFunc("0 * * * *", searchEngine) // Run every hour
	c.Start()
	cronCount := len(c.Entries())
	fmt.Printf("Setup %d cron jobs \n", cronCount)
}

type CrawledUrl struct {
	Url             string        `json:"url"`
	Success         bool          `json:"success" `
	CrawlDuration   time.Duration `json:"crawlDuration"`
	ResponseCode    int           `json:"responseCode"`
	PageTitle       string        `json:"pageTitle"`
	PageDescription string        `json:"pageDescription"`
	Headings        string        `json:"headings"`
	LastTested      *time.Time    `json:"lastTested"` // Use pointer so this value can be nil
}

func searchEngine() {
	fmt.Println("started search engine crawl...")
	defer fmt.Println("search engine crawl has finished")
	// Get crawl settings from DB
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()
	settings, err := client.Settings.FindFirst().Exec(context.Background())
	if err != nil {
		return
	}
	amount, ok := settings.Amount()
	if !ok {
		return
	}
	searchOn, ok := settings.SearchOn()
	if !ok {
		return
	}
	addNew, ok := settings.AddNew()
	if !ok {
		return
	}
	// Check if search is turned on by checking settings
	if !searchOn {
		fmt.Println("search is turned off")
		return
	} else {
		// Get next X urls to be tested
		initialUrls, err := client.CrawledUrls.FindMany(
			db.CrawledUrls.LastTested.IsNull(),
		).Take(int(amount)).Exec(context.Background())
		if err != nil {
			fmt.Println("something went wrong getting the url list")
			return
		}
		newUrls := []CrawledUrl{}
		testedTime := time.Now()
		// Loop over the slice and run crawl on each url
		for _, value := range initialUrls {
			result := RunCrawl(value.URL)
			// Check if the crawl was not successul
			if !result.Success {
				// Push a failed crawl to the array
				fmt.Println("something went wrong running the crawl")
				// Update row in database
				_, err := client.CrawledUrls.FindMany(
					db.CrawledUrls.ID.Contains(value.ID),
				).Update(
					db.CrawledUrls.URL.Set(result.Url),
					db.CrawledUrls.Success.Set(false),
					db.CrawledUrls.CrawlDuration.Set(types.BigInt(result.CrawlData.CrawlTime.Nanoseconds())),
					db.CrawledUrls.ResponseCode.Set(types.BigInt(result.ResponseCode)),
					db.CrawledUrls.PageTitle.Set(result.CrawlData.PageTitle),
					db.CrawledUrls.PageDescription.Set(result.CrawlData.PageDescription),
					db.CrawledUrls.Headings.Set(result.CrawlData.Headings),
					db.CrawledUrls.LastTested.Set(testedTime),
				).Exec(context.Background())
				if err != nil {
					fmt.Println("something went wrong updating a failed url")
				}
				continue
			}
			// Update a successful row in database
			_, err := client.CrawledUrls.FindMany(
				db.CrawledUrls.ID.Contains(value.ID),
			).Update(
				db.CrawledUrls.URL.Set(result.Url),
				db.CrawledUrls.Success.Set(true),
				db.CrawledUrls.CrawlDuration.Set(types.BigInt(result.CrawlData.CrawlTime.Nanoseconds())),
				db.CrawledUrls.ResponseCode.Set(types.BigInt(result.ResponseCode)),
				db.CrawledUrls.PageTitle.Set(result.CrawlData.PageTitle),
				db.CrawledUrls.PageDescription.Set(result.CrawlData.PageDescription),
				db.CrawledUrls.Headings.Set(result.CrawlData.Headings),
				db.CrawledUrls.LastTested.Set(testedTime),
			).Exec(context.Background())
			if err != nil {
				fmt.Printf("something went wrong updating %v /n", value.URL)
			}
			// Push the newly found external urls to an array
			for _, newUrl := range result.CrawlData.Links.External {
				newUrls = append(newUrls, CrawledUrl{Url: newUrl})
			}
		} // End of range
		if addNew {
			// Insert newly found urls into database
			for _, newUrl := range newUrls {
				_, error := client.CrawledUrls.CreateOne(
					// required fields
					db.CrawledUrls.URL.Set(newUrl.Url),
				).Exec(context.Background())
				if error != nil {
					fmt.Println("something went wrong adding new urls to database")
				}
			}
			fmt.Printf("Added %d new urls to database \n", len(newUrls))
		} else {
			fmt.Printf("Adding new urls to database is disabled")
		}
	}

}
