/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1748952899,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "12da7a54cd8a43f9906aaf99f7a80e3e",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
