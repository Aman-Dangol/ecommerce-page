"use client";

import { useAuthstore } from "@/utils/store/auth.store";
import { Box, Heading, IconButton, Link } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

export const TopNavBar = () => {
  const { isAuthenticated, removeData } = useAuthstore();
  const router = useRouter();
  return (
    <Box className='flex gap-1 p-2!'>
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
          router.push("/my-cart");
        }}>
        <FaShoppingCart />
      </IconButton>

      {isAuthenticated && (
        <IconButton
          color={"red.600"}
          variant={"outline"}
          onClick={() => {
            removeData();
            router.replace("/login");
          }}>
          <FaSignOutAlt />
        </IconButton>
      )}
    </Box>
  );
};
