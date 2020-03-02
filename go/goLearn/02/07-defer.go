package main

import "fmt"

//defer

func main() {
	deferDemo()
}

func deferDemo()  {
	fmt.Println(1)
	defer fmt.Println(2) //延迟到函数即将返回的时候执行
	defer fmt.Println(3) //多个defer  栈顺序执行
	fmt.Println(4)
}
