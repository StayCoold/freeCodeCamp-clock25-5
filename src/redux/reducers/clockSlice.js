import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  break: 5,
  session: 25,
  actual: 25,
  pause: true,
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    handleBreak : (state) =>{

    },
    handleSession : (state) => {

    },
    handlePause : (state) => {

    },
    handleReset : (state) => {

    },
  },
});


export const {handleBreak, handleSession, handlePause, handleReset} = clockSlice.actions;

export default clockSlice.reducer;