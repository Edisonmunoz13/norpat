/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

module.exports = {
  publicRuntimeConfig: {
    publicPath: process.env.PUBLIC_PATH,
  },
};
