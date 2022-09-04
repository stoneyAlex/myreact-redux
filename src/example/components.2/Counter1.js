import React, {Component} from 'react'
import { useSelector, useDispatch } from '../react-redux/hooks'
import actionCreators from '../store/actions/counter1'


function Counter1 () {
    const { number } = useSelector(state =>  state.counter1)
    let dispatch = useDispatch()
    return (
      <div>
        <p>{number}</p>
        <button onClick = {() => dispatch(actionCreators.add1())}>+</button>
        <button onClick = {() => dispatch(actionCreators.minus1())}>-</button>
      </div>
    )
}

export default Counter1;