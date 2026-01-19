import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!config.optimization) {
      config.optimization = {};
    }

    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 20_000,
      maxSize: 200_000,
    };

    if (isServer && Array.isArray(config.externals)) {
      config.externals.push("react-dom/server");
    }

    return config;
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/api/sitemap" },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default withPayload(nextConfig);