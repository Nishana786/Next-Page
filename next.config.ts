// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // ✅ DummyJSON Images Allow
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ Unsplash Images Allow
      },
    ],
  },
  
};

module.exports = nextConfig;
