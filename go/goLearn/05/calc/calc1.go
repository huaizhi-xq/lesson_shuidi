package calc

import "fmt"

func init()  {
	fmt.Println("calc自动调用。。。")
}

//首字母大写表示公有的
func Add(x, y int) int {
	return  x+ y
}