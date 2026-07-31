import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = await cookies()
  const adminSession = cookieStore.get('tbt-session')
  
  if (adminSession && adminSession.value === process.env.AUTH_SECRET) {
    return NextResponse.json({ isAdmin: true })
  }
  
  return NextResponse.json({ isAdmin: false })
}
