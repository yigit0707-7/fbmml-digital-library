import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { bookSchema } from '@/lib/validations'
import { del } from '@vercel/blob'

function isVercelBlob(url: string | null | undefined): boolean {
  return !!url && url.includes('.public.blob.vercel-storage.com');
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
    }

    const { id } = await params;
    
    // Find book to get blob URLs
    const book = await prisma.book.findUnique({ where: { id } })
    if (!book) {
      return NextResponse.json({ error: 'Kitap bulunamadı' }, { status: 404 })
    }

    // Delete from Database first
    await prisma.book.delete({ where: { id } })

    // Delete from Blob Storage ONLY if they are Vercel Blob URLs
    const urlsToDelete = []
    if (isVercelBlob(book.pdfUrl)) urlsToDelete.push(book.pdfUrl)
    if (isVercelBlob(book.coverUrl)) urlsToDelete.push(book.coverUrl!)
    
    if (urlsToDelete.length > 0) {
       try {
         await del(urlsToDelete)
       } catch (blobError) {
         console.error('Blob delete error on delete book:', blobError)
         // We don't fail the request since DB is already deleted
       }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete book API error')
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
    }

    const { id } = await params;
    const body = await request.json()
    
    const validationResult = bookSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Geçersiz veri formatı', details: validationResult.error.format() }, { status: 400 })
    }
    
    const validatedData = validationResult.data;
    
    const book = await prisma.book.update({
      where: { id },
      data: {
        title: validatedData.title,
        author: validatedData.author,
        description: validatedData.description || null,
        publishYear: validatedData.publishYear || null,
        tags: validatedData.tags || null,
        pdfUrl: validatedData.pdfUrl,
        coverUrl: validatedData.coverUrl || null,
        ...(validatedData.categoryId ? { categoryId: validatedData.categoryId } : {})
      }
    })

    return NextResponse.json({ success: true, book })
  } catch (error) {
    console.error('Update book API error')
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
