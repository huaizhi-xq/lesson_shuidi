// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民: 函数)
// filter/map/reduce

const nums = [10,20,30,90,150,160]
// 1. filter使用
// filter中的回调函数必须返回boolean值
// true 将该次的值加入新的数组,false 过滤这次
let newNums = nums.filter(function(n) {
  return n < 100
})
console.log(newNums)

// 2. map使用
// 映射 改变数组
let new2Nums = newNums.map(function(n) {
  return n * 2;
})
console.log(new2Nums)

// 3. reduce使用
// 可以对所有内容进行汇总
let total = new2Nums.reduce(function(preValue, n) {
  return preValue + n
}, 0)
// 第一次: preValue 0 n 20
// 第二次: preValue 20 n 40
// 第三次: preValue 60 n 60
// 第四次: preValue 120 n 180
// 300
console.log(total)

let total1 = nums.filter( n => n < 100).map(n => n*2).reduce((pre,n) => pre+n,0)
console.log(total1)

