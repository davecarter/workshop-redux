import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './reducer/index.jsx'

const store = createStore(counter)
const accent = {color: '#F00'}

export default class App extends Component {
  getState () {
    return store.getState()
  }

  render () {
    return (
      <div>
        <h1>Current Store State: <span style={accent}>{this.getState()}</span></h1>
      </div>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById('app')
)
