"use client";

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src="/brand/tbt-logo.png" alt="Turkish Brain Team logosu" width={50} height={50} style={{ objectFit: 'contain' }} />
            <h3 className="text-gradient" style={{ marginBottom: 0, fontSize: '1.2rem', lineHeight: '1.2' }}>{t.footer.labName}</h3>
          </div>
          <p>{t.footer.desc}</p>
        </div>
        
        <div className="footer-links">
          <h4>{t.footer.links}</h4>
          <ul>
            <li><Link href="/team">{t.nav.team}</Link></li>
            <li><Link href="/library">{t.nav.library}</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t.footer.labName}</p>
      </div>
    </footer>
  );
}
