package main

import "fmt"

type person2 struct {
	name string
	age int
}

//当结构体的比较小的时候返回结构体，比较大返回结构体指针

func newPerson(name string, age int) person2  {
	return person2{
		name: name,
		age: age,
	}
}

func main() {
	p1 := newPerson("aa",18)
	p2 := newPerson("bb",18)
	fmt.Println(p1,p2)
}
