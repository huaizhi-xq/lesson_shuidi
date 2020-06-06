## 同构 SPA+SSR

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


  ## 路由
  前端：控制组件渲染与否
    地址栏发生变化，页面不刷新，url不会发送，不会发请求
  后端：github.com/api/v1/login 请求资源
  BrosweRouter : browser
  NativeRouter: RN
  StaticRouter: SSR
  静态路由(JSON,配置)
  动态路由(一切皆组件)

  localhost:3000/login  
    - js切换
    - /login 访问后端，后端也应该返回html

