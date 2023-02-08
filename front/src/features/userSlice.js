import {createSlice} from '@reduxjs/toolkit'
import appApi from '../services/appApi'

export const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addNotification:(state,{payload}) =>{},
        restNotification:(state,{payload}) =>{}
    },
    extraReducers:(builder) =>{
        // save user after signup
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled,(state,{payload})=> payload)
        // save user after login
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled,(state,{payload})=> payload)
        // logout destroy user session
        builder.addMatcher(appApi.endpoints.logotUser.matchFulfilled,()=> null)
    }
})

export const {addNotification,restNotification} = userSlice.actions
export default userSlice.reducer