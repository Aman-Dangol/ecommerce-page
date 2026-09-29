"use client";

import { ChakraProvider } from "@chakra-ui/react";
import {
  ColorModeProvider,
  system,
  type ColorModeProviderProps,
} from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
