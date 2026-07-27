import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    const title = formData.get('title') as string
    const author = formData.get('author') as string
    let categoryId = formData.get('categoryId') as string
    const newCategory = formData.get('newCategory') as string
    const publishYear = formData.get('publishYear') as string
    const tags = formData.get('tags') as string
    const description = formData.get('description') as string
    
    const pdfFile = formData.get('pdfFile') as File | null
    const coverFile = formData.get('coverFile') as File | null

    if (!title || !author || !pdfFile) {
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

    const timestamp = Date.now()
    let pdfUrl = ''
    if (pdfFile) {
      const bytes = await pdfFile.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const filename = `${timestamp}-${pdfFile.name.replace(/\\s+/g, '_')}`
      const filepath = path.join(process.cwd(), 'public', 'uploads', filename)
      await writeFile(filepath, buffer)
      pdfUrl = `/uploads/${filename}`
    }

    let coverUrl = ''
    if (coverFile && coverFile.size > 0) {
      const bytes = await coverFile.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const filename = `${timestamp}-cover-${coverFile.name.replace(/\\s+/g, '_')}`
      const filepath = path.join(process.cwd(), 'public', 'uploads', filename)
      await writeFile(filepath, buffer)
      coverUrl = `/uploads/${filename}`
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
