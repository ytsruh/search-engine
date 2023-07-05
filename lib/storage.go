package lib

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"os"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/feature/s3/manager"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func UploadFile(file []byte, filename string) error {
	var storageBucket = os.Getenv("STORAGE_BUCKET")
	client := getS3Client()
	uploader := manager.NewUploader(client)
	_, err := uploader.Upload(context.TODO(), &s3.PutObjectInput{
		Bucket: aws.String(storageBucket),
		Key:    aws.String(filename),
		Body:   bytes.NewReader(file),
	})
	if err != nil {
		fmt.Println(err)
		return errors.New("something went wrong uploading file")
	}
	return nil
}

func getS3Client() *s3.Client {
	storageSecret := os.Getenv("STORAGE_SECRET")
	storageKey := os.Getenv("STORAGE_KEY")
	storageRegion := os.Getenv("STORAGE_REGION")
	storageEndpoint := os.Getenv("STORAGE_ENDPOINT")
	creds := credentials.NewStaticCredentialsProvider(storageKey, storageSecret, "")

	customResolver := aws.EndpointResolverWithOptionsFunc(func(service, region string, options ...interface{}) (aws.Endpoint, error) {
		return aws.Endpoint{
			URL: storageEndpoint,
		}, nil
	})

	cfg, loadErr := config.LoadDefaultConfig(context.TODO(),
		config.WithRegion(storageRegion),
		config.WithCredentialsProvider(creds),
		config.WithEndpointResolverWithOptions(customResolver))
	if loadErr != nil {
		fmt.Println(loadErr)
	}

	client := s3.NewFromConfig(cfg)
	return client
}
