package mylogger

import (
	"fmt"
	"os"
	"path"
	"time"
)

//往文件里面写日志

//文件结构体
type FileLogger struct {
	Level LogLever
	filePath string  //路径
	fileName string  //文件名
	maxFileSize int64
	fileObj *os.File
	errFileObj *os.File
}

//构造函数
func NewFileLogger(leverStr, fp, fn string, maxSize int64) (*FileLogger) {
	logLever, err := parseLogLever(leverStr)
	if err != nil {
		panic(nil)
	}
	fl := &FileLogger{
		Level: logLever,
		filePath: fp,
		fileName: fn,
		maxFileSize: maxSize,
	}
	err1 := fl.initFile()  //按照路径和文件名将文件打开
	if err1 != nil {
		fmt.Println(err1)
	}
	return fl
}

//按照路径和文件名将文件打开
func (f *FileLogger)initFile() (error)  {
	fullFileName := path.Join(f.filePath, f.fileName)
	fileObj, err := os.OpenFile(fullFileName, os.O_APPEND|os.O_CREATE|os.O_WRONLY,0644)
	if err != nil {
		fmt.Println("open log file faild", err)
		return err
	}
	errFileObj, err := os.OpenFile(fullFileName+".err", os.O_APPEND|os.O_CREATE|os.O_WRONLY,0644)
	if err != nil {
		fmt.Println("open log file faild", err)
		return err
	}
	//日志文件都已经打开
	f.fileObj = fileObj
	f.errFileObj = errFileObj
	return nil
	
}

//检测大小
func (f *FileLogger)checkSize(file *os.File) bool {
	fileInfo, err := file.Stat()
	if err != nil {
		fmt.Println(err)
		return false
	}
	//如果当前文件大小大于等于
	return  fileInfo.Size() >= f.maxFileSize
}

//判断级别
func (f *FileLogger)enable(lever LogLever) bool {
	return lever >= f.Level
}

//切割文件
func (f *FileLogger)splitFile() *os.File {
	if f.checkSize(f.fileObj) {
		//	需要切割
		//1. 关闭当前的日志文件
		//file.Close()
		f.fileObj.Close()
		//2. 备份一下  rename
		nowStr := time.Now().Format("20060102150405")
		var logName string
		logName = path.Join(f.filePath, f.fileName) //完整
		newName := fmt.Sprintf("%s.bak%s",logName,nowStr)
		os.Rename(logName, newName)
		//3. 打开一个新的文件
		fileObj, err := os.OpenFile(logName, os.O_APPEND|os.O_CREATE|os.O_WRONLY,0644)
		if err != nil {
			fmt.Println(err)
		}
		//4. 将打开的新日志文件赋值给file
		//file = fileObj
		return fileObj
	}
	return nil
}

func (f *FileLogger)splitErrFile()  *os.File {
	if f.checkSize(f.errFileObj) {
		//	需要切割
		//1. 关闭当前的日志文件
		//file.Close()
		f.errFileObj.Close()
		//2. 备份一下  rename
		nowStr := time.Now().Format("20060102150405")
		var logName string
		logName = path.Join(f.filePath, f.fileName+".err") //完整
		newName := fmt.Sprintf("%s.bak%s",logName,nowStr)
		os.Rename(logName, newName)
		//3. 打开一个新的文件
		errFileObj, err := os.OpenFile(logName, os.O_APPEND|os.O_CREATE|os.O_WRONLY,0644)
		if err != nil {
			fmt.Println(err)
		}
		//4. 将打开的新日志文件赋值给file
		return errFileObj
	}
	return nil
}

//输出
func (f *FileLogger)log(lv LogLever,msg string, a ...interface{})  {
	s := fmt.Sprintf(msg,a...)
	//fmt.Println(a)
	//s := msg
	now := time.Now()
	funcName, fileName, line := getInfo(3)
	//判断是否切割
	ok := f.splitFile()
	if ok != nil {
		f.fileObj = ok
	}
	fmt.Fprintf(f.fileObj,"[%s] [%s] [%s:%s:%d] %s\n",now.Format("2006-01-02 15:04:05"),getLogString(lv),fileName, funcName, line,s)
	if lv >= ERROR {
		//	级别大于error  还要再err文件再记录一遍
		//判断是否切割
		ok := f.splitErrFile()
		if ok != nil {
			f.errFileObj = ok
		}
		fmt.Fprintf(f.errFileObj,"[%s] [%s] [%s:%s:%d] %s\n",now.Format("2006-01-02 15:04:05"),getLogString(lv),fileName, funcName, line,s)
	}
}


func (f *FileLogger) Debug(s string, a ...interface{})  {
	if f.enable(DEBUG){
		f.log(DEBUG,s,a...)
	}
}

func (f *FileLogger) Info(s string, a ...interface{})  {
	if f.enable(INFO){
		f.log(INFO,s,a...)
	}
}

func (f *FileLogger) Warning(s string, a ...interface{})  {
	if f.enable(WARNING){
		f.log(WARNING,s,a...)
	}
}

func (f *FileLogger) Error(s string, a ...interface{})  {
	if f.enable(ERROR){
		//msg := fmt.Sprintf(s,a...)
		//fmt.Println(a)
		f.log(ERROR,s,a...)
	}
}

func (f *FileLogger) Fatal(s string, a ...interface{})  {
	if f.enable(FATAL){
		f.log(FATAL,s,a...)
	}
}

////关闭
//func (f *FileLogger)Close()  {
//	f.fileObj.Close()
//	f.errFileObj.Close()
//}

