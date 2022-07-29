export const createIncrementAction = () => ({type: 'increment', data: 1})
export const createIncrementAsyncAction = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction())
    }, time)
    return {type: 'increment', data: 1}
  }
}
export const createDecrementAction = () => ({type: 'decrement', data: 1})