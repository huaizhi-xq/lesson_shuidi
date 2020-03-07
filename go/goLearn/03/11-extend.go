package main

import "fmt"

//结构体模拟实现其他语言中的“继承”

type animal struct {
	name string
}

func (a animal) move()  {
	fmt.Printf("%s会动\n", a.name)
}

type dog1 struct {
	feet uint8
	animal  //dog也拥有animal中的方法
}

func (d dog1)wang()  {
	fmt.Println("$s   汪汪", d.name)
}

func main() {
	d1 := dog1{
		feet:4,
		animal: animal{name:"aa"},
	}
	d1.wang()
	d1.move()
}
