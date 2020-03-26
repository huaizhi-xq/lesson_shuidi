package main

import (
	"fmt"
	"os"
)

//文件中间读

func f()  {
	fileObj, err := os.OpenFile("./xx.txt", os.O_RDWR, 0644)
	if err != nil {
		fmt.Println(err)
	}
	defer fileObj.Close()
	fileObj.Seek(3,0)  //光标移动 b
	fileObj.Write([]byte{'c'})
	//var ret [1]byte
	var ret = make([]byte,1)
	n, err := fileObj.Read(ret)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(string(ret[:n]))
}

func main() {
	f()
}
