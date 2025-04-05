import React, { useState } from "react";

export default function FunctionalCom() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>FunctionalComponent</h1>
      <p>Count - {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
