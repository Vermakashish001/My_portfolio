/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'picsum.photos'],
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  assetPrefix: '',
}

module.exports = nextConfig
