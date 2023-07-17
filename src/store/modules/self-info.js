import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getLoginStatus} from '../../services/modules/login'
import { getDetailInfo } from "../../services/modules/selfInfo";

export const fetchSelfInfo = createAsyncThunk("fetchSelfInfo", async (payload, { dispatch }) => {

     const res= await getLoginStatus(localStorage.getItem('cookie'))
      dispatch( changeSelfInfoAction(res))

      const res2=await getDetailInfo(res.userId) 
      dispatch(changeDetailInfoAction( res2 ))
  })
  
const selfInfoSlice = createSlice({
    name:"selfInfo",
    initialState:{
        baseInfo:{
            nickname:"未登录",
        },
        detailInfo:{
             profile:{} 
        }
     },
     reducers:{
        changeSelfInfoAction(state,{payload}){
            state.baseInfo = payload
        },
        changeDetailInfoAction(state,{payload}){
            state.detailInfo = payload
        }
    }
})

export const {  changeSelfInfoAction , changeDetailInfoAction} = selfInfoSlice.actions

export default selfInfoSlice.reducer