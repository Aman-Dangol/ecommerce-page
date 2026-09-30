import { Product } from "@/interfaces/product.type";

export interface ProductSearchParams {
  sort: "asc" | "desc";
}

export const getAllProducts = async ({ sort }: ProductSearchParams) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?sort=${sort}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    return data as Promise<Product[]>;
  } catch (e) {
    console.error(e);
    throw new Error("Error fetching products");
  }
};

export const getProductCategories = async () => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/categories `,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    return data as Promise<string[]>;
  } catch (e) {
    console.error(e);
    throw new Error("Error fetching products");
  }
};

export const getProductByID = async (id: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id} `, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data as Promise<string[]>;
  } catch (e) {
    console.error(e);
    throw new Error("Error fetching products");
  }
};
