import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Folder } from 'lucide-react'

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { books: true } } },
    orderBy: { name: 'asc' }
  })

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 className="text-gradient">Kategoriler</h1>
        <p className="text-secondary">Kütüphanedeki eserleri konularına göre keşfedin.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {categories.map(category => (
          <Link href={`/library?category=${category.id}`} key={category.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'var(--transition)' }}>
            <Folder size={48} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ margin: 0 }}>{category.name}</h3>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.875rem' }}>
              {category._count.books} Kitap
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
