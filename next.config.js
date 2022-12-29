/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["blog.epicglobal.co.in"],
  },
};

module.exports = nextConfig;
