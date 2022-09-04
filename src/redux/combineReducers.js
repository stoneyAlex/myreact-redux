function combineReducers(reducers) {
  return function rootReducer(totalState = {}, action) {
    let nextState = {}
    for (let key in reducers) {
      nextState[key] = reducers[key](totalState[key], action)
    }
    return nextState
  }
}

export default combineReducers