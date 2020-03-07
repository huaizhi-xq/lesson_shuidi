package main

import "fmt"

type person1 struct {
	name, gender string
}

func main() {
	//var p person1
	//p.name = "zs"
	//p.gender = "nan"
	//fmt.Println(p)
	//var p =new(person1)
	//p.name = "asd"
	//(*p).gender = "男"
	//fmt.Printf("%T\n", p)
	//fmt.Printf("%p\n",p)   //p保存的值就是个内存地址
	//fmt.Printf("%p\n", &p) //p的内存的地址
	//fmt.Println(p)

	//key-value初始化
	//var p3 = person1{
	//	name: "原生",
	//	gender: "nan",
	//}
	//fmt.Printf("%#v\n",p3)

//	使用值列表的形式初始化，值得顺序和定义时候顺序一致 而且不能少
	p4 := person1{
		"小王子",
		"男",
	}
	fmt.Printf("%#v\n", p4)
}
