import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // const stateCounter = useSelector((state) => state);
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  /**
   * Without Redux Toolkit
   */
  // const incrementHandler = () => dispatch({ type: 'increment' });

  const incrementHandler = () => dispatch(counterActions.increment());

  /**
   * Without Redux Toolkit
   */
  // const increaseHandler = () => dispatch({ type: 'increase', amount: 5 });

  const increaseHandler = () => dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5}

  /**
   * Without Redux Toolkit
   */
  // const decrementHandler = () => dispatch({ type: 'decrement' });

  const decrementHandler = () => dispatch(counterActions.decrement());

  /**
   * Without Redux Toolkit
   */
  // const toggleCounterHandler = () => dispatch({ type: 'toggle' });

  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increnement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// ********** USE REDUX DATA IN CLASS COMPONENT ***************
// import { Component } from 'react';
// import { connect } from 'react-redux';
// import classes from './Counter.module.css';

// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>
//             Increnement
//           </button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// // connect permet de connecter redux au composant
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
