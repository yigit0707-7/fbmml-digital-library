import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Book, ChevronRight } from 'lucide-react'
import './home.css'

export default async function Home() {
  const books = await prisma.book.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' },
    take: 6
  })

  return (
    <div className="home-container container">
      <section className="hero-section">
        <h1 className="animate-fade-in">
          <span className="text-gradient">FBMML</span> Dijital Kütüphanesi
        </h1>
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Araştırmalarınız için ihtiyacınız olan tüm akademik kaynaklar tek bir yerde.
        </p>
        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Link href="/library" className="btn-primary">
            Kütüphaneyi Keşfet <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      <section className="recent-books">
        <div className="section-header">
          <h2>Son Eklenen Kitaplar</h2>
          <Link href="/library" className="view-all-link">Tümünü Gör</Link>
        </div>
        
        <div className="books-grid">
          {books.map(book => (
            <div key={book.id} className="book-card glass-panel">
              <div className="book-cover">
                {book.coverUrl ? (
                  <img src={book.coverUrl} alt={book.title} />
                ) : (
                  <div className="default-cover">
                    <Book size={48} className="default-cover-icon" />
                    <span>FBMML</span>
                  </div>
                )}
              </div>
              <div className="book-info">
                <span className="book-category">{book.category.name}</span>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <Link href={`/book/${book.id}`} className="btn-secondary read-btn">
                  Kitabı İncele
                </Link>
              </div>
            </div>
          ))}
          {books.length === 0 && (
            <div className="empty-state glass-panel">
              <p>Henüz sisteme kitap yüklenmemiş.</p>
              <Link href="/upload" className="btn-primary" style={{ marginTop: '1rem' }}>
                İlk Kitabı Yükle
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
