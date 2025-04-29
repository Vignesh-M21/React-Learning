import api from "./posts";

export async function getProducts() {
  return (await api.get("/products")).data;
}

export async function deleteProduct(id) {
  return await api.delete(`/delete/${id}`);
}

export async function updateProduct(data) {
  return await api.put("/update", data);
}

export async function updateProductfetch(data) {
  return await fetch("/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
