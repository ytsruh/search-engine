package main

import (
	"fmt"

	"ytsruh.com/search/crawler"
)

func main() {
	response := crawler.RunCrawl("https://www.ytsruh.com")
	fmt.Println(response)
}
