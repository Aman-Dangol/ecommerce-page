import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [new URL("https://cdn.dummyjson.com/product-images/**")],
  },
};

export default nextConfig;
