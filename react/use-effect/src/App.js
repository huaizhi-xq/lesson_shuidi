import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// capture value: 捕获当前的值
function Counter() {
  // 死循环    []   依赖
  useEffect(() => {
    console.log('?????')
  })
  
  const [count, setCount] = useState(0)
  function handleShow() {
    setTimeout(() => {
      console.log(count);
    }, 3000);
  }
  function handleAdd() {
    setCount(count + 1);
  }
  console.log('render', count++)
  return (
    <div>
      count: { count }
      <button onClick={handleAdd}> + </button>
      <button onClick={handleShow}>show count</button>
    </div>
  )
}



function App() {
  
 
  return (
    <div className="App">
      
      <Counter />
    </div>
  );
}

export default App;
