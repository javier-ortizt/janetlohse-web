import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Badge, Button } from '@/components/ds';

const charlasPrincipales = [
  {
    bv: 'burgundy' as const,
    title: 'Mi soledad elegida',
    subtitle: 'Ligado al libro / editorial',
    desc: 'Una conversación sobre la diferencia entre estar a solas y sentirse a solas. Autonomía, prejuicios sociales y el disfrute de la propia compañía.',
    publico: 'Empresas, universidades, centros culturales, organizaciones de bienestar.',
    objetivos: 'Resignificar la soledad. Promover la autonomía y el autoconocimiento. Abrir conversaciones sobre vínculos y presión social.',
    formatos: ['Charla', 'Conversatorio', 'Taller'],
    duracion: '60 a 90 minutos',
    modalidad: 'Presencial u online',
    temas: ['Bienestar', 'Autonomía', 'Vínculos'],
  },
  {
    bv: 'olive' as const,
    title: 'Sentir mucho en un mundo hiperconectado',
    subtitle: 'Neurodiversidad',
    desc: 'Una charla sobre alta sensibilidad, percepción intensa, sobreestimulación y formas más amables de habitar la vida cotidiana.',
    publico: 'Áreas de RRHH, bienestar y diversidad. Centros psicológicos, organizaciones vinculadas a TEA y neurodivergencia.',
    objetivos: 'Visibilizar la alta sensibilidad y el TEA. Entregar herramientas para entornos más amables. Fomentar la inclusión sensorial.',
    formatos: ['Charla', 'Taller'],
    duracion: '60 a 90 minutos',
    modalidad: 'Presencial u online',
    temas: ['Neurodiversidad', 'TEA', 'Sensorialidad'],
  },
  {
    bv: 'petrol' as const,
    title: 'Diseñar para la calma',
    subtitle: 'Diseño de experiencias / servicios',
    desc: 'Una aproximación al diseño de espacios y servicios desde la experiencia de usuario, la ergonomía, la acústica, la iluminación, el protocolo y el confort sensorial.',
    publico: 'Hoteles, restaurantes, espacios culturales, municipalidades, empresas de servicios.',
    objetivos: 'Mostrar el impacto del diseño sensorial en la experiencia. Entregar criterios aplicables a espacios reales.',
    formatos: ['Charla', 'Moderación de panel'],
    duracion: '60 a 90 minutos',
    modalidad: 'Presencial u online',
    temas: ['Diseño', 'Espacios', 'Protocolo'],
  },
];

const otrasTemáticas = [
  'Neurodivergencia desde adentro',
  'Observación, contemplación y escucha activa',
  'Creatividad y emoción',
  'Rituales cotidianos',
  'Vínculos y lo no dicho',
  'Libros, películas y lugares',
];

const formatos = [
  'Charla', 'Conversatorio', 'Taller', 'Entrevista en vivo',
  'Moderación de panel', 'Ciclo de encuentros',
  'Participación en actividades institucionales',
];

export default function CharlasPage() {
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
              Charlas y conversatorios
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0,
              letterSpacing: '-0.04em', color: 'var(--neutral-0)', marginBottom: '24px',
            }}>
              Una conversación<br />que permanece.
            </h1>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5,
              color: 'var(--neutral-400)', maxWidth: '560px',
            }}>
              Presencial u online, para instituciones, empresas y organizaciones que buscan conversaciones con sustancia.
            </p>
          </div>
        </section>

        {/* Charlas principales */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--color-accent-1)', marginBottom: '40px',
            }}>
              Charlas principales
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {charlasPrincipales.map(c => (
                <CharlaDetalle key={c.title} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Otras temáticas */}
        <section style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-16)', alignItems: 'start',
            }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.03em',
                  color: 'var(--color-text-primary)', marginBottom: '32px',
                }}>
                  Otras temáticas disponibles
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {otrasTemáticas.map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-accent-1)', flexShrink: 0 }} />
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)' }}>{t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.03em',
                  color: 'var(--color-text-primary)', marginBottom: '32px',
                }}>
                  Formatos
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                  {formatos.map(f => (
                    <span key={f} style={{
                      fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
                      padding: '6px 14px', borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-secondary)',
                      background: 'var(--color-surface)',
                    }}>
                      {f}
                    </span>
                  ))}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6,
                  color: 'var(--color-text-tertiary)',
                }}>
                  Todas las charlas pueden adaptarse al contexto, duración y formato de tu institución u organización.
                </p>
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
              Solicita esta charla
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '17px',
              lineHeight: 1.6, color: 'var(--neutral-400)', marginBottom: '36px',
            }}>
              Escríbeme para coordinar una propuesta adaptada a tu institución o evento.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                Pedir propuesta
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CharlaDetalle({ bv, title, subtitle, desc, publico, objetivos, formatos, duracion, modalidad, temas }: typeof charlasPrincipales[0]) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)', borderBottom: '1px solid var(--color-border)', paddingBottom: '48px',
    }}>
      <div>
        <Badge variant={bv} style={{ marginBottom: '16px' }}>{subtitle}</Badge>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(24px, 2.5vw, 36px)', letterSpacing: '-0.03em',
          color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: '16px',
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '16px',
          lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '20px',
        }}>
          {desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {temas.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500,
              color: 'var(--color-text-tertiary)', padding: '3px 10px',
              borderRadius: '9999px', border: '1px solid var(--color-border)',
              background: 'var(--color-bg-subtle)',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <InfoBlock label="Público recomendado" text={publico} />
        <InfoBlock label="Objetivos" text={objetivos} />
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: '8px' }}>Formato</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)' }}>{formatos.join(' · ')}</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
          <InfoBlock label="Duración" text={duracion} />
          <InfoBlock label="Modalidad" text={modalidad} />
        </div>
        <Link href="/contacto">
          <Button variant="outline" size="md">Solicitar esta charla</Button>
        </Link>
      </div>
    </div>
  );
}

function InfoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: '6px' }}>{label}</p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{text}</p>
    </div>
  );
}
