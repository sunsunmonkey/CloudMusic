import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAlbum } from "../../services/modules/album";


export const fetchalbum = createAsyncThunk("fetchSelfInfo", (payload, { dispatch }) => {
    console.log(payload)
    getAlbum(payload).then((res)=>{
        console.log(res)
        dispatch(changeAlbumAction(res))
    })

})
  
const albumSlice = createSlice({
    name:"album",
    initialState:{
        data:{},
    },
     reducers:{
        changeAlbumAction(state,{payload}){
            state.data  = payload
        },

    }
})


export const {  changeAlbumAction } = albumSlice.actions

export default albumSlice.reducer