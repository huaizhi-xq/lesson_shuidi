import React from 'react';
import ReactDom from 'react-dom'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import routes from '../Routes'

const App =  function() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

// SPA
// ReactDom.render(<Header />, document.getElementById('root'))
// SSR 不要render，只需要事件
// 调和：服务端已经完成，客户端不会重复做
ReactDom.hydrate(<App />, document.getElementById('root'))