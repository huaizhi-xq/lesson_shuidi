package main

import "fmt"

//Go语言中如果标识符首字母大写的，就表示对外部包可见(暴露的，公有的)

type dog struct {
	name string
}


func newDog(name string) *dog  {
	return &dog{
		name: name,
	}
}

//方法是作用域特定类型的函数
//接收者表示调用该方法的具体类型变量，多用类型名首字母小写表示
func (d dog)wang()  {
	d.name = "haha"
	fmt.Println(d.name,"汪汪")
}

func (d *dog)wang1()  {
	d.name = "haha"
	fmt.Println(d.name,"汪汪")
}

func main() {
	d1 := newDog("dd")
	d1.wang()
}
