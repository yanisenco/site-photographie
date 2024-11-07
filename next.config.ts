import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "docs.material-tailwind.com"],
    unoptimized: true,
  },
};

export default nextConfig;
