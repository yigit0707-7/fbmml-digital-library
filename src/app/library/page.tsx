import { prisma } from '@/lib/prisma'
import LibraryClient from './LibraryClient'

export default async function LibraryPage() {
  const books = await prisma.book.findMany({
    include: { category: true },
    orderBy: { title: 'asc' }
  })
  
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' }
  })

  return <LibraryClient initialBooks={books} categories={categories} />
}
