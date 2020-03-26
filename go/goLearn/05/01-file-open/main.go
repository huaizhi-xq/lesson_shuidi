package main

import (
	"bufio"
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

//Read
func readFile1()  {
	fileObj, err := os.Open("./main.go")
	if err!= nil {
		fmt.Println(err)
		return
	}
	//	记得关闭文件
	defer fileObj.Close()
	//读取文件
	var tmp = make([]byte, 128) //指定读长度
	for {
		n, err := fileObj.Read(tmp)
		if err == io.EOF {
			fmt.Println("文件读完了")
			return
		}
		if err!= nil {
			fmt.Println(err)
			return
		}
		fmt.Printf("读了%d\n", n)
		fmt.Println(string(tmp[:n]))
		if n < 128 {
			return
		}
	}
}

//bufio
func readFile2()  {
	file, err := os.Open("./main.go")
	if err != nil {
		fmt.Println("open file failed, err:", err)
		return
	}
	defer file.Close()
	//创建一个用来从文件中读内容的对象
	reader := bufio.NewReader(file)
	for {
		line, err := reader.ReadString('\n') //注意是字符
		if err == io.EOF {
			if len(line) != 0 {
				fmt.Println(line)
			}
			fmt.Println("文件读完了")
			break
		}
		if err != nil {
			fmt.Println("read file failed, err:", err)
			return
		}
		fmt.Print(line)
	}
}

//ioutil
func readFile3()  {
	content, err := ioutil.ReadFile("./main.go")
	if err != nil {
		fmt.Println("read file failed, err:", err)
		return
	}
	fmt.Println(string(content))
}

func main() {
	//readFile1()
	//readFile2()
	readFile3()
}
