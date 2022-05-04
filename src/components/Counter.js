import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className={styles.heading}>Counter App</h1>
      <div className="currentCount">{count}</div>
      <div className="buttonWrapper">
        <button onClick={() => setCount(count - 1)} className="button">
          -
        </button>
        <button onClick={() => setCount(count + 1)} className="button">
          +
        </button>
        <button onClick={() => setCount(count(0))} className="resetButton">
          reset
        </button>
      </div>
    </div>
  );
}
