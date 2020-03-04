package main

import (
	"fmt"
)

/*
你有50枚金币，需要分配给以下几个人：Matthew,Sarah,Augustus,Heidi,Emilie,Peter,Giana,Adriano,Aaron,Elizabeth。
分配规则如下：
a. 名字中每包含1个'e'或'E'分1枚金币
b. 名字中每包含1个'i'或'I'分2枚金币
c. 名字中每包含1个'o'或'O'分3枚金币
d: 名字中每包含1个'u'或'U'分4枚金币
写一个程序，计算每个用户分到多少金币，以及最后剩余多少金币？
程序结构如下，请实现 ‘dispatchCoin’ 函数
*/
var (
	coins = 50
	users = []string{
		"Matthew", "Sarah", "Augustus", "Heidi", "Emilie", "Peter", "Giana", "Adriano", "Aaron", "Elizabeth",
	}
	distribution = make(map[string]int, len(users))
)

func main() {
	left := dispatchCoin()
	fmt.Println("剩下：", left)
}

func dispatchCoin() int {
	//1. 依次拿到每个名字
	//2. 根据规则分金币  保存到distribution  还要记录剩余的金币
	//3. 返回
	total := 0
	for _,v1 := range users {
		count := 0
		//for _,v2 := range strings.Split(v1,"") {
		//	//fmt.Println(v2)
		//	//break
		//	switch  {
		//		case v2 == "e" || v2 == "E":
		//			count++
		//		case v2 == "i" || v2 == "I":
		//			count += 2
		//		case v2 == "o" || v2 == "O":
		//			count += 3
		//		case v2 == "u" || v2 == "U":
		//			count += 4
		//	}
		//}
		for _,v2 := range v1 {
			switch v2 {
				case  'e' , 'E':
					count++
				case 'i' , 'I':
					count += 2
				case  'o' , 'O':
					count += 3
				case  'u' , 'U':
					count += 4

			}
		}
		distribution[v1] = count
		total += count
	}
	fmt.Println(distribution)
	return 50 - total
}