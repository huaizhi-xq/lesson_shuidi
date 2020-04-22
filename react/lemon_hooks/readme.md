react + ts + hooks
react + redux + react-router   react hooks 带来了很大的改变

1. sourcemap
2. --inline
3. polyfill
4. css 处理
5. react 新特性  fragment


react/vue 开发, /dist目录  上线

fill 填充  poly 聚合 一些特性
es6+   低版本浏览器可以被支持的呢?   babel
  babel preset-env + babel-core 降级处理    语法
  core-js + regenerator = babel-polyfill    API
    实现polyfill做判断,不是给所有浏览器做同样的打补丁
    在补丁之前,先判断浏览器是否拥有此功能
    polyfill.js,打包到bundle.js之中,bable  preset  target



- inline hot 区别    --inline --hot --open  后面的优先级高
  1. 强制刷新,丢失状态
  2. 热更新 hmr hot mmodule reload  不会丢失状态
  是hmr部分有更新 hot,不是hmr部分 inline 强制刷新


- css  
  1. style -> .css输出
    MiniCssExtractPlugin
  2. 编译时 css压缩
    OptimizeCssAssetsPlugin
  3. 如何调试刚刚的bug p color
    style-loader 定位p color错误?  webpack定位错误,点一下跳到源码错误所在行
    devtool: "soure-map"     ?sourceMap


useBuiltIns
  false  引入所有的 polyfill
  entry  根据配置的浏览器兼容，引入浏览器不兼容的 polyfill。
  usage   会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加。