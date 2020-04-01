- es6 node babel loader
- 前端生产工艺

- src  开发目录
  入口文件 main.js
  webpack bundle

- js 与其他类型并不是水火不相容的
  1. 文本 
  2. {}



- webpack  如何让js  理解css  
- webpack 4
- webpack 用到哪些依赖
- webpack 登场 bundle.js
  静态资源  css js png  
  1. cross-env 跨系统设置环境变量 屏蔽设备的差异性
  2. 最小执行单元
    entry  output  mode 
    webpack  webpack.config.js 配置
  3. rimraf 删除目录
  4. loader 
  webpack 工厂流水线
  工人 不能理解的文件css 
  loader 能理解的地方  去处理
  .vue js component
  -loader 概念通过  css-loader!



css 通过 css-loader!    js    css in js !!!
[]
静态资源通过字符串来达到认同
- bundle.js webpack 打包生成的代码
  立即执行函数， 
  将入口 分析出来的依赖  做成一个json 传给bundle函数去执行
  main.js 它依赖于 css-loader/index.css  先做
  main.js 依赖的文件名作为key： 内容作为value
  webpack  大型工程  首先解决模块间的依赖
  main.js a
  index.css b
  index.css   import base.css c
  entry  a
  c -> b -> a
  文件依赖关系组成 一个json object
  __webpack_require__ 它是require的升级版   将模块加载到内存中


  cwd是指当前node命令执行时所在的文件夹目录；