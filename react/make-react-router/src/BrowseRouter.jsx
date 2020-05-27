import React from 'react'
import Context from './Context'
const { Provider, Consumer } = Context
// Provider 把xx当作全局变量
// Consumer 取下来
// 匹配当前浏览器url和 当前的 path
// 匹配展示，否则
// 在react 里面一些数据 跨组件传递
// history 当前浏览器地址 是想告诉所有的Route组件
// history 当作 全局变量处理
// 什么东西 history 当作全局变量
// Context
class BrowserRouter extends React.Component {
  handlePatchNameChange = (pathname) => {
    const history = this.state.history
    window.history.pushState({},'', pathname)
    this.setState({
      history: {
        ...history,
        pathname
      }
    })
  }
  state = {
    history: {
      location: window.location,
      pathname: window.location.pathname,
      handlePatchNameChange: this.handlePatchNameChange
    }
  }
  
  render() {
    return (
      <Provider value={{...this.state.history}}>
        { this.props.children }
      </Provider>
    )
  }
}

export default BrowserRouter