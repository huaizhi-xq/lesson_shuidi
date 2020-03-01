package main

import "fmt"

func main() {
	s1 := []string{"北京", "上海", "深圳"}
	fmt.Printf("s1:%v  len:%d cap:%d\n", s1, len(s1),cap(s1))
	//s1[3] = "广州" //error 索引越界
	//fmt.Println(s1);
	//调用append函数必须用原来的切片变量接受返回值
	s1 = append(s1, "广州")//append追加元素，原来的底层数组放不下的时候，物理位置会改变，重新分配内存块
	fmt.Printf("s1:%v  len:%d cap:%d\n", s1, len(s1),cap(s1))
	s1 = append(s1, "杭州","成都")
	fmt.Printf("s1:%v  len:%d cap:%d\n", s1, len(s1),cap(s1))
	ss := []string{"武汉","西安","苏州"}
	s1 = append(s1,ss...)  //...表示拆开
	fmt.Printf("s1:%v  len:%d cap:%d\n", s1, len(s1),cap(s1))

}
