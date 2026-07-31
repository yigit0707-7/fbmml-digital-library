import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { setAuthCookie } from '@/lib/auth'

// In-memory rate limiting (Note: This does not guarantee perfect rate limiting across distributed Vercel instances.
// It relies on the local memory of a single container, which is sufficient for basic protection but not 
// a substitute for Redis or a dedicated rate-limiting service.)
const rateLimitCache = new Map<string, { count: number, timestamp: number }>()

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const MAX_ATTEMPTS = 5

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitCache.get(ip)

  if (record) {
    if (now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
      // Reset window
      rateLimitCache.set(ip, { count: 1, timestamp: now })
      return true
    } else {
      if (record.count >= MAX_ATTEMPTS) {
        return false // Rate limited
      }
      record.count += 1
      return true
    }
  } else {
    rateLimitCache.set(ip, { count: 1, timestamp: now })
    return true
  }
}

export async function POST(request: Request) {
  try {
    // Basic IP extraction (may vary by proxy/header)
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Çok fazla giriş denemesi. Lütfen daha sonra tekrar deneyin.' }, { status: 429 })
    }

    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email veya parola hatalı' }, { status: 400 })
    }

    if (email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: 'Email veya parola hatalı' }, { status: 401 })
    }

    const isValid = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH || '')
    if (!isValid) {
      return NextResponse.json({ error: 'Email veya parola hatalı' }, { status: 401 })
    }

    // Auth Cookie created using Jose JWT
    await setAuthCookie()

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
