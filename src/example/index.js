/*
 * @Author: shimingxia
 * @Date: 2022-08-15 09:07:10
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 17:18:30
 * @Description: 
 */
import { createStore } from 'redux'
let counterValue = document.getElementById('counter-value')
let addBtn = document.getElementById('add-btn')
let minusBtn = document.getElementById('minus-btn')

const ADD = 'ADD'
const MINUS = 'MINUS'

function reducer(state = {number: 0}, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + 1 }
      break;
    case MINUS:
      return { number: state.number - 1 }
      break;
    default:
      return state;
  }
}

let store = createStore(reducer, {number: 1})
function render() {
  counterValue.innerHTML = store.getState().number + ''
}
render()
let unsubscribe = store.subscribe(render)

setTimeout(() => {
  unsubscribe()
}, 3000);

addBtn.addEventListener('click', () => {
  store.dispatch({type: ADD})
})
minusBtn.addEventListener('click', () => {
  store.dispatch({type: MINUS})
})