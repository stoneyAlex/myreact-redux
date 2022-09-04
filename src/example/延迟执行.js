import { createStore } from '../redux'
import combinedReducers from './reducers'
let store = createStore(combinedReducers)

let originDispatch = store.dispatch;
store.dispatch = function (action) {
  setTimeout(() => {
    originDispatch(action)
  }, 1000)
}

export default store