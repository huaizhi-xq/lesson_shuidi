import React from 'react';

// 服务端由click事件？ 并没有
// DOM click
// 组件
// 服务端 1. SEO，性能 renderToString
// 客户端：2. 为了交互，我们还要再前端进行事件绑定
// SPA
class Header extends React.Component {
  handleClick() {
    console.log('click')
  }
  render() {
    return (
      <button onClick={this.handleClick}> header </button>
    )
  }
}

export default Header