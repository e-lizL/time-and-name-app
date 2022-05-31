import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counterWrapper}>
      <h1 className={styles.heading}>Counter App</h1>
      <div className={styles.currentCount}>count</div>
      <div className={styles.buttonWrapper}>
        <button onClick={() => setCount(count - 1)} className={styles.button}>
          -
        </button>
        <button onClick={() => setCount(count + 1)} className={styles.button}>
          +
        </button>
        <button onClick={() => setCount(count(0))} className={styles.resetButton}>
          reset
        </button>
      </div>
    </div>
  );
}
