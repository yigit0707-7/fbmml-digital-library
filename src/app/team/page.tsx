"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { teamData, TeamMember } from '@/data/team';
import { collaborativePublications } from '@/data/publications';
import { Award, ArrowRight, ExternalLink } from 'lucide-react';
import './team.css';

export default function TeamPage() {
  const { language, t } = useLanguage();

  const getLocalizedField = (obj: any, field: string) => {
    return obj[`${field}${language === 'tr' ? 'Tr' : 'En'}`];
  };

  const leader = teamData.find(m => m.slug === 'sengul-dogan') as TeamMember;
  const members = teamData.filter(m => m.slug !== 'sengul-dogan');

  const researchTags = t.team.researchTags;

  return (
    <div className="team-page animate-fade-in">
      <section className="hero-section">
        <div className="neural-bg"></div>
        <div className="container hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/brand/tbt-logo.png" alt="TBT Logo" style={{ width: '100%', maxWidth: '350px', height: 'auto', marginBottom: '2rem' }} />
          <h2 className="hero-subtitle" style={{ marginTop: 0 }}>{t.team.labShort}</h2>
          <p className="hero-desc">{t.team.labDesc}</p>
          <div className="research-tags">
            {researchTags.map((tag, idx) => (
              <span key={idx} className="research-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section container">
        <div className="leader-container">
          <Link href={`/team/${leader.slug}`} className="team-card leader-card glass-panel">
            <div className="member-photo-wrapper">
              <Image src={leader.photo} alt={`${leader.fullName} profil fotoğrafı`} width={200} height={200} className="member-photo" />
            </div>
            <div className="member-info">
              <h3 className="member-name">{leader.academicTitle} {leader.fullName}</h3>
              <div className="member-title">
                 {getLocalizedField(leader, 'researchAreas').slice(0,3).map((tag: string) => <span key={tag} className="research-tag-small">{tag}</span>)}
              </div>
              <div className="member-institution">
                {getLocalizedField(leader, 'institution')} • {getLocalizedField(leader, 'department')}
              </div>
              <p className="member-bio-short">{getLocalizedField(leader, 'bio').substring(0, 160)}...</p>
            </div>
              <span className="profile-btn">{language === 'tr' ? "Profili İncele" : "View Profile"}</span>
          </Link>
        </div>

        <div className="members-grid">
          {members.map(member => (
            <Link key={member.slug} href={`/team/${member.slug}`} className="team-card member-card glass-panel">
              <div className="member-photo-wrapper">
                <Image src={member.photo} alt={`${member.fullName} profil fotoğrafı`} width={150} height={150} className="member-photo" />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.academicTitle} {member.fullName}</h3>
                <div className="member-title">
                   {getLocalizedField(member, 'researchAreas').slice(0,3).map((tag: string) => <span key={tag} className="research-tag-small">{tag}</span>)}
                </div>
                <div className="member-institution-badge">
                  {getLocalizedField(member, 'institution')}
                </div>
              </div>
              <div style={{textAlign: "center", width: "100%"}}>
                <span className="profile-btn">{language === 'tr' ? "Profili İncele" : "View Profile"}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pubs-section container">
        <h3 className="section-title">{t.team.collaborativePubs}</h3>
        <div className="pubs-grid">
          {collaborativePublications.map(pub => (
            <div key={pub.id} className="pub-card glass-panel">
              <span className="pub-tag">{pub.tag}</span>
              <h4 className="pub-title">{pub.title}</h4>
              <p className="pub-authors">{pub.authors.join(', ')}</p>
              <div className="pub-meta">
                <span className="pub-year">{pub.year}</span>
                <span className="pub-journal">{pub.journal}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
