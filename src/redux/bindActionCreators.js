function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {}
  for(let key in actionCreators) {
    const actionCreator = actionCreators[key];
    boundActionCreators[key] = function() {
      dispatch(actionCreator())
    }
  }
  return boundActionCreators
}

export default bindActionCreators