import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dataFetching/css',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
