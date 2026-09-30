import { getProductByID } from "@/app/utils/api-routes/product-routes/product.routes";
import { Box } from "@chakra-ui/react";

export default async function Productpage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProductByID(id);
  return (
    <Box>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </Box>
  );
}
