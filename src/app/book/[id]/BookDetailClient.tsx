"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Book, Calendar, Tag, ArrowLeft, Play, Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import './book-detail.css'

export default function BookDetailClient({ book }: { book: any }) {
  const { t } = useLanguage();

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Link href="/library" className="back-link">
        <ArrowLeft size={16} /> {t.bookDetail.backToLibrary}
      </Link>
      
      <div className="book-detail-grid">
        <div className="book-cover-container">
          {book.coverUrl ? (
            <Image
              src={book.coverUrl}
              alt={`${book.title} kitap kapağı`}
              width={380}
              height={540}
              className="bookCover"
            />
          ) : (
            <div className="default-cover">
              <Book size={64} className="default-cover-icon" />
              <span>{t.bookDetail.noCover}</span>
            </div>
          )}
        </div>
        
        <div className="book-detail-info">
          <div className="category-badge">{book.category.name}</div>
          <h1 className="book-detail-title">{book.title}</h1>
          <h2 className="book-detail-author">{book.author}</h2>
          
          <div className="book-meta">
            {book.publishYear && (
              <div className="meta-item">
                <Calendar size={18} /> {book.publishYear}
              </div>
            )}
            {book.tags && (
              <div className="meta-item">
                <Tag size={18} /> {book.tags}
              </div>
            )}
          </div>
          
          <div className="book-description">
            <h3>{t.bookDetail.summary}</h3>
            <p>{book.description || t.bookDetail.noSummary}</p>
          </div>
          
          <div className="action-buttons-container">
            <Link href={`/read/${book.id}`} className="readButton">
              <Play size={24} />
              {t.bookDetail.readBtn}
            </Link>
            
            {book.pdfUrl && (
              <a href={book.pdfUrl} download className="downloadButton">
                <Download size={24} />
                {t.bookDetail.downloadPdf}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
