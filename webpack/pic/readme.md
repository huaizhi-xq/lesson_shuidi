# webpack 打包一切静态资源  loader

css stylus png  fonts  postcss


webpack  loader  手写

## webpack 为web应用工作
- 入口核心文件 .js文件  放在底部加载
  dev webpack 是把工作放在内存中
  express  web server  dist.js  static_server

1. css-loader style-loader区别？
  js 引入css 
  webpack 建立依赖关系的过程
  import  require path  extension
  ext => loader 对应的
  package.json  分析 报错

2. use 定制性  webpack不是用来学的，是用来用的，
  用来修的  webpack考点多半出自是否会修
  js  处理css
  web 应用而来  style  行内样式<style>  css文件引入<link>
  css-loader 为css后缀解析  以及css 内的@import外部资源
  style-loader  样式插入到DOM中
- pic 有web应用的需要， webpack为之奋斗
  base64何时启动   减少了请求的数量  不过js 体积暴增
  上限  css放在js  -> 分离 mini-css-extract-plugin

  postcss css届的babel


