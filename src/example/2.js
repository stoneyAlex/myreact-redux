let dispatch
let middlewareAPI = {
  dispatch
}
dispatch = (action) => {console.log('dispatch', action);}
middlewareAPI.dispatch({type: 'add'})