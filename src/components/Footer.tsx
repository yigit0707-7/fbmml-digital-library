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
          <h3 className="text-gradient">{t.footer.labName}</h3>
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
