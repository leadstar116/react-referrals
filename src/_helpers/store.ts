import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import persistedReducer from '../_reducers'

const store = createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

export default store