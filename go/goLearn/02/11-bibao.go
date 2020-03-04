package main

import "fmt"

//闭包

func adder()  func(int) int {
	var x int
	return func(y int) int {
		x += y
		return x
	}
}

func main() {
	var  f = adder()
	fmt.Println(f(10))
	fmt.Println(f(20))
	fmt.Println(f(30))

	f1 := adder()
	fmt.Println(f1(40))
	fmt.Println(f1(50))
}
