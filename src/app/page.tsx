import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ds';
import { ServiciosCarousel } from '@/components/ServiciosCarousel';
import { CharlasCarousel } from '@/components/CharlasCarousel';

const charlas = [
  {
    accent: 'var(--burgundy-400)',
    title: 'Mi soledad elegida',
    desc: 'Una conversación sobre la diferencia entre estar a solas y sentirse a solas. Aborda la autonomía, los prejuicios sociales y el disfrute de la propia compañía.',
    temas: ['Soledad elegida', 'Autonomía', 'Vínculos'],
  },
  {
    accent: 'var(--olive-400)',
    title: 'Sentir mucho en un mundo que corre',
    desc: 'Una conversación sobre alta sensibilidad, percepción intensa, sobreestimulación y formas más amables de habitar las exigencias de la vida cotidiana.',
    temas: ['Alta sensibilidad', 'Neurodivergencia', 'Vida cotidiana'],
  },
  {
    accent: 'var(--petrol-400)',
    title: 'Diseñar para la calma',
    desc: 'Una aproximación al diseño de espacios y servicios desde la experiencia de usuario, la ergonomía, la acústica, la iluminación, el protocolo y el confort sensorial.',
    temas: ['Experiencia de usuario', 'Espacios inclusivos', 'Servicios'],
  },
];

const serviciosItems = [
  { accent: 'var(--color-accent-1)', label: 'Charlas, conversatorios y talleres', desc: 'Encuentros presenciales u online sobre soledad elegida, alta sensibilidad, neurodivergencia, observación y diseño de experiencias, adaptados a distintos públicos y contextos.', href: '/charlas' },
  { accent: 'var(--color-accent-2)', label: 'Diseño de servicios y experiencias', desc: 'Diagnóstico y mejora de espacios, recorridos y protocolos desde la experiencia de usuario, la ergonomía, el confort sensorial y la atención al público.', href: '/servicios' },
  { accent: 'var(--color-accent-3)', label: 'Comunicación y contenidos', desc: 'Participación en medios, entrevistas, podcasts y colaboraciones editoriales o de contenido con marcas, instituciones y proyectos afines.', href: '/medios' },
  { accent: 'var(--color-accent-1)', label: 'Propuestas a medida', desc: 'Si ninguna de las propuestas se ajusta por completo a tus necesidades, podemos cocrear una charla, un conversatorio o una experiencia adaptada a tu audiencia, contexto y objetivos.', href: '/contacto' },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{
          minHeight: '100vh', background: 'var(--neutral-900)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '120px var(--space-12) 80px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src="/images/janet-4.jpg" alt="Janet Lohse"
              fill className="hero-photo" style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.25 }}
              priority
            />
          </div>
          <div style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--burgundy-400)', marginBottom: '24px',
            }}>
              Autora · Diseñadora de servicios · Conferencista
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(52px, 7vw, 92px)', lineHeight: 1.0,
              letterSpacing: '-0.04em', color: 'var(--neutral-0)', marginBottom: '28px',
            }}>
              Diseñar<br />desde<span style={{ color: 'var(--burgundy-400)' }}> adentro.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(15px, 1.6vw, 19px)', lineHeight: 1.55,
              color: 'var(--neutral-300)', maxWidth: 'clamp(300px, 46vw, 580px)',
              textAlign: 'justify', textAlignLast: 'left', marginBottom: '40px',
            }}>
              Charlas, conversaciones y experiencias sobre soledad elegida, alta sensibilidad, neurodivergencia y diseño de entornos más amables.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/servicios">
                <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                  Conocer mis servicios
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" size="lg" style={{ borderColor: 'var(--neutral-500)', color: 'var(--neutral-0)' }}>
                  Solicitar una propuesta
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Franja intermedia — respaldo profesional */}
        <section className="franja-section" style={{
          background: 'var(--burgundy-900)',
          borderTop: '1px solid var(--burgundy-800)',
          borderBottom: '1px solid var(--burgundy-800)',
          padding: 'var(--space-10) var(--space-12)',
        }}>
          <div className="franja-grid" style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div className="franja-item">
              <FranjaIcon><BookIcon /></FranjaIcon>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', letterSpacing: '0.01em', lineHeight: 1.5, color: 'var(--neutral-0)' }}>
                Autora de <em style={{ color: 'var(--burgundy-300)', fontStyle: 'italic' }}>Una mesa para uno</em>, publicado por Urano World
              </p>
            </div>
            <div className="franja-item">
              <FranjaIcon><CompassIcon /></FranjaIcon>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', letterSpacing: '0.01em', lineHeight: 1.5, color: 'var(--neutral-0)' }}>
                Diseñadora de servicios y experiencias
              </p>
            </div>
            <div className="franja-item">
              <FranjaIcon><MicIcon /></FranjaIcon>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', letterSpacing: '0.01em', lineHeight: 1.5, color: 'var(--neutral-0)' }}>
                Experiencia en radio, prensa, charlas y conversatorios
              </p>
            </div>
            <span className="franja-arrow franja-arrow-left" aria-hidden="true"><ChevronIcon direction="left" /></span>
            <span className="franja-arrow franja-arrow-right" aria-hidden="true"><ChevronIcon direction="right" /></span>
          </div>
        </section>

        {/* Sobre mí */}
        <section className="sobre-mi-section" style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div className="grid-sobre-mi" style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div className="sm-photo" style={{
              position: 'relative', borderRadius: 'var(--radius-lg)',
              overflow: 'hidden', aspectRatio: '3/4',
            }}>
              <Image
                src="/images/janet-3.jpg" alt="Janet Lohse"
                fill style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div className="sm-header">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px' }}>
                <p style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--color-accent-1)',
                }}>
                  Sobre mí
                </p>
                <Image
                  src="/images/urano-logo.png" alt="Urano World"
                  width={90} height={46}
                  className="sobre-mi-logo"
                  style={{ width: '96px', height: 'auto', flexShrink: 0 }}
                />
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(36px, 4.5vw, 60px)', letterSpacing: '-0.04em',
                color: 'var(--color-text-primary)', lineHeight: 1.0, marginBottom: '8px',
              }}>
                Janet Lohse
              </h2>
            </div>
            <div className="sm-body">
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(17px, 2vw, 22px)', letterSpacing: '-0.01em',
                color: 'var(--color-text-primary)', lineHeight: 1.3, marginBottom: '24px',
              }}>
                <strong style={{ fontWeight: 800 }}>Una mirada que une diseño, escritura y comunicación</strong>
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', textAlign: 'justify',
                lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '16px',
              }}>
                Soy Janet Lohse, autora de <strong style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>Una mesa para uno</strong>, publicado por Urano World bajo el sello Tendencias, y diseñadora metodológica especializada en servicios y experiencias.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', textAlign: 'justify',
                lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '16px',
              }}>
                Integro diseño, experiencia de usuario y comunicación para crear espacios y servicios más amables, cómodos y memorables.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', textAlign: 'justify',
                lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '36px',
              }}>
                Como conferencista, abordo la soledad elegida, la alta sensibilidad, la neurodivergencia y la observación del entorno desde una mirada cercana y adaptable.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href="/servicios">
                  <Button variant="primary" size="md" style={{ background: 'var(--burgundy-500)' }}>
                    Explorar mis servicios
                  </Button>
                </Link>
                <Link href="/sobre-mi" className="link-subtle" style={{
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px',
                }}>
                  Conocer mi trayectoria →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-20) var(--space-12)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{ marginBottom: '40px' }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--color-accent-1)', marginBottom: '14px',
              }}>
                Servicios
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)', lineHeight: 1.05, marginBottom: '16px',
              }}>
                Lo que hago.
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.6,
                color: 'var(--color-text-secondary)', maxWidth: '640px',
              }}>
                Proyectos para instituciones, organizaciones, espacios culturales, empresas y medios, adaptables a las necesidades de cada audiencia.
              </p>
            </div>
            <div className="servicios-grid hide-mobile" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1px', background: 'var(--color-border)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            }}>
              {serviciosItems.map(s => (
                <Link key={s.label} href={s.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '28px 24px', background: 'var(--neutral-0)',
                    height: '100%', borderTop: `3px solid ${s.accent}`,
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px',
                      letterSpacing: '-0.02em', color: 'var(--color-text-primary)',
                      marginBottom: '10px', lineHeight: 1.2,
                    }}>{s.label}</p>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.65,
                      color: 'var(--color-text-secondary)',
                    }}>{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mobile-only">
              <ServiciosCarousel items={serviciosItems} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Link href="/contacto">
                <Button variant="primary" size="md">Conversemos</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Charlas */}
        <section style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--color-accent-1)', marginBottom: '14px',
            }}>
              Charlas y conversatorios
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)', lineHeight: 1.05, maxWidth: '640px', marginBottom: '20px',
            }}>
              Una conversación que permanece.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.7,
              color: 'var(--color-text-secondary)', maxWidth: '640px', marginBottom: '48px',
            }}>
              Charlas, conversatorios y talleres que transforman experiencias cotidianas en espacios de reflexión, aprendizaje y encuentro. Cada propuesta puede adaptarse a los objetivos, el contexto y las características de su audiencia.
            </p>
            <div className="hide-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {charlas.map(c => <CharlaCard key={c.title} {...c} />)}
            </div>
            <div className="mobile-only">
              <CharlasCarousel items={charlas} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
              <Link href="/charlas">
                <Button variant="outline" size="md">Explorar todas las charlas</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mi primer libro */}
        <section className="libro-section" style={{
          position: 'relative', overflow: 'hidden', minHeight: '560px',
          display: 'flex', alignItems: 'center',
          padding: 'var(--space-16) var(--space-12)',
        }}>
          <div className="libro-bg-desktop">
            <Image
              src="/images/libro-banner.jpg" alt="Una mesa para uno — Janet Lohse"
              fill style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="libro-bg-mobile">
            <Image
              src="/images/libro-3d.png" alt="Una mesa para uno — Janet Lohse"
              width={300} height={230} style={{ width: '100%', height: 'auto', maxWidth: '280px' }}
            />
          </div>
          <div className="libro-content" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', width: '100%' }}>
            <div className="libro-text" style={{ maxWidth: '420px', marginLeft: 'auto' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(32px, 3vw, 48px)', letterSpacing: '-0.03em',
                color: '#000000', lineHeight: 1.05, marginBottom: '8px',
              }}>
                Una mesa para uno
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: '#000000', letterSpacing: '0.04em', marginBottom: '24px',
              }}>
                <strong style={{ fontWeight: 700 }}>Publicado por Urano World</strong> · Tendencias
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', textAlign: 'justify',
                lineHeight: 1.75, color: '#000000', marginBottom: '32px',
              }}>
                Una exploración sobre la diferencia entre estar a solas y sentirse a solas. A partir de experiencias, conversaciones e investigación, el libro invita a cuestionar los prejuicios asociados a la soledad y a construir una relación más amable con la propia compañía.
              </p>
              <Link href="https://www.buscalibre.cl/libro-mesa-para-uno/9789566196693/p/56104983" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" style={{ background: 'var(--burgundy-500)' }}>Comprar libro</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pre-footer: ¿Conversamos? */}
        <section style={{
          background: 'var(--neutral-900)',
          padding: 'var(--space-24) var(--space-12)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '620px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-0.04em',
              color: 'var(--neutral-0)', lineHeight: 1, marginBottom: '24px',
            }}>
              ¿Conversamos?
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '18px',
              lineHeight: 1.6, color: 'var(--neutral-400)', marginBottom: '16px',
            }}>
              Si buscas una charla, un conversatorio, un taller o una consultoría adaptada a tu institución, audiencia y objetivos, podemos desarrollar una propuesta en conjunto.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--neutral-500)', marginBottom: '40px',
            }}>
              Modalidad presencial u online
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                Solicitar una propuesta
              </Button>
            </Link>
            <p style={{ marginTop: '28px' }}>
              <a href="mailto:info@janetlohse.com" className="link-on-dark" style={{ fontFamily: 'var(--font-body)', fontSize: '14px' }}>
                info@janetlohse.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CharlaCard({ accent, title, desc, temas }: typeof charlas[0]) {
  return (
    <div style={{
      background: 'white', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)', padding: '28px',
      display: 'flex', flexDirection: 'column', gap: '14px',
      borderTop: `3px solid ${accent}`,
    }}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px',
        letterSpacing: '-0.02em', color: 'var(--color-text-primary)', lineHeight: 1.2,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '15px',
        lineHeight: 1.65, color: 'var(--color-text-secondary)',
      }}>
        {desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {temas.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500,
            color: 'var(--color-text-tertiary)', padding: '3px 9px',
            borderRadius: '9999px', border: '1px solid var(--color-border)',
            background: 'var(--color-bg-subtle)',
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Emphasis({ children }: { children: ReactNode }) {
  return (
    <span style={{ fontWeight: 'var(--font-weight-semibold)' as unknown as number, color: 'var(--color-text-primary)' }}>
      {children}
    </span>
  );
}

function FranjaIcon({ children }: { children: ReactNode }) {
  return (
    <span style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: '40px', height: '40px', borderRadius: '50%',
      background: 'var(--burgundy-800)', color: 'var(--burgundy-300)',
      flexShrink: 0,
    }}>
      {children}
    </span>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6.2c-1.5-1.3-3.6-2-6-2-.6 0-1 .45-1 1.05v12.5c0 .6.4 1.05 1 1.05 2.4 0 4.5.7 6 2 1.5-1.3 3.6-2 6-2 .6 0 1-.45 1-1.05V5.25c0-.6-.4-1.05-1-1.05-2.4 0-4.5.7-6 2Z" />
      <path d="M12 6.2v14.6" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.6 8.4 12.9 12.9 8.4 15.6l2.7-4.5 4.5-2.7Z" fill="currentColor" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
      <path d="M9 21h6" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  const d = direction === 'left' ? 'M10 4 6 8l4 4' : 'M6 4l4 4-4 4';
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
