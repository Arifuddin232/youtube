import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../../utils.js/constants";
const cSlice=createSlice({
    name:"chatting",
    initialState:{
        message:[]
    }        
,
    reducers:{
        putMessage:(state,action)=>{
            state.message.splice(LIVE_CHAT_COUNT,1);
            state.message.push(action.payload);
        }
    }
})
export const{putMessage}=cSlice.actions;
export default cSlice.reducer;