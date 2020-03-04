package main

import "fmt"

func func1( f func())  {
	fmt.Println("this is func1")
	f()
}

func func2(x, y int)  {
	fmt.Println("this is func2")
	fmt.Println(x + y)
}

func func3(f func(int, int), x, y int) func()  {
	return func() {
		f(x, y)
	}
}

func main() {
	ret := func3(func2, 100, 100) //把原本需要两个int类型的参数包装成一个不需要传参的函数
	func1(ret)
}