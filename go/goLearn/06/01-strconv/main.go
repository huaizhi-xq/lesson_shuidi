package main

import (
	"fmt"
	"strconv"
)

func main() {

	//i := int32(97)
	//ret := string(i)   //编码
	//fmt.Println(ret)
	//字符串解析出对应的数据
	str := "1000"
	i,_ := strconv.ParseInt(str, 10, 64)
	fmt.Printf("%d %T\n", i,i)

	//字符串 -> 整型
	ret,_ := strconv.Atoi(str)
	fmt.Printf("%T\n", ret)
	ret1 := strconv.Itoa(ret)
	fmt.Printf("%T\n", ret1)

//	字符串解析布尔值
	boolStr := "true"
	boolValue,_ := strconv.ParseBool((boolStr))
	fmt.Printf("%T\n", boolValue)

}
