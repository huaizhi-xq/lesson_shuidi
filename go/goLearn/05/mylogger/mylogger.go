package mylogger

import (
	"errors"
	"fmt"
	"path"
	"runtime"
	"strings"
)



const (
	//定义日志级别
	UNKNOWN LogLever = iota
	DEBUG
	TRANCE
	INFO
	WARNING
	ERROR
	FATAL
)

//logger接口
type Logger interface {
	Debug(s string, a ...interface{})
	Info(s string, a ...interface{})
	Warning(s string, a ...interface{})
	Error(s string, a ...interface{})
	Fatal(s string, a ...interface{})
}

//日志级别
func parseLogLever(s string) (LogLever,error) {
	s = strings.ToLower(s)
	switch s {
	case "debug":
		return DEBUG ,nil
	case "trace":
		return TRANCE,nil
	case "info":
		return INFO,nil
	case "warning":
		return WARNING,nil
	case "fatal":
		return FATAL,nil
	case "error":
		return ERROR,nil
	default:
		err := errors.New("无效的日志级别")
		return UNKNOWN,err
	}
}
//反
func getLogString(lv LogLever) string {
	switch lv {
	case DEBUG:
		return "DEBUG"
	case TRANCE:
		return "TRANCE"
	case INFO:
		return "INFO"
	case WARNING:
		return "WARNING"
	case FATAL:
		return "FATAL"
	case ERROR:
		return "ERROR"
	default:
		return ""
	}
}

//获取代码信息
func getInfo(skip int) (funcName, fileName string, line int) {
	pc, file, line, ok := runtime.Caller(skip)
	if !ok {
		fmt.Println("runtime.Caller() failed")
		return
	}
	funcName = runtime.FuncForPC(pc).Name()
	fileName = path.Base(file)
	funcName = strings.Split(funcName,".")[1]
	return

}




