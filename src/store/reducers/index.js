import {combineReducers} from '../../redux'

import counter1 from './counter1'
import counter2 from './counter2'

let reducers = {
  counter1,
  counter2
}

let combinedReducers = combineReducers(reducers)
export default combinedReducers