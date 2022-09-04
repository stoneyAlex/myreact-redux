import compose from './compose'
function applyMiddleware(...middlewares) {
  return function(createStore) {
    return function (reducer, preloadedState) {
      let store = createStore(reducer, preloadedState)
      let dispatch
      let middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)
      }
      let chain = middlewares.map(middleware => middleware(middlewareAPI))
      let originDispatch = store.dispatch
      dispatch = compose(...chain)(originDispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}
export default applyMiddleware