const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  // 返回html
  // 文件读出  文件内容写出来
  const readStream = fs.createReadStream('./index.html')
  readStream.pipe(res)
})
.listen(8080, () => {
  console.log('8080')
})


// QPS