const UUID = require('uuid') // 生成唯一的id
// Wallet 类？
// _id 约定 编程风格 私有属性的作法
// 但是this._id = 'aaa' 还可以更改
// 
var Wallet = (function() {
  // 闭合空间
  // var id,createTime,balanceLastModifiedTime;
  // bb = b;
  return function(b) { //闭包
    // 返回新的对象  构造函数的使用
    // this new 实例 默认this， return this;
    // 1. 闭包 构造函数可以一致引用的私有变量
    // 2. return 返回public的属性或方法
    id = UUID.v1().replace(/-/g,"")
    createTime = + new Date()
    balance = b;
    balanceLastModifiedTime = + new Date()
    // 私有方法
    // 封闭了检查的实现  外界不需要了解
    // 封装 -> 私有  用类的人不需要了解细节
    // 私有？ 让用的人少犯错
    function checkAmount(amout) {
      if (isNaN(amout)) return false
      return true
    }

    return { //public 
      desc: '钱包',
      getId: function() {
        return id;
      },
      getCreateTime: function() {
        return createTime
      },
      getBalance: function() {
        return balance
      },
      getBalanceLastModifiedTime:function() {
        return balanceLastModifiedTime
      },
      increaseBalance: function(amout) {
        if (!checkAmount(amout)) return false
        balance += amout;
        balanceLastModifiedTime = + new Date()
      },
      decreaseBalance: function(amout) {
        if (!checkAmount(amout)) return false
        balance -= amout;
        balanceLastModifiedTime = + new Date()
      },
    }
  }
})()

// 利用闭包创建类
// var Wallet = (function() {
//   function _wallet() {

//   }
  
//   return _wallet
// })

var w1 = new Wallet(100)
console.log(w1.balance)
// console.log(w1.getId())
w1.increaseBalance(100)
w1.increaseBalance(100)
w1.decreaseBalance(150)
console.log(w1.getBalance())