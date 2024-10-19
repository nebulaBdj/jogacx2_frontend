import type { Metadata } from 'next'
import './globals.css'
import { pretendard } from './fonts'

export const metadata: Metadata = {
  title: '나의 시간조각을 모아, 조각조각',
  description: '자투리 시간 앱',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>{children}</body>
    </html>
  )
}
