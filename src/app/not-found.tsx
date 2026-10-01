"use client"; // Error boundaries must be Client Components

import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <Box
      padding={"4"}
      spaceY={"4"}>
      <Heading
        size={"lg"}
        fontWeight={"bolder"}>
        404 Not Found!
      </Heading>
      <Button
        background={"red.600"}
        onClick={() => router.push("/products")}>
        Back to products page
      </Button>
    </Box>
  );
}
