import { configureStore } from "@reduxjs/toolkit";

import toggleReduer from "./toggleSlice"

const store = configureStore({
    reducer:{
        toggleSlice:toggleReduer
    }
})

export default store;