import Link from 'next/link'
import { BookOpen, Upload, Users, Home } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container container">
        <Link href="/" className="navbar-logo">
          <BookOpen className="logo-icon" />
          <span className="text-gradient">FBMML Kütüphane</span>
        </Link>
        
        <div className="navbar-links">
          <Link href="/" className="nav-link">
            <Home size={18} /> Ana Sayfa
          </Link>
          <Link href="/library" className="nav-link">
            <BookOpen size={18} /> Kütüphane
          </Link>
          <Link href="/team" className="nav-link">
            <Users size={18} /> Ekibimiz
          </Link>
        </div>
        
        <div className="navbar-actions">
          <Link href="/upload" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>
            <Upload size={18} /> Kitap Yükle
          </Link>
        </div>
      </div>
    </nav>
  )
}
