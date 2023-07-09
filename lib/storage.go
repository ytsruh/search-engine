package lib

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	v4 "github.com/aws/aws-sdk-go-v2/aws/signer/v4"
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

type StoredObject struct {
	Key          *string    `json:"fileName"`
	DateModified *time.Time `json:"dateModified"`
}

// ListObjects lists the objects in bucket.
func ListObjects() ([]StoredObject, error) {
	client := getS3Client()
	prefix := "search"
	storageBucket := os.Getenv("STORAGE_BUCKET")
	result, err := client.ListObjectsV2(context.TODO(), &s3.ListObjectsV2Input{
		Bucket: aws.String(storageBucket),
		Prefix: &prefix,
	})
	var contents []StoredObject
	if err != nil {
		log.Printf("Couldn't list objects in bucket %v. Here's why: %v\n", storageBucket, err)
	} else {
		// Convert each result.Content to StoredObject and append to contents
		for _, obj := range result.Contents {
			storedObj := StoredObject{
				Key:          obj.Key,
				DateModified: obj.LastModified,
			}
			contents = append(contents, storedObj)
		}
	}
	return contents, err
}

func DeleteObject(objectKey string) error {
	client := getS3Client()
	storageBucket := os.Getenv("STORAGE_BUCKET")
	input := &s3.DeleteObjectInput{
		Bucket: aws.String(storageBucket),
		Key:    aws.String(objectKey),
	}
	_, err := client.DeleteObject(context.TODO(), input)
	if err != nil {
		return err
	}
	return nil
}

func GetPresignedURL(objectKey string, lifetimeSecs int64) (*v4.PresignedHTTPRequest, error) {
	client := getPresignClient()
	storageBucket := os.Getenv("STORAGE_BUCKET")
	if lifetimeSecs == 0 {
		// Assign a default value to lifetimeSecs if it is zero
		lifetimeSecs = 3600 // Default value of 1 hour
	}
	request, err := client.PresignGetObject(context.TODO(), &s3.GetObjectInput{
		Bucket: aws.String(storageBucket),
		Key:    aws.String(objectKey),
	}, func(opts *s3.PresignOptions) {
		opts.Expires = time.Duration(lifetimeSecs * int64(time.Second))
	})
	if err != nil {
		log.Printf("Couldn't get a presigned request to get %v:%v. Here's why: %v\n",
			storageBucket, objectKey, err)
	}
	return request, err
}

func PutPresignedURL(objectKey string, lifetimeSecs int64) (*v4.PresignedHTTPRequest, error) {
	client := getPresignClient()
	storageBucket := os.Getenv("STORAGE_BUCKET")
	if lifetimeSecs == 0 {
		// Assign a default value to lifetimeSecs if it is zero
		lifetimeSecs = 3600 // Default value of 1 hour
	}
	request, err := client.PresignPutObject(context.TODO(), &s3.PutObjectInput{
		Bucket: aws.String(storageBucket),
		Key:    aws.String(objectKey),
	}, func(opts *s3.PresignOptions) {
		opts.Expires = time.Duration(lifetimeSecs * int64(time.Second))
	})
	if err != nil {
		log.Printf("Couldn't get a presigned request to put %v:%v. Here's why: %v\n",
			storageBucket, objectKey, err)
	}
	return request, err
}

func DeletePresignedURL(objectKey string) (*v4.PresignedHTTPRequest, error) {
	client := getPresignClient()
	storageBucket := os.Getenv("STORAGE_BUCKET")
	request, err := client.PresignDeleteObject(context.TODO(), &s3.DeleteObjectInput{
		Bucket: aws.String(storageBucket),
		Key:    aws.String(objectKey),
	})
	if err != nil {
		log.Printf("Couldn't get a presigned request to delete object %v. Here's why: %v\n", objectKey, err)
	}
	return request, err
}

func getPresignClient() *s3.PresignClient {
	client := getS3Client()
	presignClient := s3.NewPresignClient(client)
	return presignClient
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
