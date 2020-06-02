## BEM


## css-module   vs  scope
scope: .vue 组件帮你处理了 css 模块化

命名冲突
.main .wrap .button 

```css
css 模块化
@import 
```
<style lang="" scope></style>

```js
loader: 'css-loader',
options: {
  modules: {
    mode: 'local',
    exportGlobals: true,
    localIdentName: '[hash:base64]',
    hashPrefix: 'my-custom-hash',
  },
},
```

```css
._23_aKvs-b8bW2Vg3fwHozO {
  background: red;
  color: yellow;
}

._13LGdX8RMStbBE9w-t0gZ1 {
  background: blue;
}
```
只在当前组件生效：
<div data-v-00e8ca52="" data-v-6fdc8784="" class="view timeline-index-view">
.container .view.timeline-index-view[data-v-00e8ca52]

## css in js
css 里面使用js变量
styled-component
```jsx
const Active = styled.div`
  color: ${active} ? red : black  //props => props.active
`
```


## js in css    ===  css Houdini
css 标准
why  css Houdini ?  css 标准实现太慢了
flex 2009

js: import('./')
还没纳入js标准    babel 编译

less sass 预处理器
postCss 后处理器
  -webkit-
  -moz-

为什么不用上css Pofill?
  js在网页绘制过程中，所能触及的地方有限(DOM 部分CSSOM)

css Houdini



自定义value  自定义property


- window event-loop
- worker event-loop(webWorker)
- worklet event-loop(worklet)


icon-font  @font-face  自定义字体