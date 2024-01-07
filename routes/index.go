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

var cachedPaths = [2]string{"/about"}

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
	app.Post("/clearsearch", func(c *fiber.Ctx) error {
		return c.SendString(`
		<div id="indicator" class="htmx-indicator">
			<div class="flex items-center justify-center w-full">
			<span class="h-20 w-20 loading loading-spinner text-primary"></span>
			</div>
		</div>
		<div class="flex justify-center items-center my-24">
			<h2 class="text-xl text-center italic">Your search results will appear here</h2>
		</div>`)
	})
	app.Post("/", saveSearchQuery, textSearch)
	app.Get("/about", setCache, renderAbout)
	app.Get("/metrics", monitor.New(monitor.Config{Title: "Live Server Metrics"}))
	app.Get("/login", func(c *fiber.Ctx) error {
		return c.Render("login", fiber.Map{
			"PageTitle": "Login to ytsruh search engine",
		})
	})
	app.Post("/login", login)
	app.Post("/logout", logoutUser)
	app.Get("/dashboard", authMiddleware, renderDashboard)
	app.Post("/dashboard", authMiddleware, updateSettings)
}
