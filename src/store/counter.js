import { counter } from "@fortawesome/fontawesome-svg-core";
import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice(
    {
        name:'counter', 
        initialState:5,
        reducers: {
            increment:(state,action)=>{
                state=state+1
                return state

             },
             decrement:(state,action)=>{
                state=state-1
                return state
             }
    }
}
)
export const {increment,decrement}=counterSlice.actions

export default counterSlice.reducer