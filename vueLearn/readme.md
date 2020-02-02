# Vue.js
  ## 初始Vue
  - Vue是一个渐进式的框架，什么是渐进式？
    1. 渐进式意味着你可以将Vue作为你应用的一部分呢嵌入其中，带来更丰富的交互体验
    2. Vue全家桶(Core + Vue-router + Vuex ) 
  
  - Vue特点和Web开发中常见的高级功能
    1. 解耦视图和数据
    2. 可复用组件
    3. 前端路由技术
    4. 状态管理
    5. 虚拟DOM

  - Vue安装
    1. 直接CDN引入
    2. 下载和引入
    3. NPM安装
 
  - MVVM
    View   ViewModel    Model
      ---DOM Listeners---->
      <--Data Bindings-----

  - 创建Vue实例的options
    1. el: string | HTMLElement
    2. data: Object | Function(组件当中data必须是一个函数)
    3. methods: {[key: string]:Function}

  - 方法和函数的区别
    1. 方法: method   与对象实例在一起
    2. 函数: function  单独存在

  - Vue的生命周期 
    生命周期: 事物从诞生到消亡的整个过程
    Vue生命周期: 定义函数(钩子),在Vue的那个时期干什么事

  - mustache语法
    {{}}
    不仅仅可以直接写变量，也可以使用简单的表达式

  - 插值操作
    - v-once
      只渲染一次，不会随着数据改变而改变(后面不需要表达式)

    - v-html
      会解析html标签

    - v-pre
      显示原本的mustache语法

  ## Vue基础语法
  - 绑定属性
    - v-bind
      作用: 动态绑定属性
      语法糖: :
      绑定类: {key(类名): value(boolean)}
      绑定styel: {key(属性名): value(属性值)}

  - 计算属性
    computed
    set 设置(不常用)
    get 读取(经常省略)
    computed 和 methods的区别
      计算属性会进行缓存，如果多次使用时，计算属性只会调用一次，性能更好

  - ES6补充
    - let/var
      作用域： 在什么范围内可用
      var没有块级作用域(if/for等) let具有块级作用域
    
    - 闭包: 函数具有作用域

    - const: 常量 不能修改 定义必须初始化 
        常量的含义是指向的对象不能修改，但是可以改变对象内部的属性

    - 对象字面量增强语法
      const obj = new Object() => const obj = {}
      name: name => name
      run: function() {} => run() {}

  - 事件监听
    v-on : 绑定事件监听器
    语法糖: @
    参数问题: 
      1. 事件调用没有参数，可以省略()
      2. 事件调用有参数,但省略了(),Vue就会默认将浏览器产生的event事件对象作为参数传入到方法中
      3. 方法定义时我们需要参数同时也需要event对象时，那么我们调用时就手动获取浏览器参数event对象:$event
    修饰符:
      1. stop 停止冒泡
      2. prevent 阻止默认行为
      3. {keyCode|keyAlias} 特定键触发时才触发回调
      4. native 监听组件根元素的原生事件
      5. once 只触发一次

  - 条件判断
    v-if  v-else v-else-if
    v-show 和 v-if的区别 
      当条件为false 包含v-if指令的元素，根本就不会存在dom中
                    包喊v-show，只是给我们的元素添加一个行内样式: display: none
    如何选择？
      当需要显示与隐藏之间切换频繁时，使用v-show
      只有一次切换时，通常v-if(开发中常用)

  - 循坏遍历
    v-for="(item,index) in array"
    v-for="item in Object"  如果只获取一个值，那么取到的就是value   
    v-for="(value,key,index) in Object" 
    官方推荐v-for时，给对应的元素或组件添加一个key属性(这里其实和Vue的虚拟DOM的Diff算法有关)
      key作用主要是为了高效更新虚拟DOM
    循坏数组的时候响应式:
      push() pop() shift() unshift() splice() sort() reverse()
    注意: 通过索引值修改数组中的元素不是响应式
  
  - js高阶函数
    1. filter 过滤数组 
    2. map  改变数组
    3. reduce  汇总数组

  - 表单绑定
    v-model  
      作用: 双向绑定
      原理: 其实就是一个语法糖,本质是v-bind绑定一个value属性和v-on指令给当前元素绑定input事件
      
  ## 组件化开发
  - Vue组件化思想
    组件化思想提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构建我们的应用
    任何应用都会被抽象成一棵组件树

  - 组件使用的三个步骤
    1. 创建组件构造器  Vue.extend()
    2. 注册组件  Vue.component()
    3. 使用组件   在Vue实例作用范围内

  - 全局组件和局部组件
    Vue.component()注册组件是全局的
    components: {} 挂载在某个实例中就是局部组件

  - 父组件和子组件

  - 注册组件的语法糖  
    省区了Vue.extend()
    Vue.component('', {})
    components: {'': {}}

  - 模板的分离
    script，template标签

  - 组件数据的存放
    1. 组件对象也有一个data属性(也可以有methods等属性)
    2. data属性必须是一个函数(每一个对象实例都需要自己的状态)
    3. 而且整个函数返回一个对象，对象内部保存着数据

  - 父子组件的通信
    1. 通过props向子组件传递数据
        1. 字符串数组，数组中的字符串就是传递时的参数名称
        2. 对象，对象可以设置传递时的类型，也可以设置默认值
    2. 通过事件向父组件发送消息   
        自定义事件(this.$emit )

  - 组件访问
    1. 父访问子 $refs(对象类型) 或 $children(全部)
    2. 子访问父 $parent 或 $root(访问根)

  - 组件的插槽 slot 
    提高扩展性
    - 具名插槽 name
    - 作用域插槽
      父组件替换插槽的标签，但是内容有子组件来提供

  - 模块化开发
    常见的模块化规范：
      CommonJS, AMD, CMD, 
      ES6中的Modules(export/import)：
        必须在服务器环境下运行，不然会报跨域错误

  
  ## webpack
  - webpack安装  [www.webpackjs.com]
    全局安装webpack(3.6.0 因为vue cli2依赖该版本)

  - 配置
    webpack.config.js
    在终端运行 webpack 会优先运行全局的
    package.json 的scripts中定义执行脚本   会优先寻找本地，本地没有再寻找全局

  - loader 转换器
    1. 安装loader
    2. 在webpack.config.js中的module关键字下进行配置
    - css文件的配置
        css-loader只负责加载
        style-loader负责将样式添加到DOM中
        使用多个loader时，是从右向左
    - less
    - 图片
    - es6
    - Vue.js 
      - 报错：在配置中resolve
        1. runtime-only -> 代码中，不可以有任何的template
        2. runtime-compiler -> 代码中可以有template，因为compiler可以编译template
      - el和template的区别
        同时拥有的话，template里的东西会替换el绑定的东西    (可以不用更改index.html)

  - plugin 插件
    1. 安装
    2. webpack.config.js中的plugins中配置 
    - BannerPlugin(webpack自带的)  添加版权
    - html-webpack-plugin 
      1. 自动生成一个index.html文件(可以指定模板来生成)
      2. 将打包的js文件，自动通过script标签插入到body中
    - uglifyjs-webpack-plugin@1.1.1 (cli2保持一致)  压缩js

  - 搭建本地服务器
    1. 安装webpack-dev-server
    2. webpack.config.js中的devserver中配置 
      1. contentBase: 为哪一个文件夹提供本地服务，默认是根文件夹，我们这里填写./dist
      2. port： 端口号
      3. inline：页面时实刷新
      4. historyApiFallback: 在SPA页面，依赖html5的history模式

  - webpack配置文件分离
    1. npm i webpack-merge
    2. 建立响应的配置文件
    3. 在pckage.json文件中scripts中名字加上 --confit ...

  
  ## Vue CLi
  - CLI是什么意思
    1. Command-Line Interface 命令行界面 俗称脚手架
    2. 使用vue-cli可以快速搭建Vue开发环境以及对应的webpack配置

  - 高版本用低版本  可以全局安装一个桥接工具
    npm install -g @vue/cli-init

  - cli2初始化
    vue init webpack my-project

  - Vue运行
    template -> ast -> render -> vritual dom -> ui

  - runtime-compiler
    template -> ast -> render -> vritual dom -> ui
  - runtime-only(1.性能跟高 2.代码量更少)
    render -> vritual dom -> ui
    render: h => h(),->createElement
    那么.vue文件中的template是由谁处理了？
      是由vue-template-complier处理成为render函数了

  - CLi3
    vue create my-project
  - 配置去哪了？
    1. 启动配置服务器vue ui
    2. node_modules中@vue
    3. 创建vue.config.js在里面写配置

  - 什么时候经常用箭头函数呢？
    一个函数作为另外一个函数的参数的时候
  - 箭头函数中的this怎么查找？
    向外层作用域中，一层层查找this，直到有this定义

  ## Vue-router
  - 路由
    路由就是通过互联的网络把信息从源地址传输到目的地址的活动

  - 什么是前端渲染  什么是后端渲染 什么是前后端分离 什么是前端路由，后端路由
    后端渲染：服务器直接生成渲染好的对应的html页面，返回给客户端展示   jsp/php
    后端路由：后端处理url和页面之间的映射关系
        优点：这样不需要单独加载任何的js和css，可以直接交给浏览器展示，这样有利于SEO的优化
        缺点：整个页面的模块由后端人员来编写和维护的    编写和维护很困难
    前端渲染：浏览器中显示的网页中的大部分内容，然后由前端写的js代码在浏览器中执行，最终渲染出来的网页
    前后端分离阶段： Ajax的出现，有了前后端分离的开发模式，后端提供API来返回数据，前端通过Ajax获取数据
        优点：前后端责任清晰   
              并且移动端出现后，后端不需要任何处理，依然使用之前一套API即可
    (前端路由)单页面富应用阶段：其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由，也就是前端来维护一套路由规则
    前端路由的核心是什么呢？
        改变URL，但是页面不整体的刷新

  - 实现改变URL，页面不整体刷新
    1. hash(默认)
    2. HTML5的history模式: pushState和replaceState, go() => + forward - back

  - vue-router是基于路由和组件的
    1. 路由用于设定访问路径，将路径和组件映射起来
    2. vue-router的单页面应用中，页面的路径的改变就是组件的切换

  - 搭建vue-router
    1. 导入路由对象，并且调用Vue.use(VueRouter)
    2. 创建路由实例, 并且传入路由映射配置
    3. 在Vue实例中挂载创建的路由实例

  - 使用vue-router
    1. 创建路由组件
    2. 配置路由映射:组件和路径映射关系
    3. 使用路由:通过<router-link>和<router-view>

  - 改变为history模式
    在路由配置文件路由实例参数里 mode: 'history'

  - router-link 默认渲染a标签
    to: 指定跳转路径
    tag:  渲染为其他标签
    replace 不会留下history记录 history.replaceState
    active-class 修改默认的router-link-active的class

  - 动态路由
    获取路由参数

  - 路由的懒加载
    主要作用：就是将路由对应的组件打包成一个个的js代码块
    只有这个路由被访问到的时候，才加载对应的组件
    方式：
      1. 结合Vue的异步组件和webpack的代码
      2. AMD写法
      3. 在ES6中，箭头函数来组织第一种方式 

  - 路由嵌套
    1. 创建对应的子组件，并且在路由映射中配置对应的子路由
    2. 在组件内部使用<router-view>

  - 参数传递
    url: scheme://host:port/path?query#fragment
    params(一个字段)和query(对象，数据多)
    
  - $route 和 $router
    $route:当前活跃的路由
    $router:整个vue-router对象

  - 导航守卫 全局守卫 (独享路由守卫 组件内守卫) 
    前置钩子beforeEach 动态更改页面标题
    后置钩子afterEach

  - keep-alive
    可以保持状态  不会被销毁
    就可以使用 activated/deactivated
    首页中使用了path属性记录离开时的路径，在beforeRouteLeave中记录
    属性：
      include-字符串或正则，只有匹配的组件会被缓存
      exclude-字符串或正则，r任何匹配的组件都不会被缓存

  - Promise
    一般情况下有异步操作时，使用Promise对这个异步操作进行封装(将网络请求代码和数据操作代码分离)
    new -> 构造函数(1.保持一些状态信息，2.执行传入的函数)
    参数 -> 是个函数
    resolve,reject本身它们又是一个函数
    有三种状态
      1. pending 等待状态
      2. fulfill 满足状态 调用resolve()时就处于该状态，然后会回调.then()  .then(fn(),fn())
      3. reject  拒绝状态 调用reject()时就处于该状态，然后会回调.catch()
    Promise.all()


  ## Vuex
  - Vuex是做什么的？
    Vuex是一个专门为Vue.js应用程序开发的状态管理模式(大管家store)

  - Vuex状态管理流程
    State -(Render)> Vue Components -(Dispatch)> Actions -(Commit)> Mutations -(Mutate)> State

  - 在组件中用
    1. this.$store.state.属性  获取状态
    2. this.$store.commit('mutation中方法')来修改状态

  - state单一状态树
    Single Source of Truth   也可翻译为单一数据源

  - getters
    从store中获取一些state变异后的状态  (类似计算属性computed)

  - mutations
    Vuex的store状态的更新的唯一方式：提交mutaion
    传递参数payload负载 可以是一个也可以是对象
    俩种提交风格，接受参数也不一样
    - 响应规则
      提前在store中初始化好所需的属性
      添加新属性时Vue.set() 或者新对象给旧对象重新赋值
    - 类型常量
      创建一个文件存放常量名
      在定义mutation导入刚创建的文件并且用其名字定义方法
      在组件中要用到就导入文件再用其名字
    - 同步函数 
      要求mutation中的方法必须是同步函数，不然我们用devtools将不能追踪这个操作什么时候被完成

  - actions
    action类似mutation，但action是用来进行异步操作的
    再Vue components调用 this.$store.dispatch()

  - modules
    单一状态树,那么意味着很多状态都会存放在state中,很可能导致臃肿
    所以Vuex允许我们将store分隔成模块modules,每个模块都拥有state,mutations,actions,getters


  ## axios
  - Vue中发送网络请求的方式
    1. 传统的Ajax
    2. jQuery-Ajax
    3. Vue-resource(Vue1.x)
    4. axios

  - 发送并发请求
    axios.all([]).then

  - 全局配置
    axios.defaults.baseURL = 
    axios.defaults.timeout = 

  - axios的实例和模块封装
    
  - 拦截器的使用
    用于我们在发送请求或得到请求时进行相应处理


          


