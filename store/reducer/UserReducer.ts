

import { inititalPostList } from '@/app/containts/userAPI'
import { Post } from '@/types/Types'
import {createReducer} from '@reduxjs/toolkit'


interface PostState{
    postList: Post[]
}

const inititalState: PostState = {
    // truyen data vao trong array Post[] ->containts
    // sau do cho postList: dang data do
    // khi do postList luc nay co gia tri bang data da truyen vao
    postList: inititalPostList
}

// createReducer(gia tri khoi tao, builder Callback)
// builderCallback: xu ly action, xu ly cap nhat state
const blogReducer = createReducer(inititalState, (builder) => {

})

export default blogReducer