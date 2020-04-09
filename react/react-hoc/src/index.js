import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <button id="add">+</button>
    <button id="min">-</button>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// let a = 1 + 2 - 3 
// let b = 2 + 3 - 6
// let c = 4 + 2 - 5
// // 求和 求差   共同点封装  抽象

// // 不同 通过参数传递

window.onload = function() {
  const add = document.getElementById('add')
  const min = document.getElementById('min')
  let delay = 2000
  let prev = Date.now()
  add.onclick = function() {
    let now = Date.now()
    if (now - prev > delay) {
      console.log("+++")
      prev = now
    }
  }
  min.onclick = throttle(function() {
   console.log('--')
  },2000)

  // 两个按钮都要节流 怎么封装？
  /**
   * 封装思路
   * 相同点： 封装在自己的内部
   * 不同点: function不一样  传给我一个函数
   * 函数是一等公民  函数和其他遍历有同等地位，他们都可以当作函数的参数和返回值
   */
  // 高阶函数 high order function (HOF)
  // react => 高阶组件 ：high order components (HOC)
  function throttle(func, wait) {
    // 1.
    let time1 = Date.now()
    // 2. 我怎么知道什么时候时候触发，别人传给你了，由你决定了
    // 返回一个函数
    return function() {
      // 里面就是返回给onclick的
       let time2 = Date.now()
      //  3. 
      if (time2-time1 > wait) {
        // 时机到了
        func()
        time1 = time2
      }
    }
  }
}


/**
 * A： 需要获取当前鼠标位置信息
 * 
 * B:  需要获取当前鼠标位置信息
 */