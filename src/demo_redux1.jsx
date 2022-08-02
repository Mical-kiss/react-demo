import React, { useEffect } from 'react'
import store from './redux/store'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from './redux/countAction'

export default function Counter() {

  useEffect(() => {
    console.log(111, store.dispatch(createIncrementAction()), store.dispatch(createIncrementAsyncAction(1000)).then(res => console.log(222, res)))
  }, [])
  return (
    <div>
      <div>
        <span>{ store.getState() }</span>
        <button
          onClick={() => { store.dispatch(createIncrementAction()) }}
        >
          Increment
        </button>
        <button
          onClick={() => { store.dispatch(createDecrementAction()) }}
        >
          Decrement
        </button>
        <button
          onClick={() => { store.dispatch(createIncrementAsyncAction(1000)) }}
        >
          IncrementASync
        </button>
      </div>
      <div>

      </div>
    </div>
  )
}
