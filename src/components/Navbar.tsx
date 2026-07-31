"use client";

import Link from 'next/link'
import { BookOpen, Upload, Users, Home, Sun, Moon, Monitor, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container container">
        <Link href="/" className="navbar-logo">
          <BookOpen className="logo-icon" />
          <span className="text-gradient">FBMML</span>
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

          <Link href="/upload" className="btn-primary upload-btn">
            <Upload size={18} /> {t.nav.upload}
          </Link>
        </div>
      </div>
    </nav>
  )
}
