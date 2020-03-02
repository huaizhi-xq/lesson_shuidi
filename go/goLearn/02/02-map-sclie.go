package main

import "fmt"

func main() {
//	元素为map类型的切片
	var s1 = make([]map[int]string, 10, 10)
	//没有对内部的map初始化
	//s1[0][100] = "a"
	s1[0] = make(map[int]string, 1)  //初始化map
	s1[0][10] = "aa"
	fmt.Println(s1)

	//	值为切片类型的map
	var m1 = make(map[string][]int, 10)
	m1["北京"] = []int{10,20,30}
	fmt.Println(m1)
}

