import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <h1
      onClick={() => setCounter((currentCounter) => currentCounter + 1)}
      style={{ color: "white" }}
    >
      Counter: {counter}
    </h1>
  );
}
