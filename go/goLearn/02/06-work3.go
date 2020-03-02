package main

import "fmt"

//回文判断
//上海自来水来自海上    s[0]  s[len(s) -1]

func main() {
	ss := "a上海自来水来自海上a"
	//fmt.Println(ss[0],ss[8])
	r := make([]rune, 0, len(ss))
	//var r []rune
	for _,c := range ss {
		r = append(r,c)
	}
	fmt.Println(r)
	for i := 0; i < len(r)/2; i++ {
		if r[i] != r[len(r)-i-1] {
			fmt.Println("不是回文")
			return
		}
	}
	fmt.Println("是回文")
}

