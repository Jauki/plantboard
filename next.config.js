/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },
  fontLoaders: [
    { loader: '@next/font/google', options: { subsets: ['latin'] } },
  ],
};

module.exports = nextConfig;
