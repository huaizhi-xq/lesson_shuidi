// let a:number = 1;//  类型系统  java等大型语言的优势  a
// // 90%以上的bug 可以因为把代码从js -> ts避免
// console.log(a,'+++');  


import * as React from 'react'  //mvvm 模板编译
import * as ReactDOM from 'react-dom' //dom 挂载

// console.log(ReactDOM)


import { HelloComponent } from './hello' //

import { AppRouter } from './router'

// console.log(HelloComponent)
ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
)



