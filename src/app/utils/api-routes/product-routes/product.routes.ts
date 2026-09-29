import { Product } from "@/interfaces/product.type";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`/fake-store-api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data as Promise<Product[]>;
  } catch {
    throw new Error("Error fetching products");
  }
};
