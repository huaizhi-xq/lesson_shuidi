# blog项目
  - 案例初始化
    1. 建立项目所需的文件夹
      1.  public 静态资源
      2.  model  数据库操作
      3.  router 路由
      4.  views  模板
    2. 初始化项目描述文件
      npm init -y
    3. 下载项目需要的第三方模块
      npm i express mongoose art-template express-art-template
    4. 创建网站服务器
    5. 构建模块化路由
    6. 构建博客管理页面模板

    在模板文件中相对路径：是相对于浏览器的请求路径
    在模板文件中外链资源要写绝对路径(/)

    - 登录
      1. 创建用户集合，初始化用户
        1. 连接数据库
        2. 创建用户集合
        3. 初始化用户
      2. 为登陆表单项设置请求地址，请求方式以及表单项name属性
      3. 当用户点击登陆按钮时，客户点验证用户是否填写了登陆表单
      4. 如果由一项没有填写，阻止表单提交
      5. 服务器接受请求参数，验证用户是否填写了登陆表单
      6. 如果有一项没有输入，为客户端做出响应，阻止程序向下执行
      7. 根据邮箱地址查询用户信息
      8. 如果用户不存在，为客户端做出响应，阻止程序向下执行
      9. 如果用户存在，将密码进行对比
      10. 对比成功，用户登陆成功
      14. 对比失败，用户登陆失败
    
    - 密码加密bcrypt
      哈希密码是单程加密方式： 1234 => abcd
      在加密的密码中加入随机字符串
      bcyypt依赖的其他环境
        1. python 2.x
        2. node-gyp
          npm i -g node-gyp
        3. windows-bulid-tools
          npm i --global --production windows-build-tools

    - cookie与session
      cookie: 浏览器在电脑中开辟一块空间， 主要提供服务器存储数据。
        1. cookie中的数据是以域名的形式进行区分的。
        2. cookie中的数据是有过期事件的，超过时间的数据会被浏览器自动删除。
        3. cookie中的数据会随着请求被自动发送到服务器端。
      session: 实际上就是一个对象，存储在服务器端的内存中，在session对象中也可以存储多条数据，每一条数据都有一个session做为唯一标识


    - 新增用户
      1. 为用户列表页面新增用户按钮添加链接
      2. 添加一个链接对应的路由，在路由处理函数中渲染新增用户模板
      3. 为新增用户表单指定请求地址，请求方式，为表单项添加name属性
      4. 增加实现添加用户的功能路由
      5. 接受客户端传递过来的请求参数
      6. 对请求参数进行验证
      7. 验证当前要注重的邮箱地址是否已经注册过
      8. 对密码进行加密处理
      9. 将用户信息添加到数据库中
      10. 重定向页面到用户列表页面

    Joi
      js对象的规则描述语音和验证器

    - 数据分页
      1. 当前页， 用户根据点击上一页或者下一页或者页码产生，客户端通过get参数方式传递给服务器端
      2. 总页数，根据总页数判断当前页是否为最后一页，根据判断结果做出响应操作
      limt()
      skip()

    - 用户信息修改
      1. 将要修改的用户ID传递到服务器端
      2. 建立用户信息修改页面
      3. 接受客户端表单传递过来的请求参数
      4. 根据ID查询用户信息，并将客户端传递过来的密码和数据中的密码比对
      5. 失败，对客户端做出响应 成功 更新数据库

    - 用户信息删除
      1. 存储要删除的ID
      2. 为删除表单添加提交地址和提交方式
      3. 建立路由
      4. 接受id参数
      5. 删除

    formidable
      解析表单，支持get请求参数，post请求参数，文件上传

    mongoose-sex-page
      数据分页

- mongoDB数据库添加账号
  1. 以系统管理员方式运行power shell
  2. 连接数据库 mongo
  3. 查看数据库 show dbs
  4. 切换到admin数据库 use admin
  5. 创建超级管理员账号 db.creatUser()
  6. 切换到blog数据库 use blog
  7. 创建普通账号 db.createUser()
  8. 卸载mongodb服务
     1. 停止服务 net stop mongodb
     2. mongod --remove
  9. 创建mongodb服务
      mongod --logpath='D:\Program Files\MongoDB\Server\4.2\log\mongod.log' --dbpath='D:\Program Files\MongoDB\Server\4.2\data' --install --auth
  10. 启动mongodb服务
      net start mongodb
  11. 在项目中使用账号链接数据库
      mongoose.connect('mongodb://itxx:itxx@localhost:27017/blog')

- 开发环境与生成环境
  区分
    通过电脑操作系统中的系统环境变量区分当前是开发环境还是生产环境。

- config  
  极大减少了应用配置信息的维护成本
  使用：
    1. npm i config
    2. 根目录建config文件夹
    3. 在config文件夹下新建default.json development.json production.json
    4. 将模块进行导入
    5. 使用get方法获取配置信息
  将敏感配置信息存储在环境变量中
    1. 在config文件夹中建立custom-environment-variables.json文件
    2. 配置项属性的值填写系统环境变量的名字
    3. 项目运行时config模块查找系统环境变量，并读取其值作为当前配置项属于的值