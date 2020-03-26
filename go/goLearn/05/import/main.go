package main

import (
	calc "05/calc"

	"fmt"
)

func init()  {
	fmt.Println("main自动调用。。。")
}


func main() {
	a := calc.Add(1,2)
	fmt.Println(a)
}
