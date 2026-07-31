"use client";

import { useLanguage } from '@/context/LanguageContext';
import { teamData, TeamMember } from '@/data/team';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen, GraduationCap, MapPin, Link as LinkIcon, ExternalLink } from 'lucide-react';
import React, { use } from 'react';
import './profile.css';

export default function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { language, t } = useLanguage();
  const { slug } = use(params);

  const member = teamData.find(m => m.slug === slug);
  if (!member) return notFound();

  const getLocalizedField = (obj: any, field: string) => {
    return obj[`${field}${language === 'tr' ? 'Tr' : 'En'}`];
  };

  return (
    <div className="profile-page container animate-fade-in">
      <Link href="/team" className="back-link">
        <ArrowLeft size={16} /> {t.nav.team}
      </Link>

      <div className="profile-header glass-panel">
        <div className="profile-photo-wrapper">
          <Image src={member.photo} alt={`${member.fullName} profil fotoğrafı`} width={250} height={250} className="profile-photo" />
        </div>
        <div className="profile-header-info">
          <h1 className="profile-name">{member.academicTitle} {member.fullName}</h1>
          <div className="profile-role">{getLocalizedField(member, 'labRole')}</div>
          <div className="profile-institution">
            <MapPin size={18} /> {getLocalizedField(member, 'institution')} • {getLocalizedField(member, 'department')}
          </div>
          <div className="profile-links">
            {member.links.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="profile-link-btn">
                <LinkIcon size={16} /> {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-content grid-layout">
        <div className="main-col">
          <section className="profile-section glass-panel">
            <h2>{t.team.profile.biography}</h2>
            <p className="profile-bio">{getLocalizedField(member, 'bio')}</p>
          </section>

          <section className="profile-section glass-panel">
            <h2><BookOpen size={20} className="section-icon" /> {t.team.profile.selectedPubs}</h2>
            <div className="pubs-list">
              {member.selectedPublications.map((pub, idx) => (
                <div key={idx} className="pub-list-item">
                  <span className="pub-tag">{pub.tag}</span>
                  <h4 className="pub-title">{pub.title}</h4>
                  <p className="pub-authors">{pub.authors}</p>
                  <div className="pub-meta-bottom">
                    <span>{pub.journal}, {pub.year}</span>
                    {pub.url && (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="pub-url">
                        <ExternalLink size={14} /> {t.team.viewPub}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="sidebar-col">
          <section className="profile-section glass-panel">
            <h2><GraduationCap size={20} className="section-icon" /> {t.team.profile.education}</h2>
            <ul className="education-list">
              {getLocalizedField(member, 'education').map((edu: string, idx: number) => (
                <li key={idx}>{edu}</li>
              ))}
            </ul>
          </section>

          <section className="profile-section glass-panel">
            <h2>{t.team.profile.researchAreas}</h2>
            <div className="research-tags-small">
              {getLocalizedField(member, 'researchAreas').map((area: string, idx: number) => (
                <span key={idx} className="research-tag-small">{area}</span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="profile-sources">
        <p>{t.team.profile.sourcesTitle}</p>
        <ul className="sources-list">
          {member.sources.map((src, idx) => (
            <li key={idx}>
              <a href={src.url} target="_blank" rel="noopener noreferrer">{src.name}</a>
            </li>
          ))}
        </ul>
        <p className="sources-updated">{t.team.profile.sourcesInfo} {member.lastUpdated} {t.team.profile.sourcesUpdated}</p>
      </div>
    </div>
  );
}
