import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export async function GET() {
  const session = await getSession()
  
  if (session && session.role === 'admin') {
    return NextResponse.json({ isAdmin: true })
  }
  
  return NextResponse.json({ isAdmin: false })
}
