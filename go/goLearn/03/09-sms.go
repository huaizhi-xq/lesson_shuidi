package main

import (
	"fmt"
	"os"
)

/**
函数版学生管理系统
查看 新增 删除
*/

type student1 struct {
	id int64
	name string
}

func newStudent1(id int64, name string) *student1  {
	return &student1{
		id: id,
		name: name,
	}
}

var (
	allStudent map[int64]*student1 //变量声明
)

func showAllS()  {
//	打印所有学生
	for k,v := range allStudent {
		fmt.Printf("学号 %d  姓名 %v\n", k,v.name)
	}
}

func addS()  {
//	添加
//	1. 创建  追加
	var (
		id int64
		name string
	)
	fmt.Print("请输入学号")
	fmt.Scanln(&id)
	fmt.Print("请输入姓名")
	fmt.Scanln(&name)
	newStu := newStudent1(id, name)
	allStudent[id] = newStu
}

func deleteS()  {
//	用户输入
//删除
	var deleteId int64
	fmt.Print("请输入删除学号")
	fmt.Scanln(&deleteId)
	delete(allStudent,deleteId)
}


func main() {
	allStudent = make(map[int64]*student1, 48) //开辟内存空间
	for {
		//	1. 打印菜单
		fmt.Println("****欢迎****")
		fmt.Println(`
		1. 查看所有学生
		2. 新增学生
		3. 删除学生
		4. 退出
	`)
		fmt.Print("请选择:")
		//	2. 等待用户要做什么
		var choice int
		fmt.Scanln(&choice)
		fmt.Printf("你选择了%d\n",choice)
		//	3. 执行相应的函数
		switch choice {
		case 1:
			showAllS()
		case 2:
			addS()
		case 3:
			deleteS()
		case 4:
			os.Exit(1)
		default:
			fmt.Println("gun")




		}
	}
}
