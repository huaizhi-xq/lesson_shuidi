// const http = require('http')
// http.request({

// })


const net = require('net')  //TCP
const fs = require('fs')  
const client = net.createConnection({
  port: 8088
}, () => {
  // 请求报文  拼接报文
  client.write('POST / HTTP/1.1\r\n')
  client.write('HOST: 127.0.0.1\r\n')
  client.write('Content-Length: 7\r\n')
  client.write('Content-Type: application/x-www-form-urlencoded\r\n')
  client.write('\r\n')
  client.write('abc=456')
})

// 205 502  400
// 响应报文  
// const write = fs.createReadStream('./res.txt')
// client.pipe(write)


// 状态机
class ResponseParser {
  constructor() {
    this.WAIT_STATUS_LINE = 0
    this.WAIT_STATUS_LINE_END = 1
    this.WAIT_HEAD_NAME = 2
    this.WAIT_HEADER_SPACE = 3
    this.WAIT_HEADER_VALUE = 4
    this.WAIT_HEADER_END = 5
    this.WAIT_HEADER_BLOCK_END = 6
    this.currentState = this.WAIT_STATUS_LINE
    
    this.statusLine = ''
    this.headerName = ''
    this.headerValue = ''
    this.header = {}
    this.body = ""
  }
  receive(string) {
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string[i])
    }
  }
  receiveChar(char) {
    if (this.currentState === this.WAIT_STATUS_LINE) {
      // 默认 第一个状态  字符一定属于状态行
      if (char === '\r') {
        this.currentState = this.WAIT_STATUS_LINE_END  //改变状态
      } else {
        this.statusLine += char
      }  
    } else if (this.currentState === this.WAIT_STATUS_LINE_END) {
      if (char === '\n') {
        this.currentState = this.WAIT_HEAD_NAME
      }
    } else if (this.currentState === this.WAIT_HEAD_NAME) {
      if (char === '\r') {
        this.currentState = this.WAIT_HEADER_BLOCK_END
      }
      if (char === ':') {
        this.currentState = this.WAIT_HEADER_SPACE
      } else {
        this.headerName += char
      }
    } else if (this.currentState === this.WAIT_HEADER_SPACE) {
      if (char === ' ') {
        this.currentState = this.WAIT_HEADER_VALUE
      } 
    } else if (this.currentState === this.WAIT_HEADER_VALUE) {
      if (char === '\r') {
        // headerValue
        this.header[this.headerName] = this.headerValue
        this.headerValue = ""
        this.headerName = ""
        this.currentState = this.WAIT_HEADER_END
      } else {
        this.headerValue += char
      }
    } else if (this.currentState === this.WAIT_HEADER_END) {
      if (char === '\n') {
        this.currentState = this.WAIT_HEAD_NAME
      }
    } else if (this.currentState === this.WAIT_HEADER_BLOCK_END) {
      // console.log(this.header)
      // console.log(JSON.stringify(char))  // \r \n
      this.body += char
    }
  }
}


let parser = new ResponseParser()
client.on('data', data => {
  // console.log(data.toString())
  parser.receive(data.toString())
  console.log(parser.statusLine)
  console.log(parser.header)
  console.log(parser.body)
})
client.on('end', data => {
  console.log('disconnect')
  
})