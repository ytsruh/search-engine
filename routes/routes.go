package routes

import (
	"net/url"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	database "ytsruh.com/search/db"
	"ytsruh.com/search/lib"
)

type Input struct {
	Url string
}

func SetRoutes(app *fiber.App) {
	api := app.Group("/api")

	api.Get("/metrics", monitor.New(monitor.Config{Title: "Live Server Metrics"}))
	api.Post("/settings", func(c *fiber.Ctx) error {
		settings := &database.Settings{
			ID: 1,
		}
		if err := c.BodyParser(settings); err != nil {
			return c.JSON(fiber.Map{
				"message": "failed to parse request body",
			})
		}
		_, err := database.UpdateSettings(*settings)
		if err != nil {
			return c.JSON(fiber.Map{
				"message": "failed to update settings",
			})
		}
		return c.JSON(fiber.Map{
			"message": "settings were updated",
		})
	})
	api.Post("/crawl", func(c *fiber.Ctx) error {
		input := new(Input)
		if err := c.BodyParser(input); err != nil {
			return c.JSON(fiber.Map{
				"message": "failed to parse request body",
			})
		}
		url, err := url.ParseRequestURI(input.Url)
		if err != nil {
			return c.JSON(fiber.Map{
				"message": "invalid url was provided",
				"url":     input.Url,
			})
		}
		response := lib.RunCrawl(url.String())
		return c.JSON(fiber.Map{
			"message": "crawl successful",
			"data":    response,
		})
	})

	api.Post("/create", func(c *fiber.Ctx) error {
		input := new(Input)
		if err := c.BodyParser(input); err != nil {
			return c.JSON(fiber.Map{
				"message": "failed to parse request body",
			})
		}
		url, err := url.ParseRequestURI(input.Url)
		if err != nil {
			return c.JSON(fiber.Map{
				"message": "invalid url was provided",
				"url":     input.Url,
			})
		}
		inputData := database.CrawledUrl{
			Url: url.String(),
		}
		error := database.CreateUrl(&inputData)
		if error != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "could not create new url" + error.Error(),
			})
		}
		return c.Status(200).JSON(fiber.Map{
			"message": "successfully created new url",
			"data":    inputData,
		})
	})

}
