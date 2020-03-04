package main

import "fmt"

//递归
func jc(n uint64) uint64 {
	if n < 2 {
		return 1
	}
	return n * jc(n-1)
}

func main() {
	ret := jc(7)
	fmt.Println(ret)
}
