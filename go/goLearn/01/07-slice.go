package main

import "fmt"

func main() {
//	切片的定义
	var s1 []int //定义int的切片
	var s2 []string
	//初始化
	s1 = []int{1,2,3}
	s2 = []string{"sa","da","daf"}
	fmt.Println(s1,s2)
//	长度和容量
	fmt.Printf("len(s1):%d cap(s1): %d \n", len(s1),cap(s1))
	fmt.Printf("len(s2):%d cap(s2): %d \n", len(s2),cap(s2))
//	有数组得到切片
	a1 := [...]int{1,3,5,7,9}
	s3 := a1[2:] //基于数组切割，左闭右开  5 7 9
	fmt.Println(s3)
	//容量：底层数组从切片的第一个元素到最后的元素的数量
	fmt.Printf("len%d  cap:%d", len(s3),cap(s3))
	fmt.Println()
//	切片在切片
	s4 := s3[:2]  //5 7
	fmt.Printf("len%d  cap:%d", len(s4),cap(s4))

}
