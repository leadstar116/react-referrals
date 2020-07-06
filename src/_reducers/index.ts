import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import userReducer from './user.reducer'
import alertReducer from './alert.reducer'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['alertReducer']
}

const rootReducer = combineReducers({
    userReducer,
    alertReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer as any)

export default persistedReducer;