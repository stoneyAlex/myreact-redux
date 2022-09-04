import * as actionTypes from '../action-types'
let initialState = { number: 0 }
function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case actionTypes.ADD1:
      if(action.error) { // 说明失败了
        return { number: state.number - action.payload }
      } else {
        return { number: state.number + action.payload }
      }
    case actionTypes.MINUS1:
      return { number: state.number - 1 }
    default:
      return state;
  }
}

export default reducer