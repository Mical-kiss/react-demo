import React from 'react'
import store from './redux/store'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from './redux/countAction'

export default function Counter() {

  return (
    <div>
      <div>
        <span>{ store.getState().counterReducer }</span>
        <button
          onClick={() => { console.log(store.dispatch(createIncrementAction()), 111) }}
        >
          Increment111
        </button>
        <button
          onClick={() => { store.dispatch(createDecrementAction()) }}
        >
          Decrement
        </button>
        <button
          onClick={() => { console.log(store.dispatch(createIncrementAsyncAction(1000)), 222) }}
        >
          IncrementASync
        </button>
      </div>
      <div>

      </div>
    </div>
  )
}
