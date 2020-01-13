const fs = require('fs')

// fs.readFile('./1.txt', 'utf8', (err, result1) => {
//   console.log(result1)
//   fs.readFile('./2.txt', 'utf8', (err, result2) => {
//     console.log(result2)
//     fs.readFile('./3.txt', 'utf8', (err, result3) => {
//       console.log(result3)
//     })
//   })
// });

// 解决回调地狱

function p1() {
  return new Promise((resolve, reject) => {
    fs.readFile('./1.txt', 'utf8', (err, result) => {
      resolve(result)
    })
  })
}
function p2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./2.txt', 'utf8', (err, result) => {
      resolve(result)
    })
  })
}
function p3() {
  return new Promise((resolve, reject) => {
    fs.readFile('./3.txt', 'utf8', (err, result) => {
      resolve(result)
    })
  })
}

p1().then((result) => {
  console.log(result);
  return p2();
})
.then((result) => {
  console.log(result)
  return p3();
})
.then((result) => {
  console.log(result);
})