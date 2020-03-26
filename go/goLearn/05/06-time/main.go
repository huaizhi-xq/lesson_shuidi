package main

import (

	"fmt"
	"time"
)

//时间

func main() {
	now := time.Now()
	fmt.Printf("%T\n", now)
	//fmt.Println(now)
	
	//fmt.Println(now.Format("2006/01/02 15:04:05"))
	fmt.Println(f(now))
	fmt.Println(now.Unix())
	//fmt.Println(now.Month())
	ret := time.Unix(1596545132,0)
	fmt.Println(ret)
//	时间间隔  now + 24h
	fmt.Println(now.Add(24*time.Hour))
	tm := now.Add(24*time.Hour)
	fmt.Println(now.Sub(tm))

//	定时器
//	timer := time.Tick(time.Second)
//	for t := range timer {
//		fmt.Println(t)  //1s  执行一次
//	}
//	时间格式化
	fmt.Println(now.Format("2006-01-02 15:04:05.000 Mon Jan"))
	//把字符串的时间 转化为时间类型
	t,_ := time.Parse("2006-01-02", "2000-08-03")
	fmt.Println(t)
	fmt.Println(t.Unix())
}

func f(now time.Time) string  {
	return now.Format("2006/01/02 15:04:05")
}	


