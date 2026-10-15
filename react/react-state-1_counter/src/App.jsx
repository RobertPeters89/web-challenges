import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, SetCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            SetCount(count - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            SetCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
