"use client";

import { getAllProducts } from "@/app/utils/api-routes/product-routes/product.routes";
import { ProductTable } from "@/components/Product-table/product-table";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const { data: products } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const data = await getAllProducts();

      if (data) {
        return data;
      }

      return [];
    },
  });

  return (
    <Box
      background={"primary"}
      className='p-4'>
      {products?.length && <ProductTable productsList={products} />}
    </Box>
  );
}
