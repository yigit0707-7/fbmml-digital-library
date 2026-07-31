import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { bookSchema } from '@/lib/validations'
import { del } from '@vercel/blob'

function isVercelBlob(url: string | null | undefined): boolean {
  return !!url && url.includes('.public.blob.vercel-storage.com');
}

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
    }

    const body = await request.json()
    const validationResult = bookSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Geçersiz veri formatı', details: validationResult.error.format() }, { status: 400 })
    }
    
    const validatedData = validationResult.data;
    let categoryId = validatedData.categoryId;

    if (validatedData.newCategory) {
      const cat = await prisma.category.upsert({
        where: { name: validatedData.newCategory },
        update: {},
        create: { name: validatedData.newCategory }
      })
      categoryId = cat.id
    }

    if (!categoryId) {
       return NextResponse.json({ error: 'Kategori belirtilmedi' }, { status: 400 })
    }

    try {
      const book = await prisma.book.create({
        data: {
          title: validatedData.title,
          author: validatedData.author,
          description: validatedData.description || null,
          publishYear: validatedData.publishYear || null,
          tags: validatedData.tags || null,
          pdfUrl: validatedData.pdfUrl,
          coverUrl: validatedData.coverUrl || null,
          categoryId: categoryId
        }
      })
      return NextResponse.json({ success: true, book })
    } catch (dbError) {
      // Rollback uploaded files if DB insert fails
      const urlsToDelete = [];
      if (isVercelBlob(validatedData.pdfUrl)) urlsToDelete.push(validatedData.pdfUrl);
      if (isVercelBlob(validatedData.coverUrl)) urlsToDelete.push(validatedData.coverUrl!);
      
      if (urlsToDelete.length > 0) {
        try {
          await del(urlsToDelete);
        } catch(delError) {
          console.error("Blob cleanup failed:", delError);
        }
      }
      throw dbError; // re-throw to be caught by outer catch block
    }

  } catch (error) {
    console.error('Upload API error')
    return NextResponse.json({ error: 'Sunucu hatası. İşlem tamamlanamadı.' }, { status: 500 })
  }
}
