import * as React from 'react'
import {Header} from './components'

// react 函数式组件
// 类型限制  函数  类  组件  
// statelessComponent  stateFullComponent  
// @types/react
export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
     {/* 导航   组件的封装 */}
     <Header />
    </div>
  )
}