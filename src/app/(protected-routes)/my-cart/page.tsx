"use client";

import { CartItem } from "@/app/(protected-routes)/my-cart/components/cart-item";
import { useCartStore } from "@/utils/store/cart.store";
import { Flex, For } from "@chakra-ui/react";

export default function MyCartPage() {
  const { products } = useCartStore();
  return (
    <Flex
      flexDirection={"column"}
      gap={"2"}>
      <For each={products}>
        {(item) => (
          <CartItem
            product={item}
            key={item.id}
          />
        )}
      </For>
    </Flex>
  );
}
