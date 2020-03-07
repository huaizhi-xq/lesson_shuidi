package main

import (
	"fmt"
	"os"
)

//学生管理系统

var smr stuMgr //声明全局变量  学生管理者对象

//菜单函数
func showMenu()  {
	fmt.Println("welcome sms!")
	fmt.Println(`
		1. 查看学生
		2. 添加学生
		3. 修改学生
		4. 删除学生
		5. 退出
	`)
}

func main() {
	smr = stuMgr{  //修改全局变量
		allStu: make(map[int64]student,48),
	}

	for {
		showMenu()
	//	等待用户输入
		fmt.Print("请输入操作：")
		var choice int
		fmt.Scanln(&choice)
		fmt.Println("你输入的是",choice)
		switch choice {
		case 1:
			smr.showStu()
		case 2:
			smr.addStu()
		case 3:
			smr.editStu()
		case 4:
			smr.deleteStu()
		case 5:
			os.Exit(1)
		default:
			fmt.Println("请重新输入")
		}
	}
}
