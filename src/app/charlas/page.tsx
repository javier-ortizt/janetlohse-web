import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ds';

type BadgeVariant = 'burgundy' | 'olive' | 'petrol';

const charlasPrincipales = [
  {
    variant: 'burgundy' as BadgeVariant,
    accent: 'var(--burgundy-500)',
    accentSoft: 'var(--burgundy-50)',
    accentBorder: 'var(--burgundy-200)',
    title: 'Mi soledad elegida',
    tags: ['Soledad elegida', 'Autonomía'],
    desc: 'Una conversación sobre la diferencia entre estar a solas y sentirse a solas. A partir de experiencias cotidianas y de los temas desarrollados en mi libro Una mesa para uno, explora la autonomía, los prejuicios sociales y el disfrute de la propia compañía.',
    ideal: 'Universidades, colegios, programas de mujeres, municipalidades, fundaciones, bibliotecas y espacios culturales.',
    propone: [
      'Resignificar la experiencia de estar a solas.',
      'Cuestionar prejuicios asociados a la soledad.',
      'Promover autonomía y autoconocimiento.',
      'Abrir conversaciones sobre vínculos y presión social.',
    ],
    meta: 'Presencial u online · 60–90 minutos · Charla, conversatorio o taller',
  },
  {
    variant: 'olive' as BadgeVariant,
    accent: 'var(--olive-500)',
    accentSoft: 'var(--olive-50)',
    accentBorder: 'var(--olive-200)',
    title: 'Sentir mucho en un mundo que corre',
    tags: ['Alta sensibilidad', 'Vida cotidiana', 'Inclusividad'],
    desc: 'Una conversación sobre alta sensibilidad, percepción intensa, sobreestimulación y formas más amables de habitar las exigencias de la vida cotidiana.',
    ideal: 'Universidades, colegios, fundaciones, centros psicológicos, equipos de trabajo y organizaciones vinculadas con inclusión y convivencia.',
    propone: [
      'Visibilizar distintas formas de percibir y procesar el entorno.',
      'Reconocer situaciones cotidianas de sobreestimulación.',
      'Compartir criterios para construir ambientes más comprensivos.',
      'Favorecer conversaciones sobre sensibilidad y neurodivergencia con claridad y cercanía.',
    ],
    meta: 'Presencial u online · 60–90 minutos · Charla, conversatorio o taller',
  },
  {
    variant: 'petrol' as BadgeVariant,
    accent: 'var(--petrol-500)',
    accentSoft: 'var(--petrol-50)',
    accentBorder: 'var(--petrol-200)',
    title: 'El detalle que transforma la experiencia',
    tags: ['Diseño de servicios y experiencias', 'Fidelización', 'Accesibilidad'],
    desc: 'Una aproximación al diseño de espacios y servicios desde la experiencia de usuario, la ergonomía, la acústica, la iluminación, el protocolo y el confort sensorial.',
    ideal: 'Hoteles, restaurantes, espacios culturales, instituciones educacionales, municipalidades, empresas de servicios y organizaciones de atención al público.',
    propone: [
      'Comprender cómo el entorno influye en la percepción de una experiencia.',
      'Entregar criterios aplicables a espacios y servicios reales.',
      'Considerar la experiencia de personas solas, acompañadas y con distintas necesidades sensoriales.',
      'Relacionar comodidad, recomendación y fidelización.',
    ],
    meta: 'Presencial u online · 60–90 minutos · Charla, conversatorio o taller aplicado',
  },
];

const otrasTematicas = [
  {
    title: 'Neurodivergencia desde adentro',
    desc: 'Una mirada en primera persona sobre percepción, adaptación, sobreestimulación y formas distintas de habitar el mundo.',
  },
  {
    title: 'Observación, permanencia y escucha activa',
    desc: 'Una conversación sobre la atención como herramienta para comprender mejor nuestros entornos, vínculos y experiencias.',
  },
  {
    title: 'Creatividad y emoción',
    desc: 'Cómo transformar la sensibilidad, la experiencia y la observación en procesos y proyectos creativos sostenibles.',
  },
];

const formatos = [
  'Charla',
  'Conversatorio',
  'Taller',
  'Ciclo de encuentros',
  'Entrevista o conversación en vivo',
];

export default function CharlasPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{
          background: 'var(--neutral-900)',
          padding: '120px var(--space-12) 88px',
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
              maxWidth: '820px',
            }}>
              Una conversación que <span style={{ color: 'var(--burgundy-400)' }}>permanece</span>.
            </h1>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5,
              color: 'var(--neutral-400)', maxWidth: '640px', marginBottom: '36px',
            }}>
              Charlas, conversatorios y talleres sobre soledad elegida, alta sensibilidad, neurodivergencia y diseño de experiencias, adaptados a los objetivos y características de cada audiencia.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                Contacto
              </Button>
            </Link>
          </div>
        </section>

        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{ maxWidth: '760px', marginBottom: '52px' }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--color-accent-1)', marginBottom: '14px',
              }}>
                Charlas principales
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
              }}>
                Estas son las tres conversaciones centrales de mi proyecto. Cada una puede adaptarse en profundidad, duración y formato según el contexto de la institución y las necesidades de su comunidad.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {charlasPrincipales.map(charla => (
                <CharlaDetalle key={charla.title} {...charla} />
              ))}
            </div>
          </div>
        </section>

        <section style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--color-accent-1)', marginBottom: '20px',
            }}>
              Otras temáticas disponibles
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {otrasTematicas.map(tema => (
                <article key={tema.title} style={{
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)',
                }}>
                  <h2 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'clamp(22px, 2.2vw, 30px)', letterSpacing: '-0.02em',
                    color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: '12px',
                  }}>
                    {tema.title}
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.7,
                    color: 'var(--color-text-secondary)',
                  }}>
                    {tema.desc}
                  </p>
                </article>
              ))}
            </div>

            <div style={{ marginTop: 'var(--space-14)' }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--color-accent-1)', marginBottom: '18px',
              }}>
                Formatos disponibles
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                {formatos.map(formato => (
                  <span key={formato} style={{
                    fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
                    padding: '7px 16px', borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)', background: 'var(--color-surface)',
                  }}>
                    {formato}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{
          background: 'var(--neutral-900)',
          padding: 'var(--space-24) var(--space-12)', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(34px, 4vw, 56px)', letterSpacing: '-0.04em',
              color: 'var(--neutral-0)', lineHeight: 1.05, marginBottom: '24px',
            }}>
              Diseñemos el encuentro que necesitas
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.7,
              color: 'var(--neutral-400)', marginBottom: '36px',
            }}>
              Cuéntame tus objetivos, audiencia y contexto para cocrear una propuesta cercana, profesional y adaptada a tu organización.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                Diseñemos una propuesta
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CharlaDetalle({ accent, accentSoft, accentBorder, title, tags, desc, ideal, propone, meta }: typeof charlasPrincipales[0]) {
  return (
    <article className="grid-charla" style={{
      background: 'var(--color-surface)', border: '1px solid var(--color-border)',
      borderTop: `4px solid ${accent}`, borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)', boxShadow: 'var(--shadow-sm)',
    }}>
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(26px, 3vw, 42px)', letterSpacing: '-0.03em',
          color: 'var(--color-text-primary)', lineHeight: 1.05, marginBottom: '18px',
        }}>
          {title}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
              padding: '6px 12px', borderRadius: 'var(--radius-full)',
              border: `1px solid ${accentBorder}`, background: accentSoft,
              color: accent,
            }}>
              {tag}
            </span>
          ))}
        </div>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.75,
          color: 'var(--color-text-secondary)', marginBottom: '22px',
        }}>
          {desc}
        </p>
        <InfoLine label="Ideal para" text={ideal} />
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px', lineHeight: 1.55,
          color: 'var(--color-text-tertiary)', marginTop: '20px',
        }}>
          {meta}
        </p>
      </div>

      <div>
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px',
          letterSpacing: '0.10em', textTransform: 'uppercase',
          color: 'var(--color-text-tertiary)', marginBottom: '16px',
        }}>
          Qué propone esta conversación
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
        }}>
          {propone.map((item, index) => (
            <div key={item} style={{
              background: 'var(--neutral-50)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)', padding: 'var(--space-4)', minHeight: '112px',
            }}>
              <span style={{
                display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '18px', color: accent, marginBottom: '10px', lineHeight: 1,
              }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.55,
                color: 'var(--color-text-secondary)',
              }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function InfoLine({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p style={{
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px',
        letterSpacing: '0.10em', textTransform: 'uppercase',
        color: 'var(--color-text-tertiary)', marginBottom: '8px',
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.65,
        color: 'var(--color-text-secondary)',
      }}>
        {text}
      </p>
    </div>
  );
}
