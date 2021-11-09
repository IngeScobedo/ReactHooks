import React from "react";
import "./CounterApp.css";
import { useCounter } from "./../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  let { state, increment, decrement, reset } = useCounter(0);
  return (
    <div className="counter-app">
      <h1>Counter with hook</h1>
      <h2>{state}</h2>
      <div className="counter-buttons">
        <button onClick={() => increment(1)} className="btn btn-primary">
          +1
        </button>
        <button onClick={reset} className="btn btn-primary">
          Reset
        </button>
        <button onClick={() => decrement(1)} className="btn btn-primary">
          -1
        </button>
      </div>
    </div>
  );
};
