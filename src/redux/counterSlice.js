import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter123',
  initialState: {
    value: 0,
    value1: 2
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer