import { prisma } from '@/lib/prisma'
import './team.css'
import { User, Award, BookOpen } from 'lucide-react'

export default async function TeamPage() {
  const teamMembers = await prisma.teamMember.findMany({
    orderBy: { orderIndex: 'asc' }
  })

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="team-header text-center">
        <h1 className="text-gradient">Fırat Brain Mind Machine Lab</h1>
        <p className="team-subtitle">Çalışma Ekibimiz</p>
      </div>

      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className={`team-card glass-panel ${member.role === 'Lider' ? 'leader-card' : ''}`}>
            <div className="member-photo">
              {member.photoUrl ? (
                <img src={member.photoUrl} alt={member.name} />
              ) : (
                <div className="default-photo">
                  <User size={64} className="default-photo-icon" />
                </div>
              )}
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <div className="member-title">
                <Award size={16} />
                <span>{member.title}</span>
              </div>
              <p className="member-desc">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
