/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'img.icons8.com',
      },
    ],
  },
};

module.exports = nextConfig;
