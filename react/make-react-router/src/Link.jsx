import React from 'react';
import Context from './Context';

class Link extends React.Component {
  // handleClick = (e) => {
  //   // a 默认调转
  //   e.preventDefalut()
  //   // 组件切换出来
  //   // 组件能不能出来  控制？ pathname  update setState

  // }
  render() {
    return (
      <Context.Consumer>
        {
          ({handlePatchNameChange}) => {
            return (
              <a onClick={e => {
                e.preventDefault()
                handlePatchNameChange(this.props.to)
              }}>
              {this.props.children}
            </a>
            )
          }
        }
      </Context.Consumer>
    )
  }
}

export default Link