function promise({getState, dispatch}) {
  return function (next) {
    return function(action) {
      console.log(action)
      if(action.then && typeof action.then === 'function') {
        return action.then(dispatch)
      } else if(action.payload && action.payload.then && typeof action.payload.then === 'function') {
        action.payload
        .then(payload => dispatch({...action, payload}))
        .catch(error => {
          console.log({...action, payload:error, error: true})
          return dispatch({...action, payload:error, error: true})
          // return Promise.reject(error)
        })
      } else {
        next(action)
      }     
    }
  }
}

export default promise