import { configureStore } from "@reduxjs/toolkit";
import selfInfoReducer from "./modules/self-info";



const store = configureStore({
    reducer:{
        selfInfo: selfInfoReducer
    }
})

export default store