import { Product } from "@/interfaces/product.type";
import { Text } from "@chakra-ui/react";

interface Props {
  price: Product["price"];
}
export const PriceTag = ({ price }: Props) => {
  return (
    <Text
      fontFamily={"accent"}
      color={"accent"}
      className='space-x-4 text-xl font-bold'>
      ${price}
    </Text>
  );
};
