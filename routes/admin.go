package routes

import (
	"net/url"

	"github.com/gofiber/fiber/v2"
	database "ytsruh.com/search/db"
	"ytsruh.com/search/lib"
)

func manuallyCreateUrl(c *fiber.Ctx) error {
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
}

func getSettings(c *fiber.Ctx) error {
	settings, err := database.GetSettings()
	if err != nil {
		return c.JSON(fiber.Map{
			"message": "failed to update settings",
		})
	}
	return c.JSON(fiber.Map{
		"settings": settings,
	})
}

func updateSettings(c *fiber.Ctx) error {
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
}

func getBackupList(c *fiber.Ctx) error {
	results, err := lib.ListObjects()
	if err != nil {
		return c.JSON(fiber.Map{
			"message": "error getting objects",
		})
	}
	return c.Status(200).JSON(results)
}

func deleteBackupObject(c *fiber.Ctx) error {
	fullPath := "search/" + c.Params("fileName")
	err := lib.DeleteObject(fullPath)
	if err != nil {
		return c.JSON(fiber.Map{
			"message": "error deleting object",
		})
	}
	return c.Status(200).JSON(fiber.Map{
		"message": "object deleted",
	})
}
