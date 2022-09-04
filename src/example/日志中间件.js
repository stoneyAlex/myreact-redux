import { createStore } from '../redux'
import combinedReducers from './reducers'
let store = createStore(combinedReducers)

let originDispatch = store.dispatch;
store.dispatch = function (action) {
  console.log('prev state', store.getState())
  originDispatch(action)
  console.log('next state', store.getState())
}

export default store