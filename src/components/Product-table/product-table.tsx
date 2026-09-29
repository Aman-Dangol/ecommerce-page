import { ProductCard } from "@/components/ui/Product-card/product-card";
import { Product } from "@/interfaces/product.type";
import { Box } from "@chakra-ui/react";

interface Props {
  productsList: Product[];
}

export const ProductTable = ({ productsList }: Props) => {
  if (productsList) {
    return (
      <Box className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'>
        {productsList.map((p) => (
          <ProductCard
            productDetails={p}
            key={p.id}
          />
        ))}
      </Box>
    );
  }
};
