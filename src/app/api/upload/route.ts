import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies()
    const adminSession = cookieStore.get('admin_session')
    if (!adminSession || adminSession.value !== process.env.AUTH_SECRET) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
    }

    const body = await request.json()
    let { title, author, categoryId, newCategory, publishYear, tags, description, pdfUrl, coverUrl } = body

    if (!title || !author || !pdfUrl) {
      return NextResponse.json({ error: 'Eksik alanlar var' }, { status: 400 })
    }

    if (newCategory) {
      const cat = await prisma.category.upsert({
        where: { name: newCategory },
        update: {},
        create: { name: newCategory }
      })
      categoryId = cat.id
    }

    const book = await prisma.book.create({
      data: {
        title,
        author,
        description,
        publishYear,
        tags,
        pdfUrl,
        coverUrl: coverUrl || null,
        categoryId
      }
    })

    return NextResponse.json({ success: true, book })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
