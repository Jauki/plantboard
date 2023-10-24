/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  experimental: {
    serverActions: true,

  },
};

module.exports = nextConfig;
