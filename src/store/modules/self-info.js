import { createSlice } from "@reduxjs/toolkit";

const selfInfoSlice = createSlice({
    name:"selfInfo",
    initialState:{
        selfInfo:{
            name:"未登录"
        }
     },
     reducers:{
        changeSelfInfoAction(state,{payload}){
            state.dataInfo = payload
        }
    }
})

export const {  changeSelfInfoAction } = selfInfoSlice.actions

export default selfInfoSlice.reducer