import { createStore, applyMiddleware } from '../redux'
import combinedReducers from './reducers'
import logger from './redux-logger'
import promise from './redux-promise'
import thunk from './redux-thunk'

let store = applyMiddleware(promise, thunk, logger)
  (createStore)
  (combinedReducers, {counter1: {number: 0}, counter2: {number: 0}})


export default store
