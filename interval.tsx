//https://playcode.io/2021603
import { useEffect, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1);
    }, 4000);
  }, [count]);

  return <h1>Count is: {count}</h1>;
}