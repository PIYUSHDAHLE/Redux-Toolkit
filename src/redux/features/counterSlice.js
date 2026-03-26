import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    incAmount: (state, action) =>{
      state.value += action.payload
    },
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
        if (state.value>0) {
            state.value -= 1;
        } 
    },
  }
});

export const { incAmount, inc, dec, } = counterSlice.actions;

export default counterSlice.reducer;