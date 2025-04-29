import React, { useCallback, useState } from "react";
import { useFetch } from "../../hook/useFetch";
import { getProducts } from "../../src/api/util";
import "./style/index.css";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const ListItem = ({ item, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{formatter.format(item.price)}</td>
      <td>
        <img src={item.image} alt={item.title} />
      </td>
      <td>{item.description}</td>
      <td>
        <button>Delete</button>
        <button>Edit</button>
      </td>
    </tr>
  );
};

export function ProductListing() {
  const [products, setProducts] = useState(null);
  const { error, loading } = useFetch(getProducts, setProducts);

  // const onDelete = useCallback(() => {
  //     return
  // }, [products])

  if (loading) return <h2>loading......</h2>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
