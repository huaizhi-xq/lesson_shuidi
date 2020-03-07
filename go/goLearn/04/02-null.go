package main

import "fmt"

//
// 空接口作为函数参数
func show(a interface{}) {
	fmt.Printf("type:%T value:%v\n", a, a)
}

func main() {
	//interface{}空接口类型  value可以任意类型
	var m1  map[string]interface{}
	m1 = make(map[string]interface{}, 16)
	m1["name"] = "aa"
	m1["age"] = 100
	m1["hobby"] = [...]string{"唱","跳","rap"}
	fmt.Println(m1)

	show(false)
	show(nil)
	show(m1)
}
