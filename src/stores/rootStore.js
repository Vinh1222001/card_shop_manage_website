import adminSlice from "./slices/adminSlice";
import productSlice from "./slices/productSlide";
import { configureStore } from "@reduxjs/toolkit";

const rootStore = configureStore({
    reducer:{
        products: productSlice.reducer,
        admin: adminSlice.reducer
    }
})

export default rootStore