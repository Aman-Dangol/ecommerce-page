import { ProductDetails } from "@/app/products/[id]/components/product-details";
import { getProductByID } from "@/app/utils/api-routes/product-routes/product.routes";
import { notFound } from "next/navigation";

export default async function Productpage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProductByID(id);
  if (!product) {
    return notFound();
  }
  return <ProductDetails info={product} />;
}
