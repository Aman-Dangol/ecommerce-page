"use client";

import { ListCollection, Portal, Select } from "@chakra-ui/react";

interface Props extends Omit<
  React.ComponentProps<typeof Select.Root>,
  "collection"
> {
  list: ListCollection<{ label: string; value: string }>;
  placeHolder?: string;
}

export const SelectField = ({
  list,
  placeHolder = "Select",
  ...rootProps
}: Props) => {
  return (
    <Select.Root
      collection={list}
      size='xs'
      rounded={"full"}

      {...rootProps}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger rounded={"xl"}>
          <Select.ValueText
            placeholder={placeHolder}
            className='capitalize'
          />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {list.items.map((item) => (
              <Select.Item
                className='capitalize'
                item={item.value}
                key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
