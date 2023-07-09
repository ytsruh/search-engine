package lib

import (
	"log"
	"testing"

	"github.com/joho/godotenv"
)

func TestGetPresignClient(t *testing.T) {
	// Call the function
	presignClient := getPresignClient()

	// Assert the returned presignClient is not nil
	if presignClient == nil {
		t.Error("Expected non-nil presignClient, but got nil")
	}
}

func TestGetS3Client(t *testing.T) {
	// Set up test environment & load env
	envErr := godotenv.Load()
	if envErr != nil {
		log.Println("Error loading .env file")
	}
	// Call the function
	client := getS3Client()

	// Assert the returned client is not nil
	if client == nil {
		t.Error("Expected non-nil client, but got nil")
	}
}
