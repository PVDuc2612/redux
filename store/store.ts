'use client'


import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook,useSelector,  useDispatch } from 'react-redux'
import {cartSlice} from './features/cartSlice'

export const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
    }
})


// typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDishpatch: () => AppDispatch = useDispatch

export const useAppSelector :TypedUseSelectorHook<RootState> = useSelector