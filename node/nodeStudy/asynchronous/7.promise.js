const fs = require('fs')

let promise = new Promise((resolve, reject) => {
  fs.readFile('./12.txt', 'utf8', (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  })
})

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err)
  })