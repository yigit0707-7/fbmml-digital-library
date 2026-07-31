'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Book } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import './library.css'

type Book = {
  id: string
  title: string
  author: string
  coverUrl: string | null
  category: { id: string, name: string }
  createdAt: Date
}

type Category = {
  id: string
  name: string
}

export default function LibraryClient({ initialBooks, categories, dbError = false }: { initialBooks: Book[], categories: Category[], dbError?: boolean }) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'title' | 'newest'>('title')
  const { t } = useLanguage()

  if (dbError) {
    return (
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="library-header text-center">
          <h1>{t.library.title}</h1>
        </div>
        <div className="empty-state glass-panel" style={{ color: 'var(--danger)', marginTop: '2rem' }}>
          <p>Sistem şu anda kütüphane verilerine erişemiyor. Lütfen daha sonra tekrar deneyin.</p>
        </div>
      </div>
    )
  }

  const filteredBooks = initialBooks
    .filter(book => selectedCategory === 'all' || book.category.id === selectedCategory)
    .filter(book => book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      return a.title.localeCompare(b.title)
    })

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="library-header text-center">
        <h1>{t.library.title}</h1>
      </div>

      <div className="library-filters glass-panel animate-fade-in">
        <div className="search-box">
          <Search size={20} className="search-icon" aria-hidden="true" />
          <input 
            type="text" 
            placeholder={t.library.searchPlaceholder} 
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label={t.library.searchPlaceholder}
          />
        </div>
        
        <div className="filter-controls">
          <select 
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label={t.library.allCategories}
          >
            <option value="all">{t.library.allCategories}</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          
          <select 
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'title' | 'newest')}
            aria-label={t.library.sortAZ}
          >
            <option value="title">{t.library.sortAZ}</option>
            <option value="newest">{t.library.sortNewest}</option>
          </select>
        </div>
      </div>

      <div className="books-grid animate-fade-in" style={{ animationDelay: '0.1s', marginTop: '3rem' }}>
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card glass-panel">
            <div className="book-cover">
              {book.coverUrl ? (
                <Image src={book.coverUrl} alt={book.title} width={300} height={400} className="next-image-cover" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
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
      
      {filteredBooks.length === 0 && (
        <div className="empty-state glass-panel">
          <p>{t.library.noResults}</p>
        </div>
      )}
    </div>
  )
}
