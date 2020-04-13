# react ts
react + ts 是必问的

webpack-dev-server   webpack 编译  同时  类似启动live-server http服务
start dev 
webpack 编译  nginx  docker  阿里云 build

1. --line  --hot  
刷新浏览器--inline
重新加载改变的部分--hot   局部更新   不丢失状态 MVVM

2. hash是什么
文件指纹 版本  app.js demo.css  [hash]
静态文件会缓存 app.[hash].js?1231231(版本号) old new 

3. babelrc presets env modules 干嘛？
  modules 指定何种形式的模块，设置为false表示不转码模块

4. entry 多入口的作用是什么
  entry 从某个文件 require  import        __require__
  单点入口  组织起来一个依赖关系  业务常变 hash需要， 通知客户端更新
  把几个月  永远不更新的文件 作为独立的入口  
  entry 可以有多个打包的入口吗  为什么
  vendor 库  vue.js vuex vue-router
  提升了编译速度，同时保障及改善了用户的浏览体验  缓存

html压缩
版本管理
