import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const getSecret = () => {
  const secret = process.env.AUTH_SECRET
  if (!secret) {
    throw new Error('AUTH_SECRET environment variable is not defined')
  }
  return new TextEncoder().encode(secret)
}

export async function createToken(payload: { role: string }) {
  const alg = 'HS256'
  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(getSecret())
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload
  } catch (error) {
    return null
  }
}

export async function setAuthCookie() {
  const token = await createToken({ role: 'admin' })
  const cookieStore = await cookies()
  cookieStore.set({
    name: 'admin_session',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 2 // 2 hours
  })
}

export async function removeAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.set({
    name: 'admin_session',
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })
}

export async function getSession() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('admin_session')?.value
  if (!sessionCookie) return null
  return await verifyToken(sessionCookie)
}
