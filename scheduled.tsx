https://playcode.io/2021628
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>Count is: {count}</p>
    </>
  );
}
