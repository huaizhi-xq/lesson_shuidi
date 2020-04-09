import React from 'react';
import logo from './logo.svg';
import './App.css';

class A extends React.Component {
  render() {
    const {x,y} = this.props
    return (
      <div>
        x: {x}-{y}
      </div>
    )
  }
}

// 1. state 2. didMount
class B extends React.Component {
  render() {
    const {x,y} = this.props
    return (
      <div>
        <h2>{x}</h2>
        <h2>{y}</h2>
      </div>
    )
  }
}

// 高阶组件  组件内部公共的代码抽离出来  其实一个方法
function WithMounseInfo(Com) {
  class MouseXy extends React.Component {
    // 公共代码抽离出来
    // 1. 
    state = {
      x: 0,
      y: 0
    }
    componentDidMount() {
      document.body.addEventListener('mousemove', (e) => {
        this.setState({
          x: e.clientX,
          y: e.clientY
        })
      })
    }
    // 该渲染什么？
    render() {
      const {x,y} = this.state
      return (
        <Com x={x} y={y}/>
      )
    }
  }
  return MouseXy
}
const Axy = WithMounseInfo(A)
const Bxy = WithMounseInfo(B)

class App extends React.Component {
  render() {
    return (
      <div>
        <Axy></Axy>
        <Bxy></Bxy>
      </div>
    )
  }
}

export default App;
