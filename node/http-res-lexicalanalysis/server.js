const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Transfer-ENcoding': 'chunk'
  })
  res.end('ok'.repeat(7000))
})
.listen(8088,() => {
  console.log(8088)
})