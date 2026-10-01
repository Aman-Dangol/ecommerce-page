import { Box, Skeleton } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box className='grid h-[92vh] grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton
          key={index}
          height={"120"}
        />
      ))}
    </Box>
  );
}
