// let template = '我是{{name}}, 年龄{{age}},性别{{sex}}' //待编译的模板

// let data = {
//   name: '蔡徐坤',
//   age: '18',
//   sex: '男'
// }

// vue 的 render()

var render = function(template, data) {
  const reg = /\{\{(\w+)\}\}/; //不做贪婪匹配 
  if (reg.test(template)) {  //退出条件 false
     //是否需要编译
    // vue源码模板编译用的正则方法
    const key = reg.exec(template)[1]
    // console.log(key)
    template = template.replace(reg, data[key]);
    return  render(template, data)  //递归渲染
  }

  // template.replace(/{{(.)+/)
  return template
}



// render(template, data)
// console.log(render(template, data))