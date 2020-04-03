const app = { //app
  // 顺序执行  栈， 空的
  // 每一项是函数
  midlewares: []
}

// use  函数  middlewares  push  
// ctx req + res 
app.use = function(fn) {
  if (typeof fn !== 'function') {
    throw new Error("中间件一定是函数")
  }
  app.midlewares.push(fn)
}

//  核心！！！ 合并 中间件最后会合并成一个大函数
app.compose = function() {
  // for (let i = 0; i < this.midlewares.length; i++) {
  //   this.midlewares[i]()
  // }
  // 未免太顺了  没有next
  // 不能用for循坏，怎么实现串行执行
  // yield 异步问题
  // 执行第一个  由next决定是否执行下一个 依次
  function dispatch(index) {
    if (index === app.midlewares.length) return
    const fn = app.midlewares[index]  //当前的中间件
    fn(function next() {
      dispatch(index+1)
    })
    // console.log(fn)
    
  }
  dispatch(0)
}

module.exports = app