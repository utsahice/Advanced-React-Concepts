import React from 'react';
import useCounter from '../counter';

function Counter2() {
  const { count, increment, decrement, reset } = useCounter(10, 5);

  return (
    <div>
      <h3>Counter 2</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+5</button>
      <button onClick={decrement}>-5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter2;
