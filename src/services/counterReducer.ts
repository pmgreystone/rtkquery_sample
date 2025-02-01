import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log('increment [reducer]')
      state.value += action.payload;
    },
    decrement: (state, action) => {
      console.log('decrement [reducer]')
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer