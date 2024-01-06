package routes

import (
	"os"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cache"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	"github.com/golang-jwt/jwt/v5"
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
	api := app.Group("/api") // Routes located at : /api
	api.Get("/metrics", monitor.New(monitor.Config{Title: "Live Server Metrics"}))
	api.Post("/search", saveQueryMiddleware, runSearch)
	api.Post("/crawl", manualCrawl)
	api.Get("/stats", setCache, getStats)

	auth := api.Group("/auth") // Routes located at : /api/auth
	auth.Post("/register", registerUser)
	auth.Post("/login", loginUser)
	auth.Post("/logout", logoutUser)

	admin := api.Group("/admin") // Routes located at : /api/admin
	admin.Use(func(c *fiber.Ctx) error {
		// Get the cookie by name
		cookie := c.Cookies("search-engine")
		// Parse the cookie & check for errors
		token, err := jwt.ParseWithClaims(cookie, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
			return []byte(SecretKey), nil
		})
		if err != nil {
			c.Status(fiber.StatusUnauthorized)
			return c.JSON(fiber.Map{
				"message": "unauthenticated",
			})
		}
		// Parse the custom claims & check jwt is valid
		claims, ok := token.Claims.(*CustomClaims)
		if ok && token.Valid {
			c.Locals("user", claims)
			return c.Next()
		}
		// Return unauthorized if jwt is not valid
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "unauthenticated",
		})
	})
	admin.Get("/me", getUser)
	admin.Post("/create", manuallyCreateUrl)
	admin.Get("/settings", getSettings)
	admin.Put("/settings", updateSettings)

}
