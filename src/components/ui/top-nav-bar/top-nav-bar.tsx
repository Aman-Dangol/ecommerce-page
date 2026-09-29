"use client";

import { Box, Heading, Icon, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export const TopNavBar = () => {
  return (
    <Box className='flex p-2!'>
      <Heading
        className='flex-1 text-center'
        size={"xl"}>
        E-commerce
      </Heading>

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
