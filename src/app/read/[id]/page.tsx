import { prisma } from '@/lib/prisma'
import dynamic from 'next/dynamic'
import PdfViewerWrapper from '@/components/PdfViewerWrapper'
import { notFound } from 'next/navigation'

export default async function ReadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await prisma.book.findUnique({
    where: { id }
  })

  if (!book) return notFound()

  return (
    <PdfViewerWrapper url={book.pdfUrl} bookId={book.id} bookTitle={book.title} />
  )
}
