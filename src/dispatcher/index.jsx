import store from '../store/index.jsx'

const increment = () => {
  console.log(store.getState())
  return store.dispatch({type: 'INCREMENT'})
}

const decrement = () => {
  console.log(store.getState())
  return store.dispatch({type: 'DECREMENT'})
}

export { increment, decrement }