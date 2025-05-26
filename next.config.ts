import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Code Splitting : divise les fichiers en chunks plus petits
    config.optimization.splitChunks = {
      chunks: "all", // Divise tous les fichiers (CSS, JS, etc.)
      minSize: 20000, // Taille minimale d'un chunk (20 KB)
      maxSize: 200000, // Taille maximale d'un chunk (200 KB)
    };

    // Suppression des modules inutilisés sur le serveur
    if (isServer) {
      config.externals.push("react-dom/server");
    }
    
    // Retourne la configuration Webpack modifiée
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap", // Route vers l'API qui génère le sitemap
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Applique à toutes les routes
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

export default nextConfig;
