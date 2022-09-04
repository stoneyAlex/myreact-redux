function createStore(reducer, preloadState) {
  let state = preloadState
  let listeners = []
  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listenr => listenr())
  }
  function subscribe(listener) {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
  dispatch({type: '@@/REDUX_INIT'})
  return {
    getState,
    dispatch,
    subscribe
  }
}

export default createStore