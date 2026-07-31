import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import BookDetailClient from './BookDetailClient'

export default async function BookDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await prisma.book.findUnique({
    where: { id },
    include: { category: true }
  })

  if (!book) return notFound()

  return <BookDetailClient book={book} />
}
