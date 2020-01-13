// 1. 在普通函数前加async关键字 就变为异步函数
// 2. 异步函数默认的返回值是promise对象
// 3. throw进行错误的抛出

// await
// 1. 它只能出现在异步函数中
// 2. await promise 它可以暂停异步函数的执行 等待promise对象返回结果后再向下执行

// async function fn() {
//   throw '发生了错误'
//   return 123;
// }

// fn().then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })

async function p1() {
  return 'p1'
}
async function p2() {
  return 'p3'
}
async function p3() {
  return 'p3'
}

async function run() {
  let  r1 = await p1();
  let  r2 = await p2();
  let  r3 = await p3();
  console.log(r1)
  console.log(r2)
  console.log(r3)
}
run()