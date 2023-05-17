'use client'


import { Post } from '@/types/Types'
import {createReducer} from '@reduxjs/toolkit'

interface BlogState {
    postList: Post[]
}

const initialState: BlogState= {
    postList: []
}

const blogReducer = createReducer(initialState, builder => {

})

export default blogReducer