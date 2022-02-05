import { createStore, combineReducers, applyMiddleware } from 'redux'
import { users } from './reducers'
import thunk from "redux-thunk";

const rootReducer = combineReducers({ global:users })

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };