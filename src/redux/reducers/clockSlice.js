import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  break: 5,
  session: 25,
  actual: {
    minutes: 25,
    seconds: 0,
  },
  pause: true,
  instance: 'Session',
};



export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    handleBreak: (state, action) => {
      if(action.payload === 'increment' && state.break < 60){
        state.break = state.break + 1;
        
      }else if(state.break > 1 && action.payload === 'decrement'){
        state.break = state.break - 1;
        
      }
    },
    handleSession: (state, action) => {
      if(action.payload === 'increment' && state.session < 60){
        state.session = state.session + 1;
        if(state.pause === true){
          state.actual.minutes = state.session;
          state.actual.seconds = 0;
        }
    }else if(state.session > 1 && action.payload === 'decrement'){
      state.session = state.session - 1;
      if(state.pause === true){
        state.actual.minutes = state.session;
        state.actual.seconds = 0;
      }
    }
  },
    handlePause: (state) => {
      if(state.pause === true){
        state.pause = false;
      }else{
        state.pause= true;
      }
    },
    handleReset: (state) => {
      state.break = 5;
      state.pause = true;
      state.session = 25;
      state.actual.minutes = 25;
      state.actual.seconds = 0;
      state.instance = 'Session';
      document.getElementById('beep').pause();
      document.getElementById('beep').load();
    },
    handleSeconds: (state, action) => {
      state.actual.seconds = action.payload;
    },
    handleMinutes: (state, action) => {
      state.actual.minutes = action.payload;
    },
    handleInstace: (state) => {
      if(state.instance === 'Session'){
        state.instance = 'Break';
        state.actual.minutes = state.break;
        state.actual.seconds = 0;
      }else{
        state.instance = 'Session';
        state.actual.minutes = state.session;
        state.actual.seconds = 0;
      }
    },
  },
});

export const { handleBreak,
  handleSession, 
  handlePause, 
  handleReset,
  handleMinutes,
  handleSeconds,
  handleInstace,} = clockSlice.actions;

export default clockSlice.reducer;
