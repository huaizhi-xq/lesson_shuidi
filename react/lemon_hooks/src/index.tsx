// import './app.css'
// console.log("你好啊sss");


import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {HelloComponent} from './hello';

import {App} from './app'  //根组件

const [name, setName] = React.useState('defaultUserName');

ReactDOM.render(
  // react hooks  超越 redux  vuex的新特性, 跨组件共享状态
  // defaultUserName 可以被组件共享状态
  
  <App />,
  document.getElementById('root')
)