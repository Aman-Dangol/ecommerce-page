import { getProductByID } from "@/app/utils/api-routes/product-routes/product.routes";
import { AddToCartButton } from "@/components/buttons/add-to-cart";
import { PriceTag } from "@/components/price-tag/price-tag";
import { toaster } from "@/components/ui/toaster";
import { CartProduct, useCartStore } from "@/utils/store/cart.store";
import { Box, Flex, Heading, IconButton, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { PiTrash } from "react-icons/pi";

interface Props {
  product: CartProduct;
}

export const CartItem = ({ product }: Props) => {
  const { removeProduct } = useCartStore();
  const { data: productDetails } = useQuery({
    queryKey: ["product", product.id],
    queryFn: () => getProductByID(product.id.toString()),
  });

  const totalPrice = (product.amount * (productDetails?.price ?? 1)).toFixed(2);

  if (productDetails)
    return (
      <AddToCartButton
        info={productDetails}
        asChild>
        <Flex
          gap={"2"}
          background={"secondary"}
          padding={"2"}>
          <Image
            objectFit={"contain"}
            className='aspect-square w-16'
            src={productDetails?.image}
            alt={productDetails?.title}
          />
          <Box flex={"1"}>
            <Flex>
              <Heading
                size={"sm"}
                className='flex-1'>
                {productDetails?.title}
              </Heading>
              <IconButton
                backgroundColor={"red.600"}
                onClick={(e) => {
                  e.stopPropagation();
                  removeProduct(productDetails.id);
                  toaster.create({
                    title: "Item Removed From Cart",
                    type: "error",
                  });
                }}
                size={"xs"}>
                <PiTrash />
              </IconButton>
            </Flex>
            <Heading size={"sm"}>{product.amount}</Heading>
            <PriceTag
              price={Number(totalPrice)}
              size={"sm"}
            />
          </Box>
        </Flex>
      </AddToCartButton>
    );
};
