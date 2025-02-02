/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://goodbot-api.vercel.app/:path*', // Proxy to API
      },
    ];
  },
};

module.exports = nextConfig;
