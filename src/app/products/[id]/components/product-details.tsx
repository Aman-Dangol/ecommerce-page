"use client";

import { AddToCardButton } from "@/components/buttons/add-to-card";
import { CategoryTag } from "@/components/category-tag/category-tag";
import { PriceTag } from "@/components/price-tag/price-tag";
import { Rating } from "@/components/rating/rating";
import { Product } from "@/interfaces/product.type";
import { Box, Flex, Heading, Image, Separator, Text } from "@chakra-ui/react";

interface Props {
  info: Product;
}

export const ProductDetails = ({ info }: Props) => {
  return (
    <Box className='gap-2 space-y-2 p-2 wrap-break-word lg:grid lg:grid-cols-[minmax(200px,500px)_minmax(200px,600px)]'>
      <Heading
        size='xl'
        className='md:hidden'>
        {info.title.replaceAll("-", "\u2011")}
      </Heading>
      <Image
        height={"24rem"}
        max-height={"24rem"}
        width={"full"}
        objectFit={"contain"}
        className='bg-bg-secondary/15'
        src={info.image}
        alt={info.title}
      />
      <Box>
        <Heading
          size='xl'
          className='hidden lg:inline'>
          {info.title.replaceAll("-", "\u2011")}
        </Heading>

        <Box className='grid grid-cols-2 gap-2 lg:grid-cols-1'>
          <Flex
            height={"fit"}
            className='gap-1'
            flexDirection={"column"}>
            <PriceTag price={info.price} />
            <CategoryTag category={info.category} />
            <Rating {...info.rating} />
          </Flex>

          <AddToCardButton info={info} />
        </Box>

        <Box>
          <Heading size={"sm"}>Description</Heading>
          <Separator />
          <Text fontSize={"xs"}>{info.description}</Text>
        </Box>
      </Box>
    </Box>
  );
};
