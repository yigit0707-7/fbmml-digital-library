import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isUploadRoute = request.nextUrl.pathname.startsWith('/upload') || request.nextUrl.pathname.startsWith('/api/upload');
  const isBooksMutation = request.nextUrl.pathname.startsWith('/api/books') && request.method !== 'GET';

  if (isUploadRoute || isBooksMutation) {
    const adminSession = request.cookies.get('tbt-session')
    
    if (!adminSession || adminSession.value !== process.env.AUTH_SECRET) {
      if (request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/upload/:path*',
    '/api/upload/:path*',
    '/api/books/:path*'
  ]
}
