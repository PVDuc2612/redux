/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['1000logos.net', "znews-photo.zingcdn.me"]
  }
}

module.exports = nextConfig
