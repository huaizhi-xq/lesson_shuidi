package main

import "fmt"

func main() {
	//要修改字符串，需要先将其转换成[]rune或[]byte，完成后再转换为string
	s1 := "big"
	//	强制类型转换
	byteS1 := []byte(s1)
	byteS1[0] = 'p'
	fmt.Printf(string(byteS1))
}