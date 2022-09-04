import React, {Component} from 'react'
import { connect } from '../react-redux'
import actionCreators from '../store/actions/counter2'


class Counter2 extends Component {
  render() {
    const { number, add2, minus2 } = this.props
    return (
      <div>
        <p>{number}</p>
        <button onClick = {add2}>+</button>
        <button onClick = {minus2}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.counter2
const ConnectedCounter2 =  connect(
  mapStateToProps,
  actionCreators
)(Counter2)

export default ConnectedCounter2;