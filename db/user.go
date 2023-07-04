package database

import (
	"fmt"

	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
)

type CustomClaims struct {
	User                 string `json:"user"`
	Id                   uint   `json:"id"`
	jwt.RegisteredClaims `json:"claims"`
}

type User struct {
	Id       uuid.UUID `json:"id" gorm:"primaryKey;type:uuid;default:gen_random_uuid()"`
	Name     string    `json:"name"`
	Email    string    `json:"email"`
	Password []byte    `json:"password"`
}

func CreateUser(input *User) error {
	tx := db.Create(input)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return tx.Error
	}
	return nil
}

func GetUserByEmail(email string) (User, error) {
	var user User
	tx := db.Where("email = ?", email).First(&user)
	if tx.Error != nil {
		fmt.Print(tx.Error)
		return User{}, tx.Error
	}
	return user, nil
}
