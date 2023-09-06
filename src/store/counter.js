import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter', // 'counter' => vous choisissez le nom
  initialState: initialCounterState,
  /**
   * - All the reducers you need
   * - Receives autaomatically the latest state and action(if you need)
   * - Clone the latest state
   */
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;