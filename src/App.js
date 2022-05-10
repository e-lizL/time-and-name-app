import "./App.css";
import Counter from "./components/Counter";
import NameApp from "./components/NameApp";

export default function App() {
  return (
    <div className="appWrapper">
      <Counter />
      <NameApp />
    </div>
  );
}
