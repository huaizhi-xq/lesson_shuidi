- 同步API 异步API
  同步API: 只要当前API执行完成后,才能继续下一个API
  异步API: 当前API的执行不会阻塞后续代码的执行
  区别?
    同步API可以从返回值中拿到API执行的结果,但是异步API不可以
  回调函数(可以拿到异步api执行的结果)
    自己定义函数让别人去调用
  异步API
    fs.readFile app.on...
  Promise
    解决异步编程中回调地狱的问题
  异步函数
    将异步代码写成同步的形式,让代码不再有回调函数嵌套,代码清晰明了
    async
      1. 函数前加async 就变为异步函数
      2. 异步函数默认返回promise对象
      3. return关键字代替了resolve方法
      4. throw抛出异常
      5. 调用异步函数再链式调用then方法获取异步函数的执行结果
      6. 调用异步函数再链式调用catch方法获取异步函数的错误信息
    await
      1. await只出现异步函数中
      2. await后面只能写promise对象 写其他类型的API是不可以的
      3. await可以暂停异步函数向下执行 直到promise返回结果