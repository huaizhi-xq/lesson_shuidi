- 界面的宏观视角
  结构>组件(cell)
  组件：界面构成的真正基础,拼积木一样来搭页面
  结构的套路
  .weui-cell 开启一个组件
    .weui-cell__hd Element
    .weio-cell__bd
    .weui-cell__ft
  bd + bd + ft
  __ 子元素关系 
  BEM Block Element Modifier

  - 研究微信官方的前端框架weui的源码
  - BEM 挺好的 类名得依据
  - .hd+.bd+.ft 少跟业务相关 多一些抽象
  - 弹性布局 align-items:center;居中
            flex:1;占据主体
  
  transform scaleY(0.5) 变细
  transform-origin 0 100% 基点
  & 上一级选择器内容直接继承
  flex 弹性布局 块级能力约束 在一行