package main

import "fmt"

func f11() int {
	x := 5
	defer func() {
		x++ //修改x  不是返回值
	}()
	return  x
}

func f22() (x int)  {
	defer func() {
		x++
	}()
	return  5   //返回x
}

func f3() (y int) {
	x := 5
	defer func() {
		x++
	}()
	return x  //返回y = x(5)
}
func f4() (x int) {
	defer func(x int) {
		x++  //改变的是x的副本
	}(x)   //参数传进去
	return 5  // x = 5
}
func main() {
	fmt.Println(f11())
	fmt.Println(f22())
	fmt.Println(f3())
	fmt.Println(f4())
}