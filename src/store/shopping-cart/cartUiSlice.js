import {createSlice} from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name:"cart",
    initialState:{cartIsVisiable:false},
    reducers:{
        toggle(state){
            state.cartIsVisiable = !state.cartIsVisiable
        }
    }
})

export const cartUiAction =cartUiSlice.actions;
export default cartUiSlice;