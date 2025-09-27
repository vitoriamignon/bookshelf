/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com"], // antigo
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      // outros domínios
    ],
  },
};

module.exports = nextConfig;
