import React from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends React.Component {  //props 和state 浅比较
  state = {  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // 组件第一次存在于dom中，函数是不会被执行
  // 如果已经存在于dom中，函数才会被执行
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }

  static getDerivedStateFromProps(nextProps,prevState) {
    const {type} = nextProps;
    console.log(prevState)
    // 当传入的type发生变化的时候，更新state
    if (type !== prevState.type) {
        return {
            type,
        };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  render() { 
    console.log('child-render')
    return ( 
      <li onClick={this.handleClick}>
        {this.props.avaname}为你服务-{this.props.content}
      </li>
     );
  }
  
  handleClick() {
    // console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
}

XiaojiejieItem.propTypes = {
  avaname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
XiaojiejieItem.defaultProps = {
  avaname: "C"
}
 
export default XiaojiejieItem;

