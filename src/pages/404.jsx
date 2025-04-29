import { Link } from "react-router-dom";

export default function NoRouter() {
  return (
    <>
      <h1>Router Not found</h1>
      <Link to={"/"}>Home</Link>
    </>
  );
}
