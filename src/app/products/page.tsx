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
    <Box className='grid h-[92vh] grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton
          key={index}
          height={"120"}
        />
      ))}
    </Box>
  );

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
