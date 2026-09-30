import { Box, Flex, NumberInput, Text } from "@chakra-ui/react";
import { useState } from "react";

export type PriceRangeValue = [number, number];

export interface PriceRangeProps {
  min?: number;
  max?: number;
  value?: PriceRangeValue;
  onChange?: (value: PriceRangeValue) => void;
}

export default function PriceRangePicker({
  min = 0,
  max = 0,
  value,
  onChange,
}: PriceRangeProps) {
  const [internal, setInternal] = useState<PriceRangeValue>([min, max]);

  const [low, high] = value ?? internal;

  const update = (next: PriceRangeValue) => {
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };

  // Empty/invalid input falls back to the bound instead of 0
  const parse = (n: number, fallback: number) =>
    Number.isNaN(n) ? fallback : n;

  return (
    <Box
      w='full'
      className='border-bg-secondary h-8 rounded-xl border border-dashed p-1'
      maxW='360px'>
      <Flex
        gap={3}

        justify='center'
        align='center'>
        <NumberInput.Root
          min={min}
          size={"xs"}
          max={high}
          value={low === min ? "" : String(low ?? "")}
          onValueChange={(d) => update([parse(d.valueAsNumber, min), high])}>
          <NumberInput.Input
            className='h-6!'
            placeholder='Min Price'
            rounded='lg'
          />
        </NumberInput.Root>

        <Text>-</Text>

        <NumberInput.Root
          size='xs'
          min={low}
          max={max}
          value={high === max ? "" : String(high ?? "")}
          onValueChange={(d) => update([low, parse(d.valueAsNumber, 0)])}>
          <NumberInput.Input
            className='h-6!'

            placeholder='Max Price'
            rounded='lg'
          />
        </NumberInput.Root>
      </Flex>
    </Box>
  );
}
