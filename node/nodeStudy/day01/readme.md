- 模块化
  exports 
  moudule.exports
  exports是module.exports的别名(地址引用关系),导出对象最终以module.exports为准
- 系统模块
  node运行环境提供的API 
  1. 文件模块(fs)
    fs.readFile('文件路径',['编码'],callback);
    fs.writeFile('文件路径','数据'，callback); //不存在 主动创建
  2. 系统模块path 路径操作
    不同操作系统的路径分隔符不统一
    path.join('路径', '路径', ...)
    相对路径VS绝对路径
      1. 大多数情况下使用绝对路径，因为相对路径有时候相对的是命令行工具的当前工作目录(require方法特殊相对的是当前文件)
      2. 在读取文件或者设置文件路径时都会选择绝对路径
      3. 使用__dirname获取当前文件所在的绝对路径
- 第三方模块
  别人写好的，我们能直接使用的模块即第三方模块，由于第三方模块通常是由多个文件组成并且被放置在一个文件中，所有又名包
  以js文件的形式存在
  以命令行工具形式存在
  1. 获取第三方模块
    npm (node package manager) node的第三方模块管理工具
    1. 下载: npm install 模块名称
    2. 卸载: npm uninstall 模块名称
  2. 全局安装与本地安装
    1. 命令行工具:全局安装
    2. 库文件: 本地安装
  3. 第三方模块 nodemon
      nodemon是一个命令行工具，用以辅助项目开发 实时更新
      npm install nodemon -g
      nodemon 替代node
  4. 第三方模块 nrm
      nrm(npm registry manager): npm下载地址切换工具
      npm install nrm -g
      nrm ls 查询可用的下载地址
      切换npm下载地址 nrm use
  5. 第三方模块 Gulp
    基于node平台开发的前端构建工具
    将机械化操作编写成任务，想要执行机械化操作时执行一个命令行任务就能自动执行了
    能做什么？
      项目上线，html，css，js文件压缩合并
      语法转化（es6,less...)
      公共文件抽离
      浏览器自动刷新
    使用
      1. npm install gulp
      2. 在项目跟目录下建立gulpfile.js
      3. 重构项目的文件夹结构 src目录放置源代码文件 dist目录放置构建后文件
      4. 在gulpfile.js文件中编写任务
      5. 在命令行工具中执行gulp任务
    gulp插件
      看文档(下载 引入 调用)
  6. 第三方依赖
    项目依赖
    开发依赖 (dev)
    package.json
    package-lock.json (锁定包的版本, 加快下载速度)
- 模块加载机制
  1. 规则
    require 查找 完整路径
    后缀省略 先找js文件再找同名js文件夹
    找文件夹中index.js
    找package.js main
    模块没有找到