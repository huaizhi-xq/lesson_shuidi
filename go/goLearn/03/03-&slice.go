package main

import "fmt"

func slice(a []int) {
	a[0] = 100
}

func main() {
	var a = make([]int,5,5)
	a[0] = 1
	a[1] = 2
	fmt.Println(a)
	slice(a)
	fmt.Println(a)
	b := a[0:4]
	fmt.Println(b)
	//fmt.Println(&a)
}
