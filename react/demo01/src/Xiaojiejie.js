import React,{Component, Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'
import Boss from './Boss'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    } 
  }

  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  componentDidMount() {
    // console.log('componentDidMount')
    axios.get('http://rap2.taobao.org:38080/app/mock/251709/api/ingo')
      .then(res => {
        // console.log(res)
        this.setState({
          list: res.data.data
        })
      })
  }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   // true false  是否继续渲染
  //   return true
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  //   return true
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  //   return true
  // }

  

  render() {
    console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor="jsp">增加服务</label>
          <input id="jsp" 
            className="input" 
            value={this.state.inputValue} 
            onChange={this.inputChange.bind(this)} 
            ref={(input) => {this.input=input}}
            />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={ul => this.ul = ul}>
          <TransitionGroup>
            {
              this.state.list.map((item,index) => {
                return (
                  <CSSTransition
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                    key={index+item}
                    appear={true}
                    >
                    <XiaojiejieItem  
                      avaname = {"aaa"}
                      key = {index+item}
                      index = {index}
                      deleteItem = {this.deleteItem.bind(this)}
                      content={item} />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>

        <Boss />
      </Fragment>
    )
  }

  inputChange() {
    // console.log(e.target.value)
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue : this.input.value
    })

  }
  // 增加列表
  addList() {
    // 虚拟dom  异步
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
    
  }

  deleteItem(index) {
    //不允许直接直接操作状态(后期会造成严重性能问题)  所以引用一个变量
    // console.log(index)
    let list = this.state.list  
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie