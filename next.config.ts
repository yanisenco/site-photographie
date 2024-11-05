import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["images.unsplash.com", "docs.material-tailwind.com"],
    unoptimized: true,
  },
};

export default nextConfig;
