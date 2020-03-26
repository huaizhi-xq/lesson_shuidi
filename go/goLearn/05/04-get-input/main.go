package main

import (
	"bufio"
	"fmt"
	"os"
)

//获取用户时 如果有空格

func useBufio()  {
	var s string
	//os.Stdin   从终端读取
	reader := bufio.NewReader(os.Stdin)
	//reader.Read
	s, _ = reader.ReadString('\n')
	fmt.Println(s)
}

func main() {
	useBufio()
}
