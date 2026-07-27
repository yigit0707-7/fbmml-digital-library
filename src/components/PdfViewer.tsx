'use client'
import { useRef } from 'react'
import { ArrowLeft, Maximize, Download } from 'lucide-react'
import Link from 'next/link'
import './PdfViewer.css'

export default function PdfViewer({ url, bookId, bookTitle }: { url: string, bookId: string, bookTitle: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  function toggleFullScreen() {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  return (
    <div className="pdf-viewer-container" ref={containerRef}>
      <div className="pdf-toolbar glass-panel">
        <Link href={`/book/${bookId}`} className="toolbar-btn back-btn">
          <ArrowLeft size={18} /> Geri Dön
        </Link>
        
        <div className="toolbar-title">{bookTitle}</div>
        
        <div className="toolbar-controls">
          <button className="toolbar-btn" onClick={toggleFullScreen} title="Tam Ekran Modu">
            <Maximize size={18} />
          </button>
          <a href={url} download className="toolbar-btn download-btn" title="PDF'i İndir">
            <Download size={18} />
          </a>
        </div>
      </div>
      
      <div className="pdf-document-wrapper" style={{ padding: 0, backgroundColor: '#333' }}>
        <iframe 
          src={`${url}#view=FitH`} 
          className="pdf-iframe"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title={bookTitle}
        />
      </div>
    </div>
  )
}
