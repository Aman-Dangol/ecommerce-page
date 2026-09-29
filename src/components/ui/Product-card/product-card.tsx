import { PriceTag } from "@/components/ui/Product-card/components/price-tag";
import { Product } from "@/interfaces/product.type";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  productDetails: Product;
}
export const ProductCard = ({ productDetails }: Props) => {
  return (
    <Box className='border-bg-secondary flex w-full flex-col overflow-hidden rounded-2xl border p-2'>
      <Image
        className='bg-bg-secondary/20 h-52 w-full rounded-xl object-contain!'
        src={productDetails.image}
        alt={productDetails.title}
      />
      <Heading
        className='line-clamp-2 h-12'
        size={"md"}
        fontWeight={"semibold"}>
        {productDetails.title}
      </Heading>

      <Text className='bg-accent-color/15 text-accent-color inline-block w-fit rounded-xl p-1 text-xs font-semibold tracking-wider capitalize'>
        {productDetails.category.toUpperCase()}
      </Text>
      <PriceTag price={productDetails.price} />

      <Button className='rounded-xl!'>Add to cart</Button>
    </Box>
  );
};
