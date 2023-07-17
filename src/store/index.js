import { configureStore } from "@reduxjs/toolkit";
import selfInfoReducer from "./modules/self-info";
import albumReducer from './modules/album'


const store = configureStore({
    reducer:{
        selfInfo: selfInfoReducer,
        album: albumReducer
    }
})

export default store