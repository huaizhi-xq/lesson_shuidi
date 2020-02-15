# material design 来自google的风格
  苹果ui 受欢迎 拟物设计(乔布斯)
  安卓 (material design)

  css -》 组件 -> react 入门

  波浪的感觉
  css 思路
  - material design  在于对交互的创新
    按钮的波浪感  进度条的进度感
    移动端的细节  cursor: pointer   非button 组件
                  user-select: none
                  stylus 嵌入式 ::after :active::after

  1. background-image
    背景图片 url 引入的方式  在移动时代  渐变也可以生成
    即生成了背景，同时又没有用图片
    10% 白 1%的透明 
    transform: scale(12) 12->0

  2. 为开发准备好基础组件  
      按钮  warning 大小 块级
      复用  兼容性    
      各种常见要求(70%的业务开发)  
      css 变化(状态  primary circle block)  如何封装
      html区别？
      1. 样式封装
        组件(html,css,js) 成为一个组件
  
- ReactDOM  React 跟DOM交互的库
  JSX语法
  1. ReactDOM.render(...,document.getElementById('root'))
  2. 定义组件
   function Button(props) { 
    let { } = props
    return (

    )
  }