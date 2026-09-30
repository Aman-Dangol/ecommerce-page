import { Text } from "@chakra-ui/react";

export const Rating = ({ rate, count }: { rate: number; count: number }) => {
  return (
    <Text className='text-text-disabled inline-block w-fit rounded-xl text-xs font-semibold tracking-wider capitalize'>
      ⭐ {rate} ({count})
    </Text>
  );
};
