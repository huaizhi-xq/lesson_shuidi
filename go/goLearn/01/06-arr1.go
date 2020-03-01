package main

import "fmt"

func main() {
	arr := [...]int {1,3,5,7,8}
	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if arr[i] + arr[j] == 8 {
				fmt.Printf("(%d,%d)",i,j)
			}
		}
	}
}