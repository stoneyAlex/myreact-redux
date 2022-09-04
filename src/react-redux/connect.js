import React from 'react'
import ReactReduxContext from './ReactReduxContext'
import { bindActionCreators } from '../redux';

function connect(mapStateToProps, mapDispatchToProps) {
  return function  (OldComponent) {
    return class extends React.Component {
      static contextType = ReactReduxContext
      constructor(props, context) {
        super(props)
        let { store } = context
        let {getState, subscribe, dispatch} = store
        this.state = mapStateToProps(getState())
        this.unsubscribe = subscribe(() => {
          this.setState(mapStateToProps(getState()))
        })
        this.dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      render() {
        return <OldComponent {...this.props} {...this.state} {...this.dispatchProps} />
      }
    }
  }
}

export default connect