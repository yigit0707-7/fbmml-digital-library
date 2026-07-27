'use client'

import dynamic from 'next/dynamic'

const PdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false })

export default function PdfViewerWrapper({ url, bookId, bookTitle }: { url: string, bookId: string, bookTitle: string }) {
  return <PdfViewer url={url} bookId={bookId} bookTitle={bookTitle} />
}
