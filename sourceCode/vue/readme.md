# router
  1. hash
    创建HashRouter类  实例化router对象  监听hashchange的变化来更新页面内容
    问题？ 
      缺少对未在路由中注册的hash值处理
      hash值对应的回调函数在执行过程中抛出异常
    方法
      追加registerNotFount方法，用于注册hash值未找到时的默认回调函数
      修改load方法，追加try/catch 用于捕获异常，追加registerError方法，用于处理异常
  2. history