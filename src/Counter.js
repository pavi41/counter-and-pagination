import React, { useState } from "react";

function Counter() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Counter</h2>
      <div>Count: {count}</div>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Incrementt
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
