import React, { Component } from "react"

import PropTypes from "prop-types"

export default class Game extends Component {

  constructor() {
    super()
  }
  // class-properties
  // es7 class 静态属性  react prop 检测的机房
  // 怎么配置
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }
  
  state = {

  }

  render() {
    return (
      <div></div>
    )
  }
}
