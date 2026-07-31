"use client";

import Link from 'next/link'
import { BookOpen, Upload, Users, Home, Sun, Moon, Monitor, Globe, LogOut } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import './Navbar.css'

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    fetch('/api/auth/check')
      .then(res => res.json())
      .then(data => setIsAdmin(data.isAdmin))
      .catch(() => setIsAdmin(false));
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAdmin(false);
    window.location.href = '/';
  }

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container container">
        <Link href="/" className="navbar-brand">
          <div className="brand-logo-container">
            <Image 
              src="/brand/logoyeni.png" 
              alt="Fırat Brain Mind Machine Lab logosu" 
              width={70} 
              height={70}
              className="brand-logo"
            />
          </div>
          <div className="brand-text">
            <span className="brand-title">Fırat Brain Mind Machine Lab</span>
            <span className="brand-subtitle">Dijital Kütüphane</span>
          </div>
        </Link>
        
        <div className="navbar-links">
          <Link href="/" className="nav-link">
            <Home size={18} /> {t.nav.home}
          </Link>
          <Link href="/library" className="nav-link">
            <BookOpen size={18} /> {t.nav.library}
          </Link>
          <Link href="/team" className="nav-link">
            <Users size={18} /> {t.nav.team}
          </Link>
        </div>
        
        <div className="navbar-actions">
          {mounted && (
            <div className="theme-toggle">
              <button onClick={() => setTheme('light')} className={`toggle-btn ${theme === 'light' ? 'active' : ''}`} title={t.theme.light}>
                <Sun size={16} />
              </button>
              <button onClick={() => setTheme('dark')} className={`toggle-btn ${theme === 'dark' ? 'active' : ''}`} title={t.theme.dark}>
                <Moon size={16} />
              </button>
              <button onClick={() => setTheme('system')} className={`toggle-btn ${theme === 'system' ? 'active' : ''}`} title={t.theme.system}>
                <Monitor size={16} />
              </button>
            </div>
          )}

          <div className="lang-toggle">
            <button 
              onClick={() => setLanguage('tr')} 
              className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
            >
              TR
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
          </div>

          {mounted && isAdmin && (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link href="/upload" className="btn-primary upload-btn">
                <Upload size={18} /> {t.nav.upload}
              </Link>
              <button onClick={handleLogout} className="btn-secondary" title="Çıkış Yap" style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', cursor: 'pointer' }}>
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
