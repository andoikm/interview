import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";

const decrementAsync = (payload) => dispatch => {
  return setTimeout(() => {
    dispatch({
      type: "DECREMENT",
      payload
    })
  }, 0);
}

function App() {
  const count = useSelector(state => state.TestReducers.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT',
    });
  };

  const handleDeIncrement = () => {
    dispatch(decrementAsync())
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDeIncrement}>de increment</button>
    </div>
  );
}

export default App;
