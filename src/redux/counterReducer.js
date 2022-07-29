const initState = 99

export default function counterReducer(preState = initState, action) {
  const {type, data} = action
  switch (type) {
    case 'increment':
      console.log(preState)
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}