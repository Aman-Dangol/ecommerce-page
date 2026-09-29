"use client";

import { getAllProducts } from "@/app/utils/api-routes/product-routes/product.routes";
import { Box } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProdcuts] = useState({ products: [] });
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit") || "";

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts({
        limit,
      });

      setProdcuts(data);
    };

    fetchData();
  }, [limit, setProdcuts]);

  return (
    <Box background={"primary"}>
      <pre className='break-after-all whitespace-pre-wrap'>
        {products.products.length}

        {JSON.stringify(products, null, 2)}
      </pre>
    </Box>
  );
}
