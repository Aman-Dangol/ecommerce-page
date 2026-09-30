import { ProductDetails } from "@/app/products/[id]/components/product-details";
import { getProductByID } from "@/app/utils/api-routes/product-routes/product.routes";

export default async function Productpage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProductByID(id);
  return <ProductDetails info={product} />;
}
