package main

import "fmt"

//引出接口实例
type cat struct {}
type dog struct {}

type animal interface {  //接口嵌套
	speaker
	mover
}

//
type speaker interface {
	speak()  //只要实现了speak方法的变量都是speak类型
}

type mover interface {
	move()
}

func (c cat)speak()  {
	fmt.Println("喵")
}
func (c cat)move()  {
	fmt.Println("猫move")
}

func (d dog) speak()  {
	fmt.Println("汪")
}

func da(x speaker)  {
	//多态
	x.speak()
}

func m(x mover)  {
	x.move()
}



func main() {
	//var c1 cat
	////fmt.Println(c1)
	////c1.speak()
	//da(c1)
	////c1.move()
	//m(c1)
	//var d1 dog
	////d1.speak()
	//da(d1)

	var s speaker
	var m mover
	var c1 = cat{}
	s = c1
	m = c1
	s.speak()
	m.move()

}

