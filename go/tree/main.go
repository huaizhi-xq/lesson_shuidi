//  树  递归   复杂问题由多个相同简单问题  退出条件

// Vue 应用场景  树状组件  递归组件

package main

import (
	"fmt"
)

// 矩形类 GO OO

type Rectangle struct {
	Length int
	Width  int
}

// prototype
// 接收者
func (r *Rectangle) Area() int {
	return r.Length * r.Width
}

func main() {
	r := Rectangle{4, 2} //go 面向对象
	fmt.Println(r.Area())
}
