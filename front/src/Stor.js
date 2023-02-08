import {configureStore} from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import appApi from './services/appApi'

// presist our store
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit' 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

// reducers
const reducer = combineReducers({
    user:userSlice,
    [appApi.reducerPath]:appApi.reducer,
})

const persistConfig = {
    key:'root',
    storage,
    blackList:[appApi.reducerPath],
}

// presist our stroe
 const persistdReducer = persistReducer(persistConfig,reducer)

// creating the store 
const store = configureStore({
    reducer:persistdReducer,
    middleware:[thunk,appApi.middleware]
})

export default store