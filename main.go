package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/template/html/v2"
	"github.com/joho/godotenv"
	"ytsruh.com/search/lib"
	"ytsruh.com/search/routes"
)

func main() {
	envErr := godotenv.Load()
	if envErr != nil {
		log.Println("Error loading .env file")
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = ":3000"
	} else {
		port = ":" + port
	}

	// Initialize standard Go html template engine
	engine := html.New("./views", ".html")

	app := fiber.New(fiber.Config{
		IdleTimeout: 5 * time.Second,
		// Views Layout is the global layout for all template render until override on Render function.
		Views:       engine,
		ViewsLayout: "layouts/main",
	})

	// Setup middleware & DB connection
	app.Use(compress.New())
	app.Use(helmet.New())
	app.Use(recover.New())

	// Define API routes & start cron tasks
	routes.SetAPIRoutes((app))
	lib.RunCron()

	// Serve front end by using the fallback route
	app.Static("/", "./static")

	//Start server with graceful shutdown
	// Listen from goroutine
	go func() {
		if err := app.Listen(port); err != nil {
			log.Panic(err)
		}
	}()

	c := make(chan os.Signal, 1)                    // Create channel to signify a signal being sent
	signal.Notify(c, os.Interrupt, syscall.SIGTERM) // When an interrupt or termination signal is sent, notify the channel

	<-c // Block main thread until an interrupt is received
	fmt.Println("Gracefully shutting down...")
	_ = app.Shutdown()
	// Your cleanup tasks go here
	// db.Close()
	fmt.Println("Fiber was successful shutdown.")
}
