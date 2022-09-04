let dispatch
let middlewareAPI = {
  dispatch: (action) => dispatch(action)
}
dispatch = (action) => {console.log('dispatch', action);}
middlewareAPI.dispatch({type: 'add'})