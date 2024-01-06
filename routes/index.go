package routes

import (
	"os"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cache"
	"github.com/gofiber/fiber/v2/middleware/monitor"
)

var SecretKey = os.Getenv("SECRET_KEY")

var cachedPaths = [2]string{"/api/stats", "/api/admin/backups"}

var setCache = cache.New(cache.Config{
	Next: func(c *fiber.Ctx) bool {
		for _, cachedPath := range cachedPaths {
			if strings.Contains(c.Path(), cachedPath) {
				return false
			}
		}
		return true
	},
	Expiration:   2 * time.Minute,
	CacheControl: true,
})

func SetRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"PageTitle": "Welcome to the ytsruh search engine",
		})
	})
	app.Get("/about", func(c *fiber.Ctx) error {
		return c.Render("about", fiber.Map{
			"PageTitle": "About the ytsruh search engine",
		})
	})
	app.Get("/metrics", monitor.New(monitor.Config{Title: "Live Server Metrics"}))
}
