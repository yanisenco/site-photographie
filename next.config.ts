import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["i.ibb.co", "docs.material-tailwind.com"],
    unoptimized: true,
  },
};

export default nextConfig;
