import * as React from 'react'

// 给某人打招呼 
// js代码不严谨
export const HelloComponent = (props) => {
  return (
    <div>
      <h2>Hello user: {props.userName} </h2>
    </div>
  )
}