package main

import (
	"encoding/json"
	"fmt"
)

type person struct {
	Name string `json:"name"`
	Age int `json:"age"`
} 

func main() {
	str := `{"name":"张三","age":18}`
	fmt.Println(str)
	var p person
	json.Unmarshal([]byte(str), &p)
	fmt.Println(p)
}
