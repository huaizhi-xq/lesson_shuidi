const WebSocket = require('ws')
const event = require('events')
// 
const code2ws = new Map() //Map  维护了连接关系

const wss = new WebSocket.Server({
  port: 8010
})

// console.log(wss instanceof event.EventEmitter)
wss.on('connection', function(ws, request) {
  // ws每一个用户
  // console.log(ws)
  let code = Math.floor(Math.random()*(999999-100000))+100000
  code2ws.set(code, ws)
  ws.on('message', function incoming(message) {
    // 字符串， 二进制流
    // console.log('incoming', message)
    ws.sendData = (event, data) => {
      ws.send(JSON.stringify({event, data}))
    }
    let parseMessage = {}
    // 风险？   node的出错 单线程 crash  pm2
    // parseMessage = JSON.parse(JSON.stringify(message))
    try {
      parseMessage = JSON.parse(message)
    } catch (error) {
      ws.send('message invalid')
      console.log('parse message error')
    }
    // console.log(parseMessage)
    let { event, data } = parseMessage
    if (event === 'login') {
      ws.sendData('logined', {code})
    } else if (event === 'control') {
      let remote = data.remote
      // console.log(remote)

      if (code2ws.has(remote)) {
        ws.sendData('controlled', { remote })
        ws.sendRemote = code2ws.get(remote).sendData
        console.log(ws.sendRemote)
        ws.sendRemote('be-controlled', {
          remote: code
        })
      }
    }
  })
})


