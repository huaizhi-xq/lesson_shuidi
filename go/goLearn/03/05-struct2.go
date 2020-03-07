package main

import "fmt"

//结构体在内存中内存地址是连续的

//type x struct {
//	a int8 //8bit -> 1byte
//	b int8
//	c string
//}
//
//func main() {
//	m := x{
//		a: int8(10),
//		b: int8(20),
//		c: "hahah",  //恰到好处的内存对齐
//	}
//
//	fmt.Printf("%p\n", &(m.a))
//	fmt.Printf("%p\n", &(m.b))
//	fmt.Printf("%p\n", &(m.c))
//}


type student struct {
	name string
	age  int
}

func main() {
	m := make(map[string]*student)
	stus := []student{
		{name: "小王子", age: 18},
		{name: "娜扎", age: 23},
		{name: "大王八", age: 9000},
	}

	for _, stu := range stus {
		//fmt.Printf("%p\n", &stu)
		//fmt.Println(stu)
		m[stu.name] = &stu
	}
	for k, v := range m {
		fmt.Println(k, "=>", v.name)
	}
}
