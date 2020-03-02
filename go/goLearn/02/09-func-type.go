package main

import "fmt"

//函数类型

func a1()  {

}
func a2() int {
	return  1
}

//函数作为参数的类型
func a3(x func()int)  {
	ret := x()
	fmt.Println(ret)
}

func aa(a, b int) int {
	return  a + b
}

//函数作为返回值
func a4(x func()int) func(int,int) int  {
	return aa
}

func main() {
	a := a1
	fmt.Printf("%T\n",a)
	b := a2
	fmt.Printf("%T\n",b)
	a3(a2)
	aa := a4(a2)
	fmt.Println(aa(1,2))
}
