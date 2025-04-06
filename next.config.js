/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com', 'images.pexels.com'], // External domains for development
    unoptimized: false, // Use Next.js image optimization for better performance
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 