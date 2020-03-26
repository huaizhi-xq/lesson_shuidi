package main

import (
	"05/mylogger"
	"time"
)

var log mylogger.Logger   //声明一个全局的接口变量

//测试日志库
func main() {
	log = mylogger.NewConsoleLog("error")  //终端日志
	//文件日志
	log = mylogger.NewFileLogger("info","./","xx.log", 1024)
	for {
		log.Debug("这是一条Debug日志")
		log.Info("这是一条Info日志")
		log.Warning("这是一条Warning日志")
		id := 1111
		name := "aasd"
		log.Error("这是一条Error日志%d%s",id,name)
		log.Fatal("这是一条Fatal日志")
		time.Sleep(time.Second * 2)
	}



}
