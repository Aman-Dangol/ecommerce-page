import { Box, IconButton, NumberInput } from "@chakra-ui/react";
import { MouseEvent, useState } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";

export const NumberAdder = () => {
  const [amount, setAmount] = useState<string>("1");

  const handleIncrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setAmount((prev) => String(Number(prev) + 1));
  };

  const handleDecrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setAmount((prev) => String(Math.max(0, Number(prev) - 1)));
  };

  return (
    <Box className='flex gap-2'>
      <IconButton
        disabled={Number(amount) <= 0}
        onClick={handleDecrease}>
        <PiMinus />
      </IconButton>

      <NumberInput.Root
        flex='1'
        value={amount}
        onValueChange={(details) => setAmount(details.value)}
        onClick={(e) => e.stopPropagation()}>
        <NumberInput.Input
          fontWeight='bold'
          textAlign='center'
        />
      </NumberInput.Root>

      <IconButton onClick={handleIncrease}>
        <PiPlus />
      </IconButton>
    </Box>
  );
};
