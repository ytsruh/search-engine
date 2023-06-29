package routes

import (
	"fmt"
	"net/url"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cache"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	database "ytsruh.com/search/db"
	"ytsruh.com/search/lib"
)

type Input struct {
	Url string
}

type SearchTerm struct {
	SearchTerm string
}

func SetRoutes(app *fiber.App) {
	api := app.Group("/api")

	api.Get("/metrics", monitor.New(monitor.Config{Title: "Live Server Metrics"}))
	api.Use("/search", func(c *fiber.Ctx) error {
		// Check if query is from localhost & ignore if true
		if c.IP() == "127.0.0.1" {
			// Go to next middleware:
			return c.Next()
		}
		// Get search term from body
		searchTerm := &SearchTerm{}
		if err := c.BodyParser(searchTerm); err != nil {
			fmt.Println(err)
			return c.JSON(fiber.Map{
				"message": "failed to parse request body",
			})
		}
		// Create query & save to database
		err := database.CreateQuery(&database.SearchQuery{
			Query:     searchTerm.SearchTerm,
			IP:        c.IP(),
			UserAgent: c.Get("User-Agent"),
			Platform:  c.Get("Sec-Ch-Ua-Platform"),
		})
		// Check if query was saved but no action needed
		if err != nil {
			println("failed to save query to database")
		}
		// Go to next middleware:
		return c.Next()
	})
	api.Post("/search", func(c *fiber.Ctx) error {
		searchTerm := &SearchTerm{}
		if err := c.BodyParser(searchTerm); err != nil {
			fmt.Println(err)
			return c.Status(500).JSON(fiber.Map{
				"message": "failed to parse request body",
			})
		}
		// Check if search term is empty
		if len(searchTerm.SearchTerm) == 0 {
			return c.Status(500).JSON(fiber.Map{
				"message": "search term is empty",
			})
		}
		// Search database for search term
		results, err := database.TextSearch(searchTerm.SearchTerm)
		if err != nil {
			return c.Status(500).JSON(fiber.Map{
				"message": "failed to get results",
			})
		}
		// Put results into new struct
		searchResults := []database.SearchResult{}
		for _, v := range results {
			searchResults = append(searchResults, database.SearchResult{
				Url:             v.Url,
				PageTitle:       v.PageTitle,
				PageDescription: v.PageDescription,
			})
		}
		return c.Status(200).JSON(fiber.Map{
			"count":   len(searchResults),
			"results": searchResults,
		})
	})
	// Set cache but only for the /api/stats route
	app.Use(cache.New(cache.Config{
		Next: func(c *fiber.Ctx) bool {
			return c.Path() != "/api/stats"
		},
		Expiration:   2 * time.Minute,
		CacheControl: true,
	}))
	api.Get("/stats", func(c *fiber.Ctx) error {
		results, err := database.GetPublicStats()
		if err != nil {
			return c.Status(500).JSON(fiber.Map{
				"message": "failed to get statistics",
			})
		}
		return c.Status(200).JSON(results)
	})
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
