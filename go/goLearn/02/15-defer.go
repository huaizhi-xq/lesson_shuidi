package main

import "fmt"

func calc1(index string, a, b int) int {
	ret := a + b
	fmt.Println(index, a, b, ret)
	return ret
}

func main() {
	x := 1
	y := 2
	defer calc1("AA", x, calc1("A", x, y))  //会先执行calc1("A", x, y)  然后再压入栈  用当前变量的值
	x = 10
	defer calc1("BB", x, calc1("B", x, y))
	y = 20
}
// A 1 2 3
// B 10 2 12
// BB 10 12 22
// AA 1 3 4