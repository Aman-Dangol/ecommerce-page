import { Product } from "@/interfaces/product.type";
import { Text } from "@chakra-ui/react";

interface Props {
  price: Product["price"];
}
export const PriceTag = ({ price }: Props) => {
  return (
    <Text
      fontFamily={"accent"}
      className='space-x-4 text-xl'>
      <Text
        className='inline font-bold'
        color={"accent"}>
        ${price}
      </Text>
    </Text>
  );
};
