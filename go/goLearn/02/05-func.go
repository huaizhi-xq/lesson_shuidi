package main

import "fmt"

func main() {
	a := sum(1,2)
	fmt.Println(a)

	f1("haha",1,2,3,4)
	
	fmt.Println(f2(2,1))
}

//函数的定义
func sum(x int, y int) (res int)  {
	res = x + y
	return  //直接返回命名的返回值
}

//可变参数
func f1(title string, y ...int) int  {
	fmt.Println(y) //y是一个int类型的切片
	return  1
}
//支持多个返回值
func f2(x, y int) (sum int, sub int)  {
	sum = x + y
	sub = x - y
	return 
}






