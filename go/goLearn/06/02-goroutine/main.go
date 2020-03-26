package main

import (
	"fmt"
	"time"
)

//goroutine

func hello(i int)  {
	fmt.Println("hello", i)
}

//程序启动之后会创建一个主goroutine去执行
func main() {
	//go hello()  //开启一个单独goroutine 去执行hello函数()
	for i := 0; i < 100; i++  {
		go func(i int) {
			fmt.Println(i)
		}(i)
	}
	fmt.Println("main")
	//main函数结束了  有main函数启动的goroutine也读结束了
	time.Sleep(time.Second)
}
