import React, {Component} from 'react'
import actionCreators from '../store/actions/counter1'
import store from '../store'
import { bindActionCreators } from '../redux'

const boundActions = bindActionCreators(actionCreators, store.dispatch)

export default class Counter1 extends Component {
  constructor(props) {
    super(props)
    this.state = {title: 'stoney count 1', ...store.getState().counter1}
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().counter1)
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick = {boundActions.add1}>+</button>
        <button onClick = {boundActions.minus1}>-</button>
      </div>
    )
  }
}