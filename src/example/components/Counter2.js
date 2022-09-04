import React, {Component} from 'react'
import actionCreators from '../store/actions/counter2'
import store from '../store'
import { bindActionCreators } from '../redux'

const boundActions = bindActionCreators(actionCreators, store.dispatch)

export default class Counter2 extends Component {
  constructor(props) {
    super(props)
    this.state = {title: 'stoney count 2', ...store.getState().counter2}
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().counter2)
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick = {boundActions.add2}>+</button>
        <button onClick = {boundActions.minus2}>-</button>
      </div>
    )
  }
}