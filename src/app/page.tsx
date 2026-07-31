import { prisma } from '@/lib/prisma'
import HomeClient from './HomeClient'

export default async function Home() {
  const books = await prisma.book.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' },
    take: 6
  })

  return <HomeClient books={books} />
}
