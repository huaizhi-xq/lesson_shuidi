import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function A() {
  const {x, y} = useMouseInfo()
  const [date, setDate ] = useState(new Date())
  const [time, setTime] = useState('')
  function hook() {
    let newDate = new Date()
    setDate(newDate)
    // hook内部拿到date是固定的
    // capture value  坑
    // 拿到的都是当前 state 快照一样当西
    console.log(newDate.toLocaleTimeString())
    setTime(newDate.toLocaleTimeString())
  }

  // commit阶段  mount + update + unmount
  useEffect(() => {
   let id = setInterval(() => {
      hook()
    }, 1000)
   return () => {
     clearInterval(id)
   }
  }, [])

  return (
    <div>
      time: {time}
      x: { x }
      y: { y }
    </div>
  )
}

function B() {
  const {x, y} = useMouseInfo()
  return (
    <div>
      x: { x }
      y: { y }
    </div>
  )
}
// HOC
// function WithMouseInfo(Com) {
//   class WithMouseComponent extends React.Component {
//     state = {
//       x: 0,
//       y: 0
//     }
//     componentDidMount() {
//       document.addEventListener('mousemove', e => {
//         this.setState({
//           x: e.clientX,
//           y: e.clientY
//         })
//       })
//     }
//     render() {
//       return (<Com x={this.state.x} y={this.state.y} />)
//     }
//   }
//   return WithMouseComponent
// }
// const Amouse = WithMouseInfo(A)
// const Bmouse = WithMouseInfo(B)

// 再加一个时间，，需要再包装一次，，，包装地狱 props传递{...props}

// 自定义hook
function useMouseInfo() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  // didMounted
  useEffect(() => {
    document.addEventListener('mousemove', e => {
      setX(e.clientX)
      setY(e.clientY)
    })
  }, [])  //[] hook依赖

  return {
    x,
    y
  }

}

function App() {
  return (
    <div className="App">
      {/* <Amouse />
      <Bmouse /> */}
      <A />
      <B />
    </div>
  );
}

export default App;
