package main

import "fmt"

type address struct {
	city string
} 

type person5 struct {
	name string
	age int
	addr address
}

type company struct {
	name string
	address //匿名嵌套结构体
} 

func main() {
	p1 := person5{
		name: "aa",
		age: 18,
		addr: address{
			city: "jx",
		},
	}
	fmt.Println(p1.addr.city)
	
	c1 := company{
		name: "bb",
		address: address{
			city: "a",
		},
	}
	fmt.Println(c1.city)//现在自己结构体里找，再往匿名嵌套结构体里找  如果俩个匿名结构体字段一样了，就要写全
}
