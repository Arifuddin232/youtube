import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import cSlice from "../components/cslice.js/cSlice";

const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chatting:cSlice
  },

})
export default store;