import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};

export default Counter;
