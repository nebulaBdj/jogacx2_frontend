/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'https://cnergy.p-e.kr/v1/:path*',
      },
    ]
  },
}

export default nextConfig
