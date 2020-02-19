package main

import (
	"fmt"        //node里require('fs')
	"net/http"   //node里require('http')
	"io/ioutil"
)
// js  运行宿主  浏览器
func main() {
	fmt.Println("hello world")
	// 爬虫 go node(cheerio)
	// http 请求  fs 写入文件
	// node http.get   回调方式  
	// 同步 阻塞
	resp, err := http.Get("https://juejin.im/timeline")  //花时间
	if err != nil {
		fmt.Println("http get error", err)
		return
	}
	// fmt.Println(resp)
	// 网络IO 端口， 进来 
	// 文件IO 读入文件
	// resp Body ?响应体
	body, err := ioutil.ReadAll(resp.Body)  //go 库
	if err != nil {
		fmt.Println("read over")
		return
	}
	fmt.Println(string(body))
}