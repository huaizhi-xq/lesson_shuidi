- 浏览器端的JS 最大的boss是window BOM BrowserObjectModel 天空
  DOM
    bonus 声明在全局范围内
    window.bonus 卫星
    .... 对全局变量的污染
- JS的编写应该在页面加载之后，JS只有在html，css加载完成后再去运行
  生命周期 window.onload
- window.onload 的执行函数 内部创造一个局部的作用域 
  bonus函数不会污染全局作用域 Window
- 如果有了新的type后，你怎么改这个函数
- 把事情做复杂了? 把switch case ，拆成了多个函数来做
  技术大牛，做大项目 
  设计模式：策略模式(Strategy Pattern)
  发工资，策略复杂
  - 随意加新等级 一个类的行为或其算法可以在运行时更改
  - 将策略细节隐去
