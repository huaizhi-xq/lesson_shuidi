package mylogger

import (
	"fmt"
	"time"
)

//往终端写日志

type LogLever uint16



//日志结构体
type consoleLogger struct {
	Lever LogLever
}



//构造函数
func NewConsoleLog(leverStr string) consoleLogger  {
	lever, err := parseLogLever(leverStr)
	if err != nil {
		panic(err)
	}
	return consoleLogger{
		Lever: lever,
	}
}

//判断级别
func (l consoleLogger)enable(lever LogLever) bool {
	return lever >= l.Lever
}

//输出
func log(lv LogLever,msg string, a ...interface{})  {
	s := fmt.Sprintf(msg,a...)
	//fmt.Println(a)
	//s := msg
	now := time.Now()
	funcName, fileName, line := getInfo(3)
	fmt.Printf("[%s] [%s] [%s:%s:%d] %s\n",now.Format("2006-01-02 15:04:05"),getLogString(lv),fileName, funcName, line,s)
}

func (l consoleLogger) Debug(s string, a ...interface{})  {
	if l.enable(DEBUG){
		log(DEBUG,s,a...)
	}
}

func (l consoleLogger) Info(s string, a ...interface{})  {
	if l.enable(INFO){
		log(INFO,s,a...)
	}
}

func (l consoleLogger) Warning(s string, a ...interface{})  {
	if l.enable(WARNING){
		log(WARNING,s,a...)
	}
}

func (l consoleLogger) Error(s string, a ...interface{})  {
	if l.enable(ERROR){
		//msg := fmt.Sprintf(s,a...)
		//fmt.Println(a)
		log(ERROR,s,a...)
	}
}

func (l consoleLogger) Fatal(s string, a ...interface{})  {
	if l.enable(FATAL){
		log(FATAL,s,a...)
	}
}