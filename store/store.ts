'use client'


import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducer/UserReducer'

export const store = configureStore({
    reducer:{
        blog: userReducer
    }
})


// typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
