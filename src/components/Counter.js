import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const styles = `
    .my-counter * {
      font-size: 200%;
    }

    .my-counter span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    .my-counter button {
      width: 64px;
      height: 64px;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }`;

  return (
    <div className="my-counter">
      <style>{styles}</style>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}