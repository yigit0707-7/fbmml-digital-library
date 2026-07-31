import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { del } from '@vercel/blob'

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const cookieStore = await cookies()
    const adminSession = cookieStore.get('tbt-session')
    if (!adminSession || adminSession.value !== process.env.AUTH_SECRET) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
    }

    const { id } = await params;
    
    // Find book to get blob URLs
    const book = await prisma.book.findUnique({ where: { id } })
    if (!book) {
      return NextResponse.json({ error: 'Kitap bulunamadı' }, { status: 404 })
    }

    // Delete from Blob Storage
    const urlsToDelete = [book.pdfUrl]
    if (book.coverUrl) urlsToDelete.push(book.coverUrl)
    
    await del(urlsToDelete)

    // Delete from Database
    await prisma.book.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const cookieStore = await cookies()
    const adminSession = cookieStore.get('tbt-session')
    if (!adminSession || adminSession.value !== process.env.AUTH_SECRET) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
    }

    const { id } = await params;
    const body = await request.json()
    // Simplified update, just passing body
    const book = await prisma.book.update({
      where: { id },
      data: body
    })

    return NextResponse.json({ success: true, book })
  } catch (error) {
    console.error('Update error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
