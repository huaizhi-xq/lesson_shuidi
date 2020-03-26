package main

import "fmt"

const (
	eat int = 4
	sleep int = 2
	da int = 1
)
//111
//左边1 吃饭 100
//中间1 睡觉 010
//右边1 打游戏 001
func f(arg int) {
	fmt.Printf("%b\n", arg)
}

func main() {
	//逻辑或
	f(eat | da)
	f(eat | da | sleep)
}
