import styles from "./App.module.css";
import Counter from "./components/Counter";
import NameApp from "./components/NameApp";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Counter />
      <NameApp />
    </div>
  );
}
