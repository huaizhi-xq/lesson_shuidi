const fs = require('fs')

// fs.readFile('./readme.md', (err, info) => {
//   fs.writeFile('./readme-copy.md', info, (err, info) => {
//     if (!err) {
//       console.log('copy success')
//     }
//   })
// })

// 如果大文件  流性能高
const readStream = fs.createReadStream('./readme.md')
const writeStram = fs.createWriteStream('./readme-copy.md')
readStream.pipe(writeStram) 