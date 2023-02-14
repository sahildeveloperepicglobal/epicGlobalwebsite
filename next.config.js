/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["blog.epicglobal.co.in", "www.gstatic.com"],
  },
};

module.exports = nextConfig;
