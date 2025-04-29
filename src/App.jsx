import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
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
      </div>
    </>
  );
}
