/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  trailingSlash: true,
  enableScript: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.cblu.io', // update this with your image domain
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
