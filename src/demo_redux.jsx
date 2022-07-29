import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counterSlice'

console.log(decrement())
export default function Counter() {
  const {value, value1} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <span>{value},{value1}</span>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <A></A>
      </div>
    </div>
  )
}

function A(props) {
  const {value, value1} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return <>
    <span>{value},{value1}</span>
    <button
      onClick={() => dispatch(incrementByAmount(20))}
    >
      incrementByAmount
    </button>
  </>
}