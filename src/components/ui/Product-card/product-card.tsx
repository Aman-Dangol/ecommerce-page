import { AddToCartButton } from "@/components/buttons/add-to-cart";
import { CategoryTag } from "@/components/category-tag/category-tag";
import { PriceTag } from "@/components/price-tag/price-tag";
import { Rating } from "@/components/rating/rating";
import { Product } from "@/interfaces/product.type";
import { Box, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface Props {
  productDetails: Product;
  hidebutton?: boolean;
}
export const ProductCard = ({ productDetails, hidebutton = false }: Props) => {
  const router = useRouter();

  return (
    <Box
      className='border-bg-secondary hover:bg-bg-secondary/60 flex w-full flex-col gap-2 overflow-hidden rounded-2xl border p-2 transition-colors duration-150'
      onClick={() => {
        router.push("/products/" + productDetails.id);
      }}>
      <Image
        className='bg-bg-secondary/20 h-52 w-full rounded-xl object-contain!'
        src={productDetails.image}
        alt={productDetails.title}
      />
      <Heading
        className='line-clamp-1 md:line-clamp-2 md:h-12'
        size={"md"}
        fontWeight={"semibold"}>
        {productDetails.title}
      </Heading>

      <Rating
        count={productDetails.rating.count}
        rate={productDetails.rating.rate}
      />

      <CategoryTag category={productDetails.category} />
      <PriceTag price={productDetails.price} />
      {!hidebutton && <AddToCartButton info={productDetails} />}
    </Box>
  );
};
