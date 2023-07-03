package routes

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/monitor"

	jwtware "github.com/gofiber/contrib/jwt"
)

var SecretKey = os.Getenv("SECRET_KEY")

// Protected protect routes
func protected() fiber.Handler {
	// Settings based on https://github.com/gofiber/contrib/tree/main/jwt
	return jwtware.New(jwtware.Config{
		SigningKey:   jwtware.SigningKey{Key: []byte(SecretKey)},
		ErrorHandler: jwtError,
		TokenLookup:  "header:Authorization", // Location of the token in the request
		AuthScheme:   "",                     // Prefix of the Authorization header.
	})
}

func jwtError(c *fiber.Ctx, err error) error {
	if err.Error() == "Missing or malformed JWT" {
		return c.Status(fiber.StatusBadRequest).
			JSON(fiber.Map{"status": "error", "message": "Missing or malformed JWT", "data": nil})
	}
	return c.Status(fiber.StatusUnauthorized).
		JSON(fiber.Map{"status": "error", "message": "Invalid or expired JWT", "data": nil})
}

func SetRoutes(app *fiber.App) {
	auth := app.Group("/auth")
	auth.Post("/register", registerUser)
	auth.Post("/login", loginUser)
	auth.Get("/user", protected(), getUser)

	api := app.Group("/api")
	api.Get("/metrics", monitor.New(monitor.Config{Title: "Live Server Metrics"}))
	api.Post("/search", saveQueryMiddleware, runSearch)
	api.Post("/crawl", manualCrawl)
	api.Get("/stats", setCache, getStats)
	api.Post("/settings", updateSettings)
	api.Post("/create", manuallyCreateUrl)

}
