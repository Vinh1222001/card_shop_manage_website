import productSlice from "./slices/productSlide";
import { configureStore } from "@reduxjs/toolkit";

const rootStore = configureStore({
    reducer:{
        products: productSlice.reducer
    }
})

export default rootStore