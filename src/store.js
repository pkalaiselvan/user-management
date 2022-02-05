import { createStore, combineReducers } from 'redux'
import { user } from './reducers'

export default () => {
    const rootReducer = combineReducers({
        user
    })

    return createStore(rootReducer)
}