import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Badge, Button } from '@/components/ds';

const areas = [
  'Gastronomía', 'Hotelería', 'Turismo',
  'Espacios culturales', 'Atención al público', 'Empresas y servicios corporativos',
];

const dimensiones = [
  'Experiencia de usuario', 'Ergonomía', 'Psicología del color',
  'Iluminación', 'Acústica y confortabilidad', 'Protocolos de atención',
  'Recorridos del usuario', 'Experiencia de personas solas y acompañadas',
  'Inclusión y necesidades sensoriales',
];

const auditoria = [
  'Reunión inicial de diagnóstico',
  'Visita u observación del espacio',
  'Identificación de puntos de fricción',
  'Revisión de protocolos y experiencia del usuario',
  'Recomendaciones priorizadas',
  'Informe ejecutivo',
  'Taller o presentación al equipo (opcional)',
];

export default function ServiciosPage() {
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
              Diseño de servicios y experiencias
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0,
              letterSpacing: '-0.04em', color: 'var(--neutral-0)', marginBottom: '24px',
            }}>
              El detalle que<br />cambia todo.
            </h1>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5,
              color: 'var(--neutral-400)', maxWidth: '560px',
            }}>
              Consultoría metodológica para espacios y servicios que quieren mejorar la experiencia de las personas.
            </p>
          </div>
        </section>

        {/* Descripción */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div className="grid-2" style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div>
              <Badge variant="olive" style={{ marginBottom: '20px' }}>Consultoría</Badge>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: '24px',
              }}>
                Diseñadora metodológica
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
                color: 'var(--color-text-secondary)', marginBottom: '20px',
              }}>
                Soy diseñadora metodológica con formación superior en servicios y experiencias. He desarrollado una mirada aplicable a múltiples sectores, con foco en la experiencia sensorial y emocional de las personas.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
              }}>
                Mi trabajo ayuda a identificar fricciones invisibles, rediseñar recorridos y protocolos, y crear entornos donde las personas —solas o acompañadas— se sientan bien.
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px',
                letterSpacing: '0.10em', textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)', marginBottom: '16px',
              }}>
                Áreas de aplicación
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                {areas.map(a => (
                  <span key={a} style={{
                    fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
                    padding: '7px 16px', borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)', background: 'var(--color-surface)',
                  }}>
                    {a}
                  </span>
                ))}
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px',
                letterSpacing: '0.10em', textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)', marginBottom: '16px',
              }}>
                Dimensiones de trabajo
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {dimensiones.map(d => (
                  <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--olive-500)', flexShrink: 0 }} />
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)' }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Auditoría de experiencia */}
        <section style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div className="grid-2" style={{ alignItems: 'start' }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--color-accent-1)', marginBottom: '14px',
                }}>
                  Servicio principal
                </p>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.03em',
                  color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: '20px',
                }}>
                  Auditoría de experiencia sensible
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.75,
                  color: 'var(--color-text-secondary)',
                }}>
                  Un diagnóstico completo de tu espacio o servicio desde la perspectiva de la experiencia del usuario. Identifica lo que funciona, lo que fricciona y lo que puede mejorarse.
                </p>
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px',
                  letterSpacing: '0.10em', textTransform: 'uppercase',
                  color: 'var(--color-text-tertiary)', marginBottom: '20px',
                }}>
                  Puede incluir
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {auditoria.map((item, i) => (
                    <div key={item} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px',
                        color: 'var(--olive-300)', flexShrink: 0, lineHeight: 1,
                        minWidth: '28px',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: 'var(--neutral-900)',
          padding: 'var(--space-24) var(--space-12)', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.04em',
              color: 'var(--neutral-0)', lineHeight: 1.05, marginBottom: '20px',
            }}>
              Hablemos de tu espacio
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '17px',
              lineHeight: 1.6, color: 'var(--neutral-400)', marginBottom: '36px',
            }}>
              Cada proyecto empieza con una conversación. Cuéntame qué tienes y qué quieres mejorar.
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
