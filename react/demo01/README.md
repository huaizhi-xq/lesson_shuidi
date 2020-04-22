# react学习

className  类名
htmlFor   label


不能直接修改state  引入一个变量修改  然后setState


父组件向子组件  props  属性
子组件不能向父组件传值  可以操作父组件传递的方法来实现


单向数据流  只读
只是渲染index.html的#root  可以结合jq等
函数式编程  代码清晰  测试方便


ref={() => {}}

生命周期  在某一时刻自动执行的函数
- initialization
  initialization  constructor
- Mount
  componentWillMount -> render -> componentDidMount
- Update
  shouldComponentUpdate -> componentWillUpdate -> render -> 
  componentWillReceiveProps(只存在于子组件，数据改变时触发)
- Unmounting
  componentWillUnmount


- 动画库
  react-transition-group
  - Transition
  - CSSTransition
  - TransitionGroup



