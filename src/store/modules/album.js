import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAlbum } from "../../services/modules/album";


export const fetchalbum = createAsyncThunk("fetchSelfInfo", (payload, { dispatch }) => {
    getAlbum(payload).then((res)=>{
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