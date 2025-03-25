/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // 确保 Sharp 可以在 Vercel 上正常工作
  experimental: {
    serverComponentsExternalPackages: ['sharp'],
  },
};

module.exports = nextConfig; 
