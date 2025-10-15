import React from 'react';
import useCounter from '../counter';

function Counter1() {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div>
      <h3>Counter 1</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter1;
