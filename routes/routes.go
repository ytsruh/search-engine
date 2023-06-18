package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	"net/url"
	"ytsruh.com/search/crawler"
)

type Input struct {
	Url string
}

func SetRoutes(app *fiber.App) {
	api := app.Group("/api")

	api.Get("/metrics", monitor.New(monitor.Config{Title: "Metrics Page"}))

	api.Post("/crawl", func(c *fiber.Ctx) error {
		input := new(Input)
		if err := c.BodyParser(input); err != nil {
			return c.JSON(fiber.Map{
				"message": "failed to parse body request",
			})
		}
		url, err := url.ParseRequestURI(input.Url)
		if err != nil {
			return c.JSON(fiber.Map{
				"message": "invalid url was provided",
				"url":     input.Url,
			})
		}
		response := crawler.RunCrawl(url.String())
		return c.JSON(fiber.Map{
			"message": response,
		})
	})

}
