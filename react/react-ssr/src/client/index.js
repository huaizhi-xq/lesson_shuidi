import React from 'react';
import ReactDom from 'react-dom'
import Header from '../components/Header'

// SPA
// ReactDom.render(<Header />, document.getElementById('root'))
// SSR 不要render，只需要事件
// 调和：服务端已经完成，客户端不会重复做
ReactDom.hydrate(<Header />, document.getElementById('root'))