import { BookOpen, Users, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 className="text-gradient">Hakkımızda</h1>
        <p className="text-secondary">Turkish Brain Team</p>
      </div>

      <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <BookOpen style={{ color: 'var(--accent-primary)' }} />
            <h2 style={{ margin: 0 }}>Misyonumuz</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            TBT (Turkish Brain Team), yapay zeka, derin öğrenme, makine öğrenmesi ve beyin-bilgisayar arayüzleri gibi alanlarda ileri düzey araştırmalar yürütmek amacıyla kurulmuştur. Geliştirdiğimiz bu dijital kütüphane projesi ile, araştırmacılarımızın kaynaklara daha hızlı ve premium bir arayüz ile erişmesini amaçlıyoruz.
          </p>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Users style={{ color: 'var(--accent-primary)' }} />
            <h2 style={{ margin: 0 }}>Ekibimiz</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Prof. Dr. Şengül Doğan liderliğindeki laboratuvarımız, alanında uzman akademisyenler ve yetenekli araştırmacılardan oluşmaktadır. Yenilikçi projeler ve akademik makalelerle bilim dünyasına katkıda bulunmaya devam ediyoruz.
          </p>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Globe style={{ color: 'var(--accent-primary)' }} />
            <h2 style={{ margin: 0 }}>Vizyonumuz</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Teknolojinin sınırlarını zorlayarak, beyin-makine arayüzleri ve yapay zeka alanında uluslararası düzeyde tanınan, öncü bir araştırma merkezi olmak.
          </p>
        </section>
      </div>
    </div>
  )
}
