import * as actionTypes from '../action-types'
const actionCreators = {
  add1() {
    return {type: actionTypes.ADD1}
  },
  minus1() {
    return {type: actionTypes.MINUS1}
  },
  thunkAdd() {
    return function (dispatch, getState) {
      setTimeout(() => {
        dispatch({type: actionTypes.ADD1})
      }, 2000)
    }
  },
  promiseAdd() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ type: actionTypes.ADD1 })
      }, 2000)
    })
  },
  promise2Add() {
    return {
      type: actionTypes.ADD1,
      payload: new Promise((resolve, reject) => {
        setTimeout(() => {
          let result = Math.floor(Math.random() * 10)
          console.log('result: ', result)
          if(result > 5) {
            resolve(result)
          } else {
            reject(result)
          }
        }, 2000)
      })
    }
  }
}

export default actionCreators