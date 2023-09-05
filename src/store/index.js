// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter', // 'counter' => vous choisissez le nom
  initialState, // initialState: initialState
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     // state.counter++; // That is wrong => NEVER MUTATE THE EXISTING STATE
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
    reducer: { counter: counterSlice.reducer}
});

export default store;
