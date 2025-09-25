import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 required for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // optional, skips lint blocking your build
  },
}

export default nextConfig
