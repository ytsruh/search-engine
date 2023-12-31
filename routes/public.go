package routes

import (
	"context"
	"fmt"
	"log"
	"strings"

	"github.com/gofiber/fiber/v2"
	"ytsruh.com/search/db"
)

type Input struct {
	Search string `json:"search" form:"search"`
}

func renderAbout(c *fiber.Ctx) error {
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return err
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()
	var successCount []struct {
		Count db.RawString
	}
	var failCount []struct {
		Count db.RawString
	}
	var totalCount []struct {
		Count db.RawString
	}
	ctx := context.Background()
	err := client.Prisma.QueryRaw("SELECT COUNT(*) FROM crawled_urls WHERE success = true").Exec(ctx, &successCount)
	if err != nil {
		return err
	}
	err = client.Prisma.QueryRaw("SELECT COUNT(*) FROM crawled_urls WHERE success = false").Exec(ctx, &failCount)
	if err != nil {
		return err
	}
	err = client.Prisma.QueryRaw("SELECT COUNT(*) FROM crawled_urls").Exec(ctx, &totalCount)
	if err != nil {
		return err
	}
	c.Status(200)
	return c.Render("about", fiber.Map{
		"PageTitle": "About the ytsruh search engine",
		"Success":   successCount[0].Count,
		"Fail":      failCount[0].Count,
		"Total":     totalCount[0].Count,
	})
}

func textSearch(c *fiber.Ctx) error {
	input := new(Input)
	if err := c.BodyParser(input); err != nil {
		return err
	}
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return err
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()
	ctx := context.Background()
	results, err := client.CrawledUrls.FindMany(
		db.CrawledUrls.Success.Equals(true),
		db.CrawledUrls.Or(
			db.CrawledUrls.URL.Contains(input.Search),
			db.CrawledUrls.PageTitle.Contains(input.Search),
		),
	).Exec(ctx)
	if err != nil {
		return err
	}
	if len(results) == 0 {
		return c.SendString(`<div class="flex justify-center items-center my-24">
			<h2 class="text-xl text-center italic">No results found</h2>
		</div>`)
	}
	var sb strings.Builder
	sb.WriteString(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">`)
	for _, v := range results {
		title, ok := v.PageTitle()
		if !ok {
			title = "No title"
		}
		description, ok := v.PageDescription()
		if !ok {
			description = "No description"
		}
		resultCard := fmt.Sprintf(`<a href="%s" class="flex flex-col justify-between border rounded-md p-3">
				<div class="py-1 text-primary text-xl">%s</div>
				<div class="text-neutral-content">%s</div>
				<div class="flex justify-between items-center py-1">
				<span class="italic truncate text-sm">%s</span>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
					d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
					fill="currentColor" />
					<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
					fill="currentColor" />
				</svg>
				</div>
			</a>`, v.URL, title, description, v.URL)
		sb.WriteString(resultCard)
	}
	sb.WriteString(`</div>`)
	return c.SendString(sb.String())
}

func saveSearchQuery(c *fiber.Ctx) error {
	input := new(Input)
	if err := c.BodyParser(input); err != nil {
		return err
	}
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return err
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()
	ctx := context.Background()
	_, err := client.SearchQueries.CreateOne(
		db.SearchQueries.Query.Set(input.Search),
		db.SearchQueries.Platform.Set(c.Get("User-Agent")),
		db.SearchQueries.UserAgent.Set(c.Get("Sec-Ch-Ua-Platform")),
	).Exec(ctx)
	if err != nil {
		log.Printf("Error saving search query: %s\n", err)
		return c.Next()
	}
	log.Printf("Search query saved")
	return c.Next()
}
