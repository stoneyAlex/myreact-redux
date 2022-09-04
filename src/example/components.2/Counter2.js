import React, {Component} from 'react'
import { useSelector, useDispatch } from '../react-redux/hooks'
import actionCreators from '../store/actions/counter2'


function Counter2 () {
    const { number } = useSelector(state =>  state.counter2)
    let dispatch = useDispatch()
    return (
      <div>
        <p>{number}</p>
        <button onClick = {() => dispatch(actionCreators.add2())}>+</button>
        <button onClick = {() => dispatch(actionCreators.minus2())}>-</button>
      </div>
    )
}

export default Counter2;