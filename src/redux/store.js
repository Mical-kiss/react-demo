import { createStore, applyMiddleware, combineReducers } from "redux";
import counterReducer from './counterReducer'
import thunk from 'redux-thunk'

export default createStore(combineReducers({
  counterReducer
}), applyMiddleware(thunk))