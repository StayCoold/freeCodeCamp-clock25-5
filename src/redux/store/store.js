import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "../reducers/clockSlice";

export const store = configureStore({
    reducer:{
        clock: clockReducer,
    }
});