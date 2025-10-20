import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'swiper']
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
