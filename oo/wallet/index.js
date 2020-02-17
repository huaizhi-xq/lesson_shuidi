// 钱包
const UUID = require('uuid') // 生成唯一的id
class Wallet {
  //privated js不支持  编程的约定 _id
  // js 对面向对象支持不那么大语言化  原型式
  // oo 设计模式 java c++
  constructor() {
    this._id = UUID.v1()
    //uuid 返回的用户id 唯一的 加密生成的 后端开发中id生成技能项
    this._createTime = + new Date() //+ 时间微秒数  便于存储  long int
    this._balance = 0//金额 初值
    this._balanceLastModfiedTime = + new Date(); //上一次金额修改时间

    // g全局匹配
    // console.log(this._id.replace(/-/g, ''))
  }
  getId() {
    return this._id;
  }
  getBalance() {
    return this._balance
  }
  getCreateTime() {
    return this._createTime
  }
  getBalanceLastModfiedTime() {
    return this._balanceLastModfiedTime
  }
  increaseBlance(increaseedAmount) {  //加的数量
    // check检查正确的钱数
    // 封装
    if (increaseedAmount < 0) throw new Error('错误')
    this._balance += increaseedAmount;
    this._balanceLastModfiedTime = + new Date();
  }
  decreaseBlance(decreaseddAmount) {  //减的数量
    // check检查正确的钱数
    // 封装
    if (decreaseddAmount < this._balance) {
      this._balance -= decreaseddAmount;
      this._balanceLastModfiedTime = + new Date();
    } else {
      throw new Error('金额不足')
    }
    
  }
  
}

const w1 = new Wallet();

// w1.id = 'aaa' 
// console.log(w1.id)

// console.log(w1.getId())

// w1.increaseBlance(100)
// w1.increaseBlance(100)
// w1.decreaseBlance(50)
// console.log(w1.getBalance(), w1.getBalanceLastModfiedTime())


var Book = (function(bookNum) { //闭包
  function _book() {
    _id = UUID.v1();
    bookNum = bookNum;
  }
  // var bookNum = 0;
  function getBookNum() { //静态私有方法
    
  }
  return _book;
})

var book = new Book(10);
// new关键字的作用可以看作是对当前对象的this不停地赋值。
// 在没有使用new的情况下，
// js会在全局作用域中直接执行这个函数，
// 而在全局作用域中this指向的当前对象就是全局变量window了
console.log(book)