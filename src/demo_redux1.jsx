import React from 'react'
import store from './redux/store'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from './redux/countAction'

export default function Counter() {

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
