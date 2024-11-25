/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://cnergy.p-e.kr/:path*',
  //     },
  //   ]
  // },

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
    NEXT_PUBLIC_KAKAO_API_KEY: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
    NEXT_PUBLIC_KAKAO_KEY: process.env.NEXT_PUBLIC_KAKAO_KEY,
    NEXT_PUBLIC_MASTER_TOKEN: process.env.NEXT_PUBLIC_MASTER_TOKEN,
    NEXT_PUBLIC_SOCIAL_LOGIN_API: process.env.NEXT_PUBLIC_SOCIAL_LOGIN_API,
  },
}

export default nextConfig
