import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import persistedReducer from '../_reducers'

const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
);

export default store