import type { Metadata } from 'next'
import { StrictPropsWithChildren } from '@/types'
import './start.css'

export const metadata: Metadata = {
  title: '조각조각 - 회원가입',
  description: '조각조각 - 회원가입 : 사용자 정보 입력',
}
export default function StartLayout({ children }: StrictPropsWithChildren) {
  return <main className="overflow-hidden w-full">{children}</main>
}
