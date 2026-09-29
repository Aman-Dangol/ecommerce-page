import { Box, Heading } from "@chakra-ui/react";
import { ColorModeButton } from "../color-mode";

export const TopNavBar = () => {
  return (
    <Box className='flex p-2!'>
      <Heading
        className='flex-1 text-center'
        size={"xl"}>
        E-commerce
      </Heading>
      <ColorModeButton />
    </Box>
  );
};
