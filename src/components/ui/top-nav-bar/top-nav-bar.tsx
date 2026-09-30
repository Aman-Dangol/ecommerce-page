"use client";

import { Box, Heading, Icon, IconButton, Link } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export const TopNavBar = () => {
  return (
    <Box className='flex p-2!'>
      <Link
        className='flex-1'
        href='/products'>
        <Heading
          className='w-full text-center'
          size={"xl"}>
          E-commerce
        </Heading>
      </Link>

      <IconButton
        variant={"outline"}
        onClick={() => {
          alert("icon");
        }}>
        <Icon size={"md"}>
          <FaShoppingCart />
        </Icon>
      </IconButton>
    </Box>
  );
};
