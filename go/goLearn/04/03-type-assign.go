package main

import "fmt"

//类型断言
func assign(a interface{})  {
	fmt.Printf("%T\n",a)
	str,ok := a.(string)
	if !ok {
		fmt.Println("猜错了")
	} else {
		fmt.Println("对了",str)
	}
	//fmt.Println(str)
}

func assign2(x interface{})  {
	switch v := x.(type) {
	case string:
		fmt.Printf("x is a string，value is %v\n", v)
	case int:
		fmt.Printf("x is a int is %v\n", v)
	case bool:
		fmt.Printf("x is a bool is %v\n", v)
	default:
		fmt.Println("unsupport type！")
	}
}

func main() {
	//assign(100)
	assign2(true)
	assign2("asd")
	assign2(100)
	assign2(int64(100))

}
