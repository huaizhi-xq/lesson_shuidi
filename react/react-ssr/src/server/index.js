// commonjs   es6  统一用 es6

import express  from 'express' 
import React from 'react';
// 服务端 字符串  客户端dom   谁提供？虚拟DOM
import { renderToString } from 'react-dom/server'
import Header from '../components/Header.jsx'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import { renderRoutes } from 'react-router-config'

const app = express()
// static目录做了一个静态资源映射
app.use(express.static('static'))

// ejs jsp jade vue-template
app.get('*', (req, res) => {
  // 入口组件 jsx  
  const App = (
    <StaticRouter location={req.url} >
      { renderRoutes(Routes) }
    </StaticRouter>
  )
  // jsx -> babel -> React.createElement()
  const htmlStr = renderToString(App)
  console.log(htmlStr)
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <!-- root ReactDom.render -->
    <div id="root">${htmlStr}</div>
    <script src="./index.js"></script>
  </body>
  </html>`)
})

app.listen(3000, () => {
  console.log('running 3000 ')
})