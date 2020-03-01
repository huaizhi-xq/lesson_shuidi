package main

import "fmt"

func main() {
	var a = [1]int {1}
	fmt.Printf("%T,%d",a,a)
	b := a[:]
	fmt.Printf("%T\n ",b)
}