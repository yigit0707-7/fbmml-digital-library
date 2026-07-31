"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link as LinkIcon } from 'lucide-react';
import { TeamMember } from '@/data/team';

interface Props {
  member: TeamMember;
}

export default function AcademicLinks({ member }: Props) {
  const { language } = useLanguage();
  const { links } = member;

  if (!links) return null;

  const academicProfileLabel = language === 'tr' 
    ? (links.academicProfileLabelTr || 'Akademik Profil')
    : (links.academicProfileLabelEn || 'Academic Profile');

  return (
    <div className="profile-links">
      {links.academicProfile && (
        <a 
          href={links.academicProfile} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="profile-link-btn"
          aria-label={`${member.fullName} ${academicProfileLabel}`}
        >
          <LinkIcon size={16} /> {academicProfileLabel}
        </a>
      )}

      {links.scholar && (
        <a 
          href={links.scholar} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="profile-link-btn"
          aria-label={`${member.fullName} Google Scholar`}
        >
          <LinkIcon size={16} /> Google Scholar
        </a>
      )}

      {links.orcid && (
        <a 
          href={links.orcid} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="profile-link-btn"
          aria-label={`${member.fullName} ORCID`}
        >
          <LinkIcon size={16} /> ORCID
        </a>
      )}

      {links.researchGate && (
        <a 
          href={links.researchGate} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="profile-link-btn"
          aria-label={`${member.fullName} ResearchGate`}
        >
          <LinkIcon size={16} /> ResearchGate
        </a>
      )}

      {links.linkedin && (
        <a 
          href={links.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="profile-link-btn"
          aria-label={`${member.fullName} LinkedIn`}
        >
          <LinkIcon size={16} /> LinkedIn
        </a>
      )}
    </div>
  );
}
