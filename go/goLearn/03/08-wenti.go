package main

import "fmt"

//问题1. myInt(100) 是个啥？   int(100)  变量赋值100
type myInt1 int

func (m myInt1) hello()  {
	fmt.Println("我是一个int")

}

//问题2 结构体初始化
type  person4 struct {
	name string
	age int
}


//问题3 为什么要有构造函数  简便操作
func newPerson4(name string, age int) person4 {
	return person4{
		name: name,
		age: age,
	}
}

func main() {
	//m := myInt1(100) //强制类型转换
	//m.hello()
	//fmt.Println(m)
	
	//方法1
	var p person4  //声明person4类型的变量p
	p.name = "aa"
	p.age = 18
	//方法2 key-value
	var p2 = person4{
		name: "bb",
		age: 18,
	}
	fmt.Println(p2)
	//方法3 值列表初始化
	var p3 = person4{
		"cc",
		100,
	}
	fmt.Println(p3)
	
	var p4 = newPerson4("dd",18)
	fmt.Println(p4)
}
