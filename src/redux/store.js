import { createStore, applyMiddleware } from "redux";
import counterReducer from './counterReducer'
import thunk from 'redux-thunk'

export default createStore(counterReducer, applyMiddleware(thunk))