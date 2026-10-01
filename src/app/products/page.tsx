import {
  getAllProducts,
  getProductCategories,
  ProductSearchParams,
} from "@/app/utils/api-routes/product-routes/product.routes";
import { ProductTable } from "@/components/Product-table/product-table";
import { Box, Skeleton } from "@chakra-ui/react";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<ProductSearchParams & { search: string }>;
}) {
  const { sort = "asc" } = await searchParams;

  const [categories, data] = await Promise.all([
    getProductCategories(),
    getAllProducts({ sort: sort }),
  ]);

  return (
    <Box
      background='primary'
      className='p-4'>
      <ProductTable
        productsList={data}
        categories={categories}
      />
    </Box>
  );
}
