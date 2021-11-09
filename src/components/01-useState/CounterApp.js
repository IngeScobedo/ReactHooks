import React, { useState } from "react";
import "./CounterApp.css";
export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });
  let { counter1, counter2 } = counter;
  return (
    <div className="counter-app">
      <h1>Counter</h1>
      {/* <h1>{value}</h1>  */}
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter({
            ...counter,
            counter1: counter1 + 1,
          });
        }}
      >
        +1
      </button>
    </div>
  );
};
