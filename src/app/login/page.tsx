'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Mail, Loader2, LogOut } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (res.ok) {
        // Force refresh to update navbar state
        window.location.href = '/'
      } else {
        const data = await res.json()
        setError(data.error || 'Giriş başarısız')
      }
    } catch (err) {
      setError('Bir hata oluştu')
    }
    setLoading(false)
  }

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Lock size={48} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
          <h2>Yönetici Girişi</h2>
          <p className="text-secondary">Lütfen admin bilgilerinizi girin</p>
        </div>

        {error && <div style={{ background: '#ff333333', color: '#ff4444', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label className="input-label" style={{ display: 'block', marginBottom: '0.5rem' }}>E-Posta</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
                placeholder="admin@tbt.org"
              />
            </div>
          </div>
          
          <div>
            <label className="input-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Şifre</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" disabled={loading} style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'var(--accent-primary)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            {loading ? <Loader2 className="spinner" size={20} /> : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  )
}
