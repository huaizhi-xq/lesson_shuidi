package main

import "fmt"

func main() {
//	1. &取地址
//	2. *：取地址值
//	n := 18
//	fmt.Println(&n)
//	p := &n
//	fmt.Printf("%T\n",p)
//	fmt.Println(*p)

	//var a *int //nil pointer
	//*a = 100
	//fmt.Println(*a)
//	new函数申请一个内存地址
	var a2 = new(int)
	fmt.Println(a2)

}