package routes

import (
	"context"

	"github.com/gofiber/fiber/v2"
	"ytsruh.com/search/db"
)

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
