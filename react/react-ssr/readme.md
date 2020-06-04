## 同构

externals：  从输出的 bundle 中排除依赖  (node的包啊，cdn加载的资源等等)

后端返回html结构(组件打包renderToString)，前端事件交互(组件调后hydrate，加入交互)， 

- 前后端衔接
  1. 前端代码 -> webpack -> static
  2. express 启动 static 静态资源映射(将前端代码)
  3. react组件在服务端生成了html
  4. express 返回html文件，也要前端打包完的资源，通过script引入第二步的静态资源，完成事件绑定
  localhost:3000/index.js文件？ 是不是前端打包的代码
  浏览器执行起来了？
  hydrate绑定事件