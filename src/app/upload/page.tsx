'use client'
import { useState, useEffect } from 'react'
import { Upload, FileText, Image as ImageIcon, CheckCircle, Loader2 } from 'lucide-react'
import { upload } from '@vercel/blob/client'
import './upload.css'

export default function UploadPage() {
  const [categories, setCategories] = useState<{id: string, name: string}[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if user is logged in
    fetch('/api/auth/check')
      .then(res => res.json())
      .then(data => setIsAdmin(data.isAdmin))
      .catch(() => setIsAdmin(false))

    fetch('/api/categories')
      .then(r => r.json())
      .then(data => setCategories(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    
    const title = formData.get('title') as string
    const author = formData.get('author') as string
    const categoryId = formData.get('categoryId') as string
    const newCategory = formData.get('newCategory') as string
    const publishYear = formData.get('publishYear') as string
    const tags = formData.get('tags') as string
    const description = formData.get('description') as string
    const pdfFile = formData.get('pdfFile') as File | null
    const coverFile = formData.get('coverFile') as File | null

    try {
      if (!pdfFile || pdfFile.size === 0) {
        throw new Error('PDF dosyası zorunludur.')
      }

      // Upload PDF to Vercel Blob
      const pdfBlob = await upload(pdfFile.name, pdfFile, {
        access: 'public',
        handleUploadUrl: '/api/upload/token',
      })

      let coverUrl = null
      if (coverFile && coverFile.size > 0) {
        // Upload Cover to Vercel Blob
        const coverBlob = await upload(coverFile.name, coverFile, {
          access: 'public',
          handleUploadUrl: '/api/upload/token',
        })
        coverUrl = coverBlob.url
      }

      // Save metadata to DB
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          author,
          categoryId,
          newCategory,
          publishYear,
          tags,
          description,
          pdfUrl: pdfBlob.url,
          coverUrl
        })
      })

      if (res.ok) {
        setSuccess(true)
        e.currentTarget.reset()
      } else {
        const errData = await res.json()
        alert('Yükleme başarısız! Hata: ' + (errData.error || 'Bilinmiyor'))
      }
    } catch (err: any) {
      console.error(err)
      alert('Bir hata oluştu: ' + err.message)
    }
    setLoading(false)
  }

  if (success) {
    return (
      <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '4rem', maxWidth: '500px', margin: '0 auto' }}>
          <CheckCircle size={64} style={{ color: 'var(--accent-primary)', margin: '0 auto 2rem' }} />
          <h2>Kitap Başarıyla Yüklendi!</h2>
          <p>Yeni eseriniz TBT Kütüphanesine eklendi.</p>
          <button className="btn-primary" onClick={() => setSuccess(false)} style={{ marginTop: '2rem' }}>
            Yeni Kitap Yükle
          </button>
        </div>
      </div>
    )
  }

  if (mounted && !isAdmin) {
    return (
      <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '4rem', maxWidth: '500px', margin: '0 auto' }}>
          <h2>Erişim Engellendi</h2>
          <p>Bu sayfa yalnızca yönetici erişimine açıktır.</p>
        </div>
      </div>
    )
  }

  if (!mounted) return null;

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="upload-header text-center">
        <h1>Yeni Kitap Yükle</h1>
        <p className="text-secondary">Kütüphaneye yeni bir pdf kaynağı ekleyin</p>
      </div>

      <form className="upload-form glass-panel" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="input-label">Kitap Adı</label>
          <input type="text" name="title" className="input-field" required placeholder="Örn: Derin Öğrenme Temelleri" />
        </div>
        
        <div className="form-group">
          <label className="input-label">Yazar Adı</label>
          <input type="text" name="author" className="input-field" required placeholder="Örn: Prof. Dr. Şengül Doğan" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="input-label">Kategori</label>
            <select name="categoryId" className="input-field">
              <option value="">Kategori Seçin...</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          
          <div className="form-group">
            <label className="input-label">Yeni Kategori Ekle (Opsiyonel)</label>
            <input type="text" name="newCategory" className="input-field" placeholder="Listede yoksa buraya yazın" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="input-label">Yayın Yılı</label>
            <input type="text" name="publishYear" className="input-field" placeholder="Örn: 2024" />
          </div>
          <div className="form-group">
            <label className="input-label">Etiketler</label>
            <input type="text" name="tags" className="input-field" placeholder="Yapay zeka, makine öğrenmesi..." />
          </div>
        </div>

        <div className="form-group">
          <label className="input-label">Kısa Açıklama</label>
          <textarea name="description" className="input-field" rows={4} placeholder="Kitap hakkında kısa bir özet..." />
        </div>

        <div className="file-upload-grid">
          <div className="file-upload-box">
            <FileText size={32} className="upload-icon" />
            <label className="input-label" style={{ marginTop: '1rem' }}>PDF Dosyası (Zorunlu)</label>
            <input type="file" name="pdfFile" accept="application/pdf" required />
          </div>
          
          <div className="file-upload-box">
            <ImageIcon size={32} className="upload-icon" />
            <label className="input-label" style={{ marginTop: '1rem' }}>Kapak Resmi (Opsiyonel)</label>
            <input type="file" name="coverFile" accept="image/*" />
          </div>
        </div>

        <button type="submit" className="btn-primary submit-btn" disabled={loading}>
          {loading ? <Loader2 className="spinner" size={20} /> : <Upload size={20} />}
          {loading ? 'Yükleniyor...' : 'Sisteme Ekle'}
        </button>
      </form>
    </div>
  )
}
