import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// define a service user a base URL

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (builder) => ({
        // creating user
        signupUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            })
        }),
        // login
        loginUser: builder.mutation({
            query: (user) => ({
                url: '/user/login',
                method: 'POST',
                body: user,
            })
        }),
        // logout 
        logotUser: builder.mutation({
            query: (payload) => ({
                url: 'logout',
                method: 'DELETE',
                body: payload
            })
        })
    })
}) 

export const { useSignupUserMutation, useLoginUserMutation, useLogotUserMutation } = appApi

export default appApi 