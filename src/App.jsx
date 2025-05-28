import { Link } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    return () => console.log("I am called");
  }, [counter]);
  return (
    <>
      <h1>Welocme</h1>
      <div className="card">
        <h2>
          Accordian <Link to={"/accordian"}>Click me</Link>
        </h2>
        <h2>
          Tootip CSS only <Link to={"/tooltip-css"}>Click me</Link>
        </h2>

        <h2>{counter}</h2>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Increase
        </button>
      </div>
    </>
  );
}
