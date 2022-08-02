export const createIncrementAction = () => ({type: 'increment', data: 1})
export const createIncrementAsyncAction = (time) => {
  return async (dispatch) => {
    return await new Promise(res => {
      setTimeout(() => {
        dispatch(createIncrementAction())
        res(true)
      }, time)
    })
    // return {type: 'increment', data: 3}
  }
}
export const createDecrementAction = () => ({type: 'decrement', data: 1})