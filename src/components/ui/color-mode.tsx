import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  preflight: false,
  cssVarsRoot: ":where(:root, :host)",
  cssVarsPrefix: "ck",
  globalCss: {
    body: { background: "primary" },
  },

  theme: {
    tokens: {
      colors: {
        primary: { value: "var(--bg)" },
        secondary: { value: "var(--bg-secondary)" },
        accent: { value: "var(--accent-color)" },
      },
      fonts: {
        body: { value: "var(--font-geist-sans)" },
        accent: { value: "monospace" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
