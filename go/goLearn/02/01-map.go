package main

import "fmt"

func main()  {
	var m1 map[string]int
	fmt.Println(m1 == nil) //没有初始化（没有在内存中开辟空间）
	m1 = make(map[string]int, 10) //要估算号map容量，避免在程序运行期间扩容
	m1["a"] = 1
	m1["b"] = 2
	fmt.Println(m1["a"])
	fmt.Println(m1["c"])  //不存在  默认零值
//	约定成俗用ok接受返回的布尔值
	value, ok := m1["c"]
	if !ok {
		fmt.Println("没有该key")
	}else {
		fmt.Println(value)
	}

	//删除
	delete(m1,"b")

	for k,v := range m1 {
		fmt.Println(k,v)
	}


}
