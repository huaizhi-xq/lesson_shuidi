package main

import "fmt"

func main() {
	type Map map[string][]int   //值为切片类型的map
	m := make(Map)
	s := []int{1, 2}
	s = append(s, 3)
	fmt.Printf("%+v\n", s)  // 1 2 3
	m["q1mi"] = s
	s = append(s[:1], s[2:]...)
	fmt.Printf("%+v\n", s)//1 3
	fmt.Printf("%+v\n", m["q1mi"]) //1 3 3
}
