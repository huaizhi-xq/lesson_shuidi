package main

import "fmt"

//匿名函数
func main() {
	//函数内部没有办法声明带名字的函数
	fa := func(x,y int) {
		fmt.Println(x*y)
	}
	fa(5,6)

//	如果只是执行一次   可以写立即执行函数
	func(x, y int) {
		fmt.Println(x+y)
	}(5,6)
}
