package routes

import (
	"fmt"
	"net/url"

	"github.com/gofiber/fiber/v2"
	database "ytsruh.com/search/db"
	"ytsruh.com/search/lib"
)

type Input struct {
	Url string
}

type SearchTerm struct {
	SearchTerm string
}

func saveQueryMiddleware(c *fiber.Ctx) error {
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
}

func runSearch(c *fiber.Ctx) error {
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
}

func getStats(c *fiber.Ctx) error {
	results, err := database.GetPublicStats()
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "failed to get statistics",
		})
	}
	return c.Status(200).JSON(results)
}

func manualCrawl(c *fiber.Ctx) error {
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
}
