import * as actionTypes from '../action-types'
let initialState = { number: 0 }
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD2:
      return { number: state.number + 1 }
    case actionTypes.MINUS2:
      return { number: state.number - 1 }
    default:
      return state;
  }
}

export default reducer