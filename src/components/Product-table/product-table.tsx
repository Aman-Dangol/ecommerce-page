"use client";

import { ProductFilter } from "@/components/Product-table/components/product-filter";
import { ProductCard } from "@/components/ui/Product-card/product-card";
import { Product } from "@/interfaces/product.type";
import { Box } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface Props {
  productsList: Product[];
  categories: string[];
}

export const ProductTable = ({ productsList = [], categories = [] }: Props) => {
  const params = useSearchParams();
  const search = params.get("search")?.toLowerCase() ?? "";
  const category = params.get("category")?.toLowerCase();
  const fromPrice = Number(params.get("price.from")?.toLowerCase());
  const toPrice = Number(params.get("price.to")?.toLowerCase());

  const filteredProducts = useMemo(
    () =>
      productsList.filter(
        (i) =>
          i.title.toLowerCase().includes(search) &&
          (!category || i.category.toLowerCase() === category) &&
          (!fromPrice || i.price >= fromPrice) &&
          (!toPrice || i.price <= toPrice),
      ),
    [category, fromPrice, productsList, search, toPrice],
  );

  if (productsList) {
    return (
      <Box className='space-y-4'>
        <ProductFilter categories={categories} />
        <Box className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
          {filteredProducts.map((p) => (
            <ProductCard
              productDetails={p}
              key={p.id}
            />
          ))}
        </Box>
      </Box>
    );
  }
};
