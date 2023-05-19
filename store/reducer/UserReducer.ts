

import { inititalUserList } from '@/app/containts/userAPI'
import { Post } from '@/types/Types'
import {createAction, createReducer} from '@reduxjs/toolkit'


interface PostState{
    userList: Post[]
}

const inititalState: PostState = {
    // truyen data vao trong array Post[] ->containts
    // sau do cho postList: dang data do
    // khi do postList luc nay co gia tri bang data da truyen vao
    userList: inititalUserList
}



// add User
export const addUsers = createAction<Post>('blog/addUser')
// delete User
export const deleteUsers = createAction<string>('blog/deleteUser')

// createReducer(gia tri khoi tao, builder Callback)
// builderCallback: xu ly action, xu ly cap nhat state
const blogReducer = createReducer(inititalState, (builder) => {
    builder.addCase(addUsers, (state, action) => {
        // immerjs giup chung ta mutate mot state an toan
        // push action.payload vao
        const users = action.payload
        state.userList.push(users)
    }).addCase(deleteUsers, (state, action) => {
        const userID = action.payload
        console.log(userID)
        const foundUserID = state.userList.findIndex(user => user.id === userID)
        console.log(foundUserID)
        if(foundUserID !== -1){
            state.userList.splice(foundUserID, 1)
        }
    })
})

export default blogReducer