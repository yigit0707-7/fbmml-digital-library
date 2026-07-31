import { prisma } from '@/lib/prisma'
import LibraryClient from './LibraryClient'

export const dynamic = 'force-dynamic'

export default async function LibraryPage() {
  let books: any[] = []
  let categories: any[] = []

  let errorState = false;
  try {
    books = await prisma.book.findMany({
      include: { category: true },
      orderBy: { title: 'asc' }
    })
    
    categories = await prisma.category.findMany({
      orderBy: { name: 'asc' }
    })
  } catch (error) {
    console.error('Database query failed during build/render') // don't log sensitive error details
    errorState = true;
  }

  return <LibraryClient initialBooks={books} categories={categories} dbError={errorState} />
}
