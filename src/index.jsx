import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/button.jsx'
import store from './store/index.jsx'
import { increment, decrement } from './dispatcher/index.jsx'

const accent = {color: '#F00'}

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    store.subscribe(() => {
      this.setState({count: store.getState()})
    })
  }

  render () {  
    return (
      <div>
        <h1>Current Store State: <span style={accent}>{this.state.count}</span></h1>
        <Button action={increment} label='Increment +'/>
        <Button action={decrement} label='Decrement -'/>
      </div>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById('app')
)
