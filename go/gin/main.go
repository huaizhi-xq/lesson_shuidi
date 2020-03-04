package main

import (
	"github.com/gin-gonic/gin"
	"net/http"   //http 
)

// import "fmt"
// 代码里绝对不会有垃圾

func main()  {
	// map hashmap 数据结构  es6 map set es5 json object
	// countryCapitalMap := map[string]string
	// var countryCapitalMap map[string]string   //变量声明  没有分配空间
	// countryCapitalMap := make(map[string]string)
	// countryCapitalMap["France"] = "巴黎"
	// countryCapitalMap["Italy"] = "罗马"
	// countryCapitalMap["Japan"] = "东京"
	// countryCapitalMap["India"] = "新德里"

	// // 遍历
	// for k,v := range countryCapitalMap {
	// 	fmt.Println(k, v)
	// }
	// go gin web引擎
	engine := gin.Default() // const app = express()
	engine.GET("/",func(context *gin.Context) { 
		//context  koa ctx express req + res
		// int ->    http.StatusOK 200代码可读性
		context.String(http.StatusOK,"hello gin get method")
		// context.JSON(200, gin.H{ //返回json   gin.H json格式化的简写
		// 	"message": "pong",
		// }) //bilibili GO
	
	})
	// resetful   使用相对应的语义请求动词   url 语义化  
	engine.POST("/", func(context *gin.Context) {

		context.String(http.StatusOK,"hello gin post method")
	})
	// PUT 修改
	engine.PUT("/", func(context *gin.Context)  {
		
	})
	// DELETE 删除
	engine.DELETE("/", func(context *gin.Context)  {
		
	})
	//PATCH 更新局部
	engine.PATCH("/", func(context *gin.Context)  {
		
	})
	// http 请求头
	// 不在意返回内容 response
	// HEAD  只请求头部  在不获取资源情况下  了解资源的信息
	// 有没有改过？  文件大小  文件存在吗？
	engine.HEAD("/", func(context *gin.Context)  {
		
	})

	// OPTIONS  测试一个url支持的所有方法    允许客户端查看服务器的性能
	engine.OPTIONS("/", func(context *gin.Context)  {
		
	})

	// _不处理  不会分配内存 
	_ = engine.Run(":8888") //listen
}