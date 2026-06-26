import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ds';

const apariciones = [
  {
    categoria: 'Prensa escrita',
    items: [
      {
        medio: 'La Tercera — Paula',
        titulo: 'Panoramas a solas con una misma',
        url: 'https://www.latercera.com/paula/panoramas-a-solas-con-una-misma/',
        tipo: 'Artículo',
      },
      {
        medio: 'La Tercera — Culto',
        titulo: 'Cuestionar la soledad en "Una mesa para uno": compartir contigo misma te ayuda a anhelar al resto',
        url: 'https://www.latercera.com/culto/2024/05/07/cuestionar-la-soledad-en-una-mesa-para-uno-con-janet-lohse-compartir-contigo-misma-te-ayuda-a-anhelar-al-resto/',
        tipo: 'Entrevista',
      },
      {
        medio: 'The Clinic',
        titulo: 'Salir a comer solos: lo que nos estamos perdiendo por una experiencia mal mirada',
        url: 'https://www.theclinic.cl/2024/01/20/salir-a-comer-solos-lo-que-nos-estamos-perdiendo-por-una-experiencia-mal-mirada/',
        tipo: 'Artículo',
      },
      {
        medio: 'Rock & Pop',
        titulo: 'Pasaporte Experiencias Montt: una experiencia gastronómica',
        url: 'https://www.rockandpop.cl/2025/06/pasaporte-experiencias-montt-un-experiencia-gastronomica-para-conocer-distintos-bares-y-restaurantes/amp/',
        tipo: 'Mención',
      },
    ],
  },
  {
    categoria: 'Video',
    items: [
      {
        medio: 'YouTube',
        titulo: 'Entrevista — Una mesa para uno',
        url: 'https://www.youtube.com/watch?v=Dj1ZhuNgSqw',
        tipo: 'Video',
      },
      {
        medio: 'YouTube',
        titulo: 'Charla — Diseño y experiencia',
        url: 'https://www.youtube.com/watch?v=lQ4T_9ZLRqk',
        tipo: 'Video',
      },
      {
        medio: 'YouTube',
        titulo: 'Conversatorio',
        url: 'https://www.youtube.com/watch?v=_PiLzP8cSek',
        tipo: 'Video',
      },
      {
        medio: 'YouTube',
        titulo: 'Entrevista editorial',
        url: 'https://www.youtube.com/watch?v=FGnojz6vU64',
        tipo: 'Video',
      },
    ],
  },
  {
    categoria: 'Podcast',
    items: [
      {
        medio: 'Spotify',
        titulo: 'Janet Lohse — Autora de Una mesa para uno',
        url: 'https://open.spotify.com/episode/7af4KBi4R272sXq2RhD1gy',
        tipo: 'Podcast',
      },
      {
        medio: 'Apple Podcasts',
        titulo: 'Janet Lohse — Autora de Una mesa para uno',
        url: 'https://podcasts.apple.com/us/podcast/janet-lohse-autora-de-una-mesa-para-uno/id1544895103?i=1000701561816',
        tipo: 'Podcast',
      },
    ],
  },
  {
    categoria: 'Festivales y eventos',
    items: [
      {
        medio: 'Festival Invierno Lector — La Voz de Maipú',
        titulo: 'Programación y escritores',
        url: 'https://lavozdemaipu.cl/festival-invierno-lector-programacion-y-escritores/',
        tipo: 'Evento',
      },
    ],
  },
];

const badgeVariants: Record<string, 'burgundy' | 'olive' | 'petrol' | 'neutral'> = {
  'Prensa escrita': 'burgundy',
  'Video': 'olive',
  'Podcast': 'petrol',
  'Festivales y eventos': 'neutral',
};

export default function MediosPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section style={{
          background: 'var(--neutral-900)',
          padding: '120px var(--space-12) 80px',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--burgundy-400)', marginBottom: '20px',
            }}>
              Medios y comunicaciones
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0,
              letterSpacing: '-0.04em', color: 'var(--neutral-0)', marginBottom: '24px',
            }}>
              Apariciones
            </h1>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5,
              color: 'var(--neutral-400)', maxWidth: '480px',
            }}>
              Prensa, podcast, televisión y festivales. Disponible para entrevistas, colaboraciones y participación en medios.
            </p>
          </div>
        </section>

        {/* Apariciones */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
              {apariciones.map(grupo => (
                <div key={grupo.categoria}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                    <Badge variant={badgeVariants[grupo.categoria] || 'neutral'}>{grupo.categoria}</Badge>
                    <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {grupo.items.map(item => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          gap: 'var(--space-6)', padding: 'var(--space-5) var(--space-6)',
                          background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)',
                          border: '1px solid var(--color-border)',
                          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                        }}
                      >
                        <div>
                          <p style={{
                            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px',
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            color: 'var(--color-accent-1)', marginBottom: '4px',
                          }}>
                            {item.medio}
                          </p>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                            {item.titulo}
                          </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                          <span style={{
                            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            color: 'var(--color-text-tertiary)',
                          }}>
                            {item.tipo}
                          </span>
                          <span style={{ color: 'var(--color-text-tertiary)' }}>→</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Para medios */}
        <section style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)' }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.03em',
                  color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: '20px',
                }}>
                  Para medios
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.75,
                  color: 'var(--color-text-secondary)', marginBottom: '16px',
                }}>
                  Disponible para entrevistas, colaboraciones editoriales, participación en televisión, radio y podcasts.
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.75,
                  color: 'var(--color-text-secondary)',
                }}>
                  Para solicitar material de prensa, coordinar una entrevista o explorar una colaboración, escríbeme directamente.
                </p>
              </div>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.03em',
                  color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: '20px',
                }}>
                  Puede participar como
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Conferencista', 'Conductora', 'Moderadora de paneles',
                    'Entrevistadora', 'Invitada en televisión, radio o podcast',
                    'Colaboradora de contenidos culturales',
                    'Anfitriona de conversaciones institucionales',
                    'Creadora de contenido para marcas o proyectos editoriales',
                  ].map(r => (
                    <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-accent-1)', flexShrink: 0 }} />
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)' }}>{r}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: '48px' }}>
              <Link href="/contacto">
                <span style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px',
                  color: 'var(--color-accent-1)', letterSpacing: '0.04em',
                }}>
                  Contactar para prensa →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
