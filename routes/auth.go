package routes

import (
	"context"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/steebchen/prisma-client-go/runtime/types"
	"golang.org/x/crypto/bcrypt"
	"ytsruh.com/search/db"
)

type LoginForm struct {
	Email    string `json:"email" form:"email"`
	Password string `json:"password" form:"password"`
}

type SettingsForm struct {
	Amount   int  `json:"amount" form:"amount"`
	SearchOn bool `json:"searchOn" form:"searchOn"`
	AddNew   bool `json:"addNew" form:"addNew"`
}

type CustomClaims struct {
	User                 string `json:"user"`
	Id                   string `json:"id"`
	jwt.RegisteredClaims `json:"claims"`
}

func authMiddleware(c *fiber.Ctx) error {
	// Get the cookie by name
	cookie := c.Cookies("search-engine")
	// Parse the cookie & check for errors
	token, err := jwt.ParseWithClaims(cookie, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})
	if err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.Redirect("/login")
	}
	// Parse the custom claims & check jwt is valid
	claims, ok := token.Claims.(*CustomClaims)
	if ok && token.Valid {
		c.Locals("user", claims)
		return c.Next()
	}
	// Redirect if jwt is not valid
	c.Status(fiber.StatusUnauthorized)
	return c.Redirect("/login")
}

func login(c *fiber.Ctx) error {
	formData := new(LoginForm)
	if err := c.BodyParser(formData); err != nil {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong logging in</h2>`)
	}
	// Validate Form Data
	if formData.Email == "" || formData.Password == "" {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong logging in</h2>`)
	}
	//Get User from DB
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong logging in</h2>`)
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()
	ctx := context.Background()
	user, err := client.Users.FindFirst(
		db.Users.Email.Equals(formData.Email),
	).Exec(ctx)
	if err != nil {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong logging in</h2>`)
	}
	// Compare Passwords
	password, ok := user.Password()
	if !ok {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong logging in</h2>`)
	}
	if err := bcrypt.CompareHashAndPassword(password, []byte(formData.Password)); err != nil {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Incorrect password</h2>`)
	}
	// Create JWT
	email, ok := user.Email()
	if !ok {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong logging in</h2>`)
	}
	claims := CustomClaims{
		email,
		user.ID,
		jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
			Issuer:    "search-engine",
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// Sign and get the complete encoded token as a string using the secret
	signedToken, err := token.SignedString([]byte(SecretKey))
	if err != nil {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong logging in</h2>`)
	}
	// Create and set the cookie
	cookie := fiber.Cookie{
		Name:     "search-engine",
		Value:    signedToken,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true, // Meant only for the server
	}
	c.Cookie(&cookie)
	c.Set("HX-Redirect", "/dashboard")
	return c.SendStatus(200)
}

func logoutUser(c *fiber.Ctx) error {
	// Create & set new cookie with expired date
	cookie := fiber.Cookie{
		Name:    "search-engine",
		Value:   "",
		Expires: time.Now().Add(-time.Hour),
	}
	c.Cookie(&cookie)
	c.Set("HX-Redirect", "/login")
	return c.SendStatus(200)
}

func renderDashboard(c *fiber.Ctx) error {
	//Get Settings from DB
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return err
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()
	settings, err := client.Settings.FindFirst().Exec(context.Background())
	if err != nil {
		return err
	}
	amount, ok := settings.Amount()
	if !ok {
		return err
	}
	searchOn, ok := settings.SearchOn()
	if !ok {
		return err
	}
	addNew, ok := settings.AddNew()
	if !ok {
		return err
	}
	return c.Render("dashboard", fiber.Map{
		"PageTitle": "Login to ytsruh search engine",
		"Amount":    amount,
		"SearchOn":  searchOn,
		"AddNew":    addNew,
	})
}

func updateSettings(c *fiber.Ctx) error {
	time.Sleep(5 * time.Second)
	settingInput := new(SettingsForm)
	if err := c.BodyParser(settingInput); err != nil {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong updating settings.</h2>`)
	}
	// Update database
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong updating settings.</h2>`)
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()
	_, err := client.Settings.FindUnique(
		db.Settings.ID.Equals(1),
	).Update(
		db.Settings.Amount.Set(types.BigInt(settingInput.Amount)),
		db.Settings.SearchOn.Set(settingInput.SearchOn),
		db.Settings.AddNew.Set(settingInput.AddNew),
	).Exec(context.Background())
	if err != nil {
		return c.SendString(`<h2 class="text-xl py-5 text-warning">Error: Something went wrong updating settings.</h2>`)
	}
	return c.SendString(`<h2 class="text-xl py-5 text-primary">Success: Settings updated</h2>`)
}
