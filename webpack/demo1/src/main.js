// webpack 在js里查理css文件
const css = require('./index.css')  // {}
// const css = require('css-loader!./index.css')  // 启用loader
//并不是水火不相容的  css属性节点
//dom node节点  在使用css { } css文本  ->  生产渲染树
const a = 100

//图片  二进制
console.log(a,css)
// console.log(a, css)