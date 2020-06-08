Vue.js 的源码都在 src 目录下，其目录结构如下。
src
├── compiler        # 编译相关 
├── core            # 核心代码 
├── platforms       # 不同平台的支持
├── server          # 服务端渲染
├── sfc             # .vue 文件解析
├── shared          # 共享代码



1. 组件的本质是什么？  html的封装，模板+数据 = html字符串 (如今是VDOM)
  jq -> 强大的前端工具库 loadsh 模板编译语法

  模板引擎的概念，编译模板(字符串+数据) = html

  一个组件就是一个函数，给我什么样的数据，我就渲染对应的html内容

  2. 问题
    模板编译之后，挂载到点上，mount
    工作流 webpack  vue-cli  那种 
    webpack.config.js + babel  有其他的方法吗？
    轻量级的  parcel  极速零配置Web应用打包工具
    snabbom 快速的DOM
    - patch
      patch(elm,vnode)
      patch(oldVnode,newVnode)
      组件产出就是VDOM
      VDOM带来了分层设计(可以渲染到web以外的平台)
    - render

  组件 vnode -> 真实dom过程？
  mountElement()
  组件？ -> 实例化 -> render() -> vnode -> mountElement()
  