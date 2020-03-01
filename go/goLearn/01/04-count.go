package main

func main() {
	s := "hello沙河小王子"
	count := 0
	//键值循坏
	for _,v := range s {  //rune
		if v > 256 {
			count++
		}
	}
	print(count)
}