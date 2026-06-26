import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Badge, Button } from '@/components/ds';

const charlas = [
  {
    badge: 'Charla principal', bv: 'burgundy' as const,
    title: 'Mi soledad elegida',
    desc: 'Una conversación sobre la diferencia entre estar a solas y sentirse a solas. Autonomía, prejuicios sociales y el disfrute de la propia compañía.',
    temas: ['Bienestar', 'Autonomía', 'Vínculos'],
    fmt: 'Charla · Conversatorio · Taller',
  },
  {
    badge: 'Charla principal', bv: 'olive' as const,
    title: 'Sentir mucho en un mundo hiperconectado',
    desc: 'Alta sensibilidad, percepción intensa, sobreestimulación y formas más amables de habitar la vida cotidiana.',
    temas: ['Neurodiversidad', 'TEA', 'Sensorialidad'],
    fmt: 'Charla · Conversatorio · Taller',
  },
  {
    badge: 'Charla principal', bv: 'petrol' as const,
    title: 'Diseñar para la calma',
    desc: 'Una aproximación al diseño de espacios y servicios desde la experiencia de usuario, la acústica, la iluminación y el confort sensorial.',
    temas: ['Diseño', 'Espacios', 'Protocolo'],
    fmt: 'Charla · Conversatorio · Taller',
  },
];

const serviciosItems = [
  { accent: 'var(--color-accent-1)', label: 'Charlas y conversatorios', desc: 'Para empresas, universidades y organizaciones. Presencial u online.', href: '/charlas' },
  { accent: 'var(--color-accent-2)', label: 'Diseño de experiencias', desc: 'Diagnóstico y diseño de servicios desde la experiencia de usuario, sensorialidad y protocolo.', href: '/servicios' },
  { accent: 'var(--color-accent-3)', label: 'Moderación y conducción', desc: 'Conducción de eventos, moderación de paneles y actividades institucionales.', href: '/contacto' },
  { accent: 'var(--color-accent-1)', label: 'Comunicación y medios', desc: 'Entrevistas, colaboraciones editoriales y participación en medios y festivales.', href: '/medios' },
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
              fill style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.25 }}
              priority
            />
          </div>
          <div style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--burgundy-400)', marginBottom: '24px',
            }}>
              Autora · Diseñadora · Oradora
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
              fontSize: 'clamp(18px, 2.2vw, 28px)', lineHeight: 1.4,
              color: 'var(--neutral-300)', maxWidth: '560px', marginBottom: '40px',
            }}>
              Charlas, servicios y conversaciones sobre diseño, sensorialidad y bienestar.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/charlas">
                <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                  Solicitar charla
                </Button>
              </Link>
              <Link href="/servicios" className="link-on-dark" style={{
                fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '16px',
                letterSpacing: '0.04em',
              }}>
                Ver servicios →
              </Link>
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div className="grid-2-center" style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{
              position: 'relative', borderRadius: 'var(--radius-lg)',
              overflow: 'hidden', aspectRatio: '3/4',
            }}>
              <Image
                src="/images/janet-3.jpg" alt="Janet Lohse"
                fill style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--color-accent-1)', marginBottom: '14px',
              }}>
                Sobre mí
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(36px, 4.5vw, 60px)', letterSpacing: '-0.04em',
                color: 'var(--color-text-primary)', lineHeight: 1.0, marginBottom: '8px',
              }}>
                Janet Lohse
              </h2>
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(17px, 2vw, 22px)', letterSpacing: '-0.01em',
                color: 'var(--color-text-secondary)', lineHeight: 1.3, marginBottom: '24px',
              }}>
                Diseñadora, autora y oradora.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px',
                lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '16px',
              }}>
                Soy diseñadora metodológica con formación superior en servicios y experiencias. Trabajo en la intersección entre el diseño, la comunicación y el bienestar humano.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px',
                lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '36px',
              }}>
                Mi enfoque integra experiencia de usuario, ergonomía, psicología del color, neurodiversidad, acústica y protocolos de atención.
              </p>
              <Link href="/sobre-mi">
                <Button variant="outline" size="md">Conocer mi trayectoria</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-20) var(--space-12)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              marginBottom: '40px', flexWrap: 'wrap', gap: '16px',
            }}>
              <div>
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
                  color: 'var(--color-text-primary)', lineHeight: 1.05,
                }}>
                  Lo que hago.
                </h2>
              </div>
              <Link href="/servicios">
                <Button variant="outline" size="md">Ver servicios</Button>
              </Link>
            </div>
            <div style={{
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
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              marginBottom: '48px', gap: 'var(--space-6)', flexWrap: 'wrap',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)', lineHeight: 1.05, maxWidth: '520px',
              }}>
                Una conversación que permanece.
              </h2>
              <Link href="/charlas">
                <Button variant="outline" size="md">Ver todas las charlas</Button>
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {charlas.map(c => <CharlaCard key={c.title} {...c} />)}
            </div>
          </div>
        </section>

        {/* Libro */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div className="grid-book-home" style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{
              position: 'relative', borderRadius: 'var(--radius-lg)',
              overflow: 'hidden', aspectRatio: '2/3', boxShadow: 'var(--shadow-xl)',
            }}>
              <Image
                src="/images/book-cover.jpg" alt="Una mesa para uno — Janet Lohse"
                fill style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <Badge variant="neutral" style={{ marginBottom: '20px' }}>Autora</Badge>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(32px, 3vw, 48px)', letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)', lineHeight: 1.05, marginBottom: '8px',
              }}>
                Una mesa para uno
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'var(--color-text-tertiary)', letterSpacing: '0.04em', marginBottom: '24px',
              }}>
                Urano World · 2024
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px',
                lineHeight: 1.7, color: 'var(--color-text-secondary)', maxWidth: '480px', marginBottom: '32px',
              }}>
                Un ensayo sobre la soledad elegida, la autonomía y el arte de disfrutar la propia compañía en un mundo que teme el silencio.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Link href="https://www.buscalibre.cl/libro-mesa-para-uno/9789566196693/p/56104983" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md" style={{ background: 'var(--burgundy-500)' }}>Comprar</Button>
                </Link>
                <Link href="/libro">
                  <Button variant="outline" size="md">Conocer el libro</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section style={{
          background: 'var(--neutral-900)',
          padding: 'var(--space-24) var(--space-12)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-0.04em',
              color: 'var(--neutral-0)', lineHeight: 1, marginBottom: '20px',
            }}>
              ¿Conversamos?
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '18px',
              lineHeight: 1.6, color: 'var(--neutral-400)', marginBottom: '40px',
            }}>
              Disponible para charlas, conversatorios y consultorías. Modalidad presencial y online.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                Contáctame
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CharlaCard({ badge, bv, title, desc, temas, fmt }: typeof charlas[0]) {
  return (
    <div style={{
      background: 'white', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)', padding: '28px',
      display: 'flex', flexDirection: 'column', gap: '14px',
    }}>
      <Badge variant={bv}>{badge}</Badge>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px',
        letterSpacing: '-0.02em', color: 'var(--color-text-primary)', lineHeight: 1.2,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '15px',
        lineHeight: 1.65, color: 'var(--color-text-secondary)', flex: 1,
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
      <div style={{
        borderTop: '1px solid var(--color-border)', paddingTop: '14px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
          {fmt} · 60–90 min
        </span>
        <Link href="/contacto">
          <Button variant="outline" size="sm">Contáctame</Button>
        </Link>
      </div>
    </div>
  );
}
