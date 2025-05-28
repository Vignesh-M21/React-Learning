import { Link } from "react-router-dom";
import Counter from "../../components/Counter/Counter";

export default function NoRouter() {
  return (
    <>
      <Counter />
      <h1>Router Not found</h1>
      <Link to={"/"}>Home</Link>
    </>
  );
}
