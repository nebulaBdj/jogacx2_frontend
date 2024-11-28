/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async rewrites() {
    return [
      {
        source: '/image/:path*',
        destination:
          'https://kr.object.ncloudstorage.com/cnergy-bucket/front_image/:path*',
      },
    ]
  },
}

export default nextConfig
