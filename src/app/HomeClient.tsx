"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Book, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import './home.css'

export default function HomeClient({ books }: { books: any[] }) {
  const { t } = useLanguage();

  return (
    <div className="home-container container">
      <section className="hero-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="animate-fade-in" style={{ marginBottom: '2rem' }}>
          <img src="/brand/tbt-logo.png" alt="TBT Logo" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
        </div>
        <h2 className="animate-fade-in" style={{ animationDelay: '0.1s', fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '0' }}>
          {t.home.title}
        </h2>
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t.home.subtitle}
        </p>
        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link href="/library" className="btn-primary">
            {t.home.exploreBtn} <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      <section className="recent-books">
        <div className="section-header">
          <h2>{t.nav.library}</h2>
          <Link href="/library" className="view-all-link">{t.nav.library}</Link>
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
                    <span>{t.bookDetail.noCover}</span>
                  </div>
                )}
              </div>
              <div className="book-info">
                <span className="book-category">{book.category.name}</span>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <Link href={`/book/${book.id}`} className="btn-secondary read-btn">
                  {t.library.readBtn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
