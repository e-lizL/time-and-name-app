import { useState } from "react";
import styles from "./NameApp.module.css";

export default function Name() {
  const [name, setName] = useState("stranger");

  return (
    <div className="nameApp">
      <h1 class={styles.heading}>Name App</h1>

      <h1>{name}</h1>
      <button onClick={() => setName("Elizabeth")}>Eliza</button>
      <button onClick={() => setName("Mike")}>Mike</button>
      <button onClick={() => setName("stranger")}>reset</button>
    </div>
  );
}
