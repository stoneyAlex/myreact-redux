import React from 'react'
import ReactReduxContext from '../ReactReduxContext'

function useBoundDispatch() {
  const {store} = React.useContext(ReactReduxContext)
  return store.dispatch
}

export default useBoundDispatch