package main

import "log"

type User struct {
	Name string
	Age  int
}

func main() {
	u := User{
		Name: "呜呜呜",
		Age:  18,
	} //声明标量 赋值  类型推断
	log.Printf("hello struct %s， age is %d", u.Name, u.Age)
}
