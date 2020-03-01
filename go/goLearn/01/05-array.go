package main

import "fmt"

//数组

//存放元素的容器
//必须指定存放的元素的类型和容量
//数组的长度是数组类型的一部分  所以不能比较
func main() {
	var a1 [3]bool //[true false true]
	var a2 [4]bool

	fmt.Printf("a1:%T  a2:%T", a1, a2)

//	数组初始化
//如果不初始化：默认元素都是零值
	fmt.Println(a1, a2)
//	1. 初始化方式1
	a1 = [3]bool{true, false, true}
	fmt.Println(a1)
//	2. 根据初始值自动推断数组的长度
	a10 := [...]int{0,1,2,3,5}
	fmt.Println(a10)
//  3. 根据索引
	a3 := [5]int{0: 1,4: 2}
	fmt.Println(a3)

//	多维数组
	var a11 [3][2]int
	a11 = [3][2]int{
		[2]int{1,2},
		[2]int{3,4},
		[2]int{5,6},
	}
	fmt.Println(a11)
	for _, v1 := range  a11 {
		for _, v2 := range  v1 {
			fmt.Println(v2)

		}
	}
//	数组是值类型
	b1 := [3]int{1,2,3}
	b2 := b1
	b2[0] = 100
	fmt.Println(b1, b2)
}