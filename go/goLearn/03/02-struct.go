package main

import "fmt"

type person struct {
	name string
	age int
	gender string
	hobby []string
}

//go struct是值类型  所以传地址
func f(x *person)  {
	//fmt.Println(x)
	//(*x).name = "小红"
	x.name = "小红"  //语法糖
}


func main() {
	var p person
	p.name = "小明"
	p.age = 18
	p.gender = "男"
	p.hobby = []string{"代码","睡觉"}
	//fmt.Println(p)
	//fmt.Printf("%T\n",p)
	
	//调用函数
	//fmt.Println(p.name)
	//f(&p)
	//fmt.Println(p.name)

	//var p2 = new(person)
	//fmt.Println(p2)
	//fmt.Printf("%T\n",p2)

	p3 := p
	fmt.Println(p3)
	p3.name = "小花"
	fmt.Println(p)
	fmt.Println(p3)
	
	//fmt.Println(&p)
	//fmt.Println(&p.name)
	//fmt.Println(&p.age)
	//fmt.Println(&p.gender)
	////fmt.Println(p.hobby)
	//fmt.Println(len(p.hobby))
	//fmt.Println(cap(p.hobby))

//	匿名结构体
	var s struct{
		x string
		y int
	}
	s.x = "sda"
	//fmt.Printf("%T\n", s)
}
