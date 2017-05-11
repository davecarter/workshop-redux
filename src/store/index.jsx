import { createStore } from 'redux'
import counter from '../reducer/index.jsx'

const store = createStore(counter)

export default store