import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      state += 1;
      return state;
    },
    decrement: (state) => {
      state -= 1;
      return state;
    },
    reset: (state) => {
      state = 0;
      return state;
    },
    incrementByAmount: (state, action) => {
      state = state + action.payload;
      return state;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
