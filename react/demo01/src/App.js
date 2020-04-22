import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>{true?'a':"A"}a</li>
        <li>b</li>
      </ul>
    )
  }
}

export default App