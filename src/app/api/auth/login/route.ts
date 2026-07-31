import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email ve şifre zorunludur' }, { status: 400 })
    }

    if (email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: 'Geçersiz bilgiler' }, { status: 401 })
    }

    const isValid = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH || '')
    if (!isValid) {
      return NextResponse.json({ error: 'Geçersiz bilgiler' }, { status: 401 })
    }

    const cookieStore = await cookies()
    cookieStore.set('admin_session', process.env.AUTH_SECRET as string, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
