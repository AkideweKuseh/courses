/// Updater funtions

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handlerReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button><br />
      <button onClick={handlerReset}>Reset</button>
    </div>
  );
}

export default Counter;
