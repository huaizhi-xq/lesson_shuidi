package main

import (
	"encoding/json"
	"fmt"
)

//结构体变量  《-》 json格式的字符串    序列化 反序列化

type per struct {
	Name string  `json:"name"`
	Age int		`json:"age"`
}

func main() {
	p1 := per{
		Name: "aa",
		Age: 18,
	}
	//序列化
	b, err := json.Marshal(p1)
	if err != nil {
		fmt.Println("错误")
		return
	}
	fmt.Printf("%#v",string((b)))
//	反序列化
	str := `{"name":"理想","age":18}`
	var p2 per
	json.Unmarshal([]byte(str), &p2)  //传地址
	fmt.Printf("%#v\n", p2)


}
