export interface ProductSearchProps {
  q?: string;
  limit?: string;
  skip?: string;
  sortBy?: string;
  orderBy?: string;
}

export const getAllProducts = async (filters: ProductSearchProps) => {
  const urlParams = new URLSearchParams({
    q: filters.q ?? "",
    limit: filters.limit || "30",
    skip: filters.skip || "0",
    sortBy: filters.sortBy ?? "",
  });

  try {
    const response = await fetch(
      `/dummyJson/products?${urlParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = response.json();

    return data;
  } catch {
    throw new Error("Error fetching products");
  }
};
