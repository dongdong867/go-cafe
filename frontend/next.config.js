const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: ["app-build-manifest.json"],
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/gocafe-tw.appspot.com/**",
      },
    ],
  },
});

module.exports = nextConfig;
