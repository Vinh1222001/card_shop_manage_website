import { COMMON_STATUSES } from "./commonStatuses";

const { createSlice } = require("@reduxjs/toolkit");

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        status: COMMON_STATUSES.IDLE,
        admin: {
            isAuthentication: false,
            infor:{}
                
        }
    },
    reducers:{
        
    }
    
})

export default adminSlice