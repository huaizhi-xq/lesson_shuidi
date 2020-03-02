package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "how do you do think you about"
	fmt.Println(str)
	strSlice := strings.Split(str, " ")
	fmt.Println(strSlice)
	m1 := make(map[string]int,10)  //map 的key唯一
	for _, v := range strSlice {
		m1[v] = m1[v] + 1
	}
	fmt.Println(m1)
}
