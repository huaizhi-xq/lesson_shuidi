package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

//waitGroup

func f()  {
	rand.Seed(time.Now().UnixNano())  //随机数种子
	for i:=0;i<5;i++  {
		n1 := rand.Int() //int64
		n2 := rand.Intn(10)  // 0<=x<=10
		fmt.Println(n1, n2)
	}
}

func f1(i int)  {
	defer wg.Done()
	fmt.Println(i)
}
var wg sync.WaitGroup
func main() {
	//f()
	//wg.Add(10)
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go f1(i)
	}
//	?如何知道10个goroutine都结束了
	wg.Wait() //等待wg的计数器减为0
}
