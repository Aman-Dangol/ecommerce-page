import { Text } from "@chakra-ui/react";

interface Props {
  category: string;
}
export const CategoryTag = ({ category }: Props) => {
  return (
    <Text className='bg-accent-color/15 text-accent-color inline-block w-fit rounded-xl p-1 text-xs font-semibold tracking-wider capitalize'>
      {category.toUpperCase()}
    </Text>
  );
};
