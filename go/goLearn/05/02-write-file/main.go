package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
)

//写入

//write writeString
func writeDemo1()  {
	// \ 或
	fileObj,err := os.OpenFile("./xx.txt", os.O_CREATE|os.O_TRUNC, 0644)
	if err != nil{
		fmt.Println(err)
		return
	}
	defer fileObj.Close()
	//	write
	fileObj.Write([]byte("hahahahaha\n"))
	//	writeString
	fileObj.WriteString("hehehehehe\n")
}

//bufio
func writeDome2()  {
	fileObj,err := os.OpenFile("./xx.txt", os.O_CREATE|os.O_TRUNC, 0644)
	if err != nil{
		fmt.Println(err)
		return
	}
	defer fileObj.Close()
//	创建一个写的对象
	wr := bufio.NewWriter(fileObj)
	wr.WriteString("hello\n");  //写到缓存中
	wr.Flush()  //将缓存中的内容写入文件
}

//ioutil.WriteFile
func writeDome3()  {
	str := "hello 你好"
	err := ioutil.WriteFile("./xx.txt", []byte(str), 0666)
	if err != nil {
		fmt.Println("write file failed, err:", err)
		return
	}
}

func main() {
	//writeDemo1()
	//writeDome2()
	writeDome3()
}

