package main

import (
	"fmt"
	"log"
	"os"
	"time"
)

func main() {
	file, err := os.OpenFile("./xx.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		fmt.Println(err)
	}
	log.SetOutput(file)
	for {
		log.Println("这是一条测试的日志")
		time.Sleep(time.Second * 3)
	}
}
