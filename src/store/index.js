import { createStore } from 'redux';

const storeReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === 'increment') {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(storeReducer);

export default store;
