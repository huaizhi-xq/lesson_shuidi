package main

import "fmt"

type student struct {
	id int64
	name string
}

//管理者
type stuMgr struct {
	allStu map[int64]student
}

func (s stuMgr)addStu()  {
	var (
		id int64
		name string
	)
	fmt.Println("请输入学号")
	//fmt.Scanf("%d %s", &id, &name)
	fmt.Scanln(&id)
	fmt.Println("请输入姓名")
	fmt.Scanln(&name)
	newStu := student{
		id: id,
		name: name,
	}
	s.allStu[id] = newStu
}

func (s stuMgr)showStu()  {
	//map中所有学生
	for _,v := range s.allStu{
	fmt.Printf("学号 %d ; 姓名 %s.\n", v.id,v.name)
	}
}

func (s stuMgr)deleteStu()  {
	var id int64
	fmt.Println("请输入你要删除的学号")
	fmt.Scanln(&id)
	_,ok := s.allStu[id]
	if !ok {
		fmt.Println("没有该学号")
	} else {
		delete(s.allStu, id)
	}


}

func (s stuMgr)editStu()  {
	var id int64
	fmt.Println("请输入你要修改的学号")
	fmt.Scanln(&id)
	stuObj,ok := s.allStu[id]
	if !ok {
		fmt.Println("没有改学号")
	} else {
		var name string
		fmt.Println("请输入修改后的名字")
		fmt.Scanln(&name)
		//newStu := student{
		//	id: id,
		//	name: name,
		//}
		stuObj.name = name
		s.allStu[id] = stuObj
	}

}

