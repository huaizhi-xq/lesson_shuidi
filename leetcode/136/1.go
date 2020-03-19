package main 

import "fmt"

func singleNumber(nums []int) int {
	// m := make(map[int]int)
	// for _,v := range nums {
	// 	_, ok := m[v]
	// 	if ok {
	// 		delete(m,v)
	// 	} else {
	// 		m[v] = 1
	// 	}
	//  }
	//  for k := range m {
	// 	return k
	//  }

	res := 0
	
	for _, n := range nums {
		//相同为0 不同为1   异或
		res ^= n
	}
	return res
}



func main() {
	fmt.Prinf("%d", singleNumber([]int{4,1,2,1,2}))
}