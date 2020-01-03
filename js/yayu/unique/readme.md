- js的哪些数据类型
  数值型 Number 1
  字符串 '1'
  布尔值 true false
  undefined   类型还未定义
  null 空类型 赋值了，但值为空
  之上的都是原子类型也叫简单数据类型
  Object 其他的都是对象 复杂数据类型
   数组  可以被迭代的对象 iterable
   函数  可以被运行的对象 function ()
   JSON 对象字面量 { } 可以被 key: value 的对象

- typeof null 'object'?
  原理是这样的，不同的对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型， null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“ object ”。
- 怎样区别[] {} typeof
- 变量名name 值value
  let func;  //内存中申请分配 地址
  undefined? 类型还未定义
  js 是弱类型语言 有别于java c++等静态类型语言
  js 的变量类型是用值来决定的 