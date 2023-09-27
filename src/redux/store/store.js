import { configureStore } from "@reduxjs/toolkit";
import { clockSlice } from "../reducers/clockSlice";

export const store = configureStore({
    reducer:{
        clock: clockSlice,
    }
});