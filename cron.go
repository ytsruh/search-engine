package main

import (
	"fmt"

	"github.com/robfig/cron/v3"
)

func RunCron() {
	c := cron.New()
	c.AddFunc("* * * * *", searchEngine)
	c.Start()
	fmt.Println(c.Entries())
	fmt.Println("Cron jobs started")
}

func searchEngine() {
	fmt.Println("Started search engine")
}
