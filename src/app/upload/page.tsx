'use client'
import { useState, useEffect } from 'react'
import { Upload, FileText, Image as ImageIcon, CheckCircle, Loader2 } from 'lucide-react'
import './upload.css'

export default function UploadPage() {
  const [categories, setCategories] = useState<{id: string, name: string}[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch('/api/categories')
      .then(r => r.json())
      .then(data => setCategories(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      if (res.ok) {
        setSuccess(true)
        e.currentTarget.reset()
      } else {
        alert('Yükleme başarısız!')
      }
    } catch (err) {
      alert('Bir hata oluştu')
    }
    setLoading(false)
  }

  if (success) {
    return (
      <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '4rem', maxWidth: '500px', margin: '0 auto' }}>
          <CheckCircle size={64} style={{ color: 'var(--accent-primary)', margin: '0 auto 2rem' }} />
          <h2>Kitap Başarıyla Yüklendi!</h2>
          <p>Yeni eseriniz FBMML Kütüphanesine eklendi.</p>
          <button className="btn-primary" onClick={() => setSuccess(false)} style={{ marginTop: '2rem' }}>
            Yeni Kitap Yükle
          </button>
        </div>
      </div>
    )
  }

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
            <select name="categoryId" className="input-field" required>
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
