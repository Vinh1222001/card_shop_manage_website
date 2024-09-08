import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COMMON_STATUSES } from "./commonStatuses";
import { getAllProductService } from "../../services/productServices";

const productSlice = createSlice({
    name: "products",
    initialState: {
        status: COMMON_STATUSES.IDLE,
        products: []
    },
    reducers:{

    },
    extraReducers: builder =>{
        builder
        .addCase(fetchAllProducts.pending, (state) =>{
            state.status = COMMON_STATUSES.PENDING
        })
        .addCase(fetchAllProducts.fulfilled, (state, action)=>{
            state.status = COMMON_STATUSES.FULFILLED
            // console.log(action);
            state.products = action.payload
            
        })
    }
})

export const fetchAllProducts = createAsyncThunk("fetchAllProducts", () =>{
    const products = getAllProductService()

    return products
}) 

export default productSlice