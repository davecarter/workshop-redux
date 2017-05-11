import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/button.jsx'
import store from './store/index.jsx'
import { increment, decrement } from './dispatcher/index.jsx'

const accent = {color: '#F00'}

export default class App extends Component {
  render () {
    const { handleIncrement, handleDecrement, counterValue } = this.props

    return (
      <div>
        <h1>Current Store State: <span style={accent}>{counterValue}</span></h1>
        <Button action={handleIncrement} label='Increment +'/>
        <Button action={handleDecrement} label='Decrement -'/>
      </div>
    )
  }
}

const render = () => ReactDOM.render(
  <App
    counterValue={store.getState()}
    handleIncrement={increment}
    handleDecrement={decrement}
  />, document.getElementById('app')
)

render()
store.subscribe(render)