import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow: true
     }
     this.toToggole = this.toToggole.bind(this)
  }
  render() { 
    return ( 
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
          >
            <div>Boss--孙悟空</div> 
        </CSSTransition>
        
        <div><button onClick={this.toToggole}>召唤boss</button></div>
      </div>
     );
  }
  toToggole() {
    // console.log('+++')
    this.setState({
      isShow: this.state.isShow?false:true
    })
  }
}
 
export default Boss;