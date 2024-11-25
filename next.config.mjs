/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'https://cnergy.p-e.kr/v1/:path*',
      },
      {
        source: '/image/:path*',
        destination:
          'https://kr.object.ncloudstorage.com/cnergy-bucket/front_image/:path*',
      },
    ]
  },
}

export default nextConfig
