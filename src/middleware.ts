import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value
  const role = req.cookies.get('role')?.value
  const response = NextResponse.next()
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return response
  }

  if (pathname !== '/') {
    if (!token) {
      return NextResponse.redirect('/')
    }
  }

  if (pathname !== '/start' && role === 'MEMBER') {
    return NextResponse.redirect(new URL('/start', req.url))
  }

  return NextResponse.next()
}

export const config = {}
