import { Product } from "@/interfaces/product.type";
import { Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

interface Props {
  price: Product["price"];
  size?: ComponentProps<typeof Text>["fontSize"];
}
export const PriceTag = ({ price, size = "xl" }: Props) => {
  return (
    <Text
      fontFamily={"accent"}
      fontSize={size}
      color={"accent"}
      className='space-x-4 font-bold'>
      ${price}
    </Text>
  );
};
