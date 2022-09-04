import React, {Component} from 'react'
import { connect } from '../react-redux'
import actionCreators from '../store/actions/counter1'


class Counter1 extends Component {
  render() {
    const { number, add1, minus1 } = this.props
    return (
      <div>
        <p>{number}</p>
        <button onClick = {add1}>+</button>
        <button onClick = {minus1}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.counter1
const ConnectedCounter1 =  connect(
  mapStateToProps,
  actionCreators
)(Counter1)

export default ConnectedCounter1;