import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ds';
import { FocusTitleRotator } from '@/components/FocusTitleRotator';
import { OportunidadesDeck } from '@/components/OportunidadesDeck';

const areas = [
  {
    title: 'Gastronomía',
    background: 'linear-gradient(135deg, oklch(20% 0.085 12 / 0.92), oklch(43% 0.152 12 / 0.72)), radial-gradient(circle at 18% 24%, oklch(71% 0.098 12 / 0.52) 0 18%, transparent 19%), repeating-linear-gradient(90deg, oklch(99.2% 0.003 80 / 0.10) 0 1px, transparent 1px 28px)',
  },
  {
    title: 'Hotelería y turismo',
    background: 'linear-gradient(135deg, oklch(23% 0.065 118 / 0.92), oklch(50% 0.135 118 / 0.68)), radial-gradient(circle at 82% 18%, oklch(73% 0.115 118 / 0.48) 0 20%, transparent 21%), repeating-linear-gradient(135deg, oklch(99.2% 0.003 80 / 0.09) 0 1px, transparent 1px 30px)',
  },
  {
    title: 'Espacios culturales',
    background: 'linear-gradient(135deg, oklch(20% 0.062 205 / 0.94), oklch(46% 0.128 205 / 0.68)), radial-gradient(circle at 20% 78%, oklch(70% 0.108 205 / 0.48) 0 18%, transparent 19%), repeating-linear-gradient(0deg, oklch(99.2% 0.003 80 / 0.08) 0 1px, transparent 1px 26px)',
  },
  {
    title: 'Instituciones y organizaciones',
    background: 'linear-gradient(135deg, oklch(23% 0.010 58 / 0.94), oklch(42% 0.014 62 / 0.72)), radial-gradient(circle at 80% 74%, oklch(78% 0.015 68 / 0.36) 0 18%, transparent 19%), repeating-linear-gradient(45deg, oklch(99.2% 0.003 80 / 0.08) 0 1px, transparent 1px 30px)',
  },
];

const analisis = [
  {
    title: 'Espacio y confort',
    desc: 'Ergonomía, iluminación, acústica, psicología del color y comodidad sensorial.',
    accent: 'var(--burgundy-500)',
  },
  {
    title: 'Servicio y recorrido',
    desc: 'Experiencia de usuario, recorrido de clientes, puntos de contacto, protocolos de atención y coherencia entre espacio y servicio.',
    accent: 'var(--olive-500)',
  },
  {
    title: 'Personas y necesidades',
    desc: 'Experiencia de personas solas y acompañadas, distintas necesidades sensoriales, accesibilidad, comodidad y fidelización.',
    accent: 'var(--petrol-500)',
  },
];

const pasos = [
  {
    number: '01',
    title: 'Comprender',
    desc: 'Reunión inicial para conocer el proyecto, sus objetivos, públicos y principales inquietudes.',
  },
  {
    number: '02',
    title: 'Observar',
    desc: 'Visita o análisis del espacio y servicio, considerando recorridos, ambiente, atención y puntos de contacto.',
  },
  {
    number: '03',
    title: 'Diagnosticar',
    desc: 'Identificación de fortalezas, fricciones y oportunidades de mejora en la experiencia y los protocolos.',
  },
  {
    number: '04',
    title: 'Proponer',
    desc: 'Entrega de recomendaciones priorizadas, informe ejecutivo y, opcionalmente, una presentación o taller para el equipo.',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{
          background: 'var(--neutral-900)',
          padding: '120px var(--space-12) 88px',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <SectionLabel color="var(--burgundy-400)">Diseño de servicios y experiencias</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.02,
              letterSpacing: 0, color: 'var(--neutral-0)', marginBottom: '24px',
              maxWidth: '900px',
            }}>
              Los detalles que <span style={{ color: 'var(--burgundy-400)' }}>transforman</span> una experiencia
            </h1>
            <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto">
                <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                  Conversemos
                </Button>
              </Link>
              <a href="#como-trabajo" className="link-on-dark" style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600,
              }}>
                Conoce cómo trabajo ↓
              </a>
            </div>
          </div>
        </section>

        <section id="como-trabajo" style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div className="grid-2" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', alignItems: 'start' }}>
            <div>
              <SectionLabel>Mi enfoque</SectionLabel>
              <FocusTitleRotator />

            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.8,
                color: 'var(--color-text-secondary)', marginBottom: '22px',
              }}>
                Analizo la experiencia completa de un espacio o servicio para detectar pequeños puntos de fricción que pueden afectar la comodidad, la percepción y la relación de las personas con una organización.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
              }}>
                Mi formación superior en servicios y experiencias me permite integrar observación, experiencia de usuario, ergonomía, confortabilidad, accesibilidad y protocolos de atención para proponer mejoras concretas, realistas y coherentes con los objetivos de cada proyecto.
              </p>
            </div>
          </div>
        </section>

        <section style={{
          background: 'var(--neutral-50)', borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <SectionLabel>Áreas de aplicación</SectionLabel>
            <div className="hide-mobile" style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '16px', marginTop: '22px',
            }}>
              {areas.map(area => <AreaCard key={area.title} {...area} />)}
            </div>
            <div className="mobile-only" style={{ marginTop: '22px' }}>
              <div className="hcarousel-track">
                {areas.map(area => (
                  <div key={area.title} className="hcarousel-card" style={{ display: 'flex' }}>
                    <AreaCard {...area} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <SectionLabel>Qué puedo analizar</SectionLabel>
            <div className="hide-mobile" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '18px', marginTop: '22px',
            }}>
              {analisis.map(item => <AnalysisCard key={item.title} {...item} />)}
            </div>
            <div className="mobile-only" style={{ marginTop: '22px' }}>
              <div className="hcarousel-track">
                {analisis.map(item => (
                  <div key={item.title} className="hcarousel-card" style={{ display: 'flex' }}>
                    <AnalysisCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <OportunidadesDeck />

        <section style={{ background: 'var(--neutral-50)', padding: 'var(--space-24) var(--space-12)' }}>
          <div className="grid-2" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', alignItems: 'center' }}>
            <div>
              <SectionLabel>Servicio principal</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(30px, 4vw, 52px)', letterSpacing: 0,
                color: 'var(--color-text-primary)', lineHeight: 1.05, marginBottom: '14px',
              }}>
                Auditoría de experiencia sensible
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--olive-700)', marginBottom: '24px',
              }}>
                Diagnóstico metodológico de espacios y servicios
              </p>
            </div>
            <div style={{
              background: 'var(--color-surface)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', boxShadow: 'var(--shadow-sm)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
              }}>
                Una evaluación integral que permite comprender cómo las personas recorren, perciben y viven un espacio o servicio. Identifica fortalezas, puntos de fricción y oportunidades de mejora para construir una experiencia más cómoda, coherente y memorable.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <SectionLabel>Cómo funciona</SectionLabel>
            <div className="hide-mobile" style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '16px', marginTop: '24px',
            }}>
              {pasos.map(step => <StepCard key={step.number} {...step} />)}
            </div>
            <div className="mobile-only" style={{ marginTop: '24px' }}>
              <div className="hcarousel-track">
                {pasos.map(step => (
                  <div key={step.number} className="hcarousel-card" style={{ display: 'flex' }}>
                    <StepCard {...step} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{
          background: 'var(--neutral-900)',
          padding: 'var(--space-24) var(--space-12)', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 4vw, 58px)', letterSpacing: 0,
              color: 'var(--neutral-0)', lineHeight: 1.05, marginBottom: '24px',
            }}>
              Hablemos de la experiencia que quieres mejorar
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '17px',
              lineHeight: 1.7, color: 'var(--neutral-400)', marginBottom: '36px',
            }}>
              Cuéntame sobre tu espacio, servicio o proyecto. Revisaremos tus necesidades para definir si una auditoría, consultoría o propuesta adaptada puede ayudarte.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                Conversemos
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionLabel({ children, color = 'var(--color-accent-1)' }: { children: React.ReactNode; color?: string }) {
  return (
    <p style={{
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
      letterSpacing: '0.16em', textTransform: 'uppercase',
      color, marginBottom: '14px',
    }}>
      {children}
    </p>
  );
}

function AreaCard({ title, background }: { title: string; background: string }) {
  return (
    <article style={{
      width: '100%', minHeight: '210px', height: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      backgroundImage: background, backgroundColor: 'var(--neutral-800)',
      display: 'flex', alignItems: 'flex-end', padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)', border: '1px solid oklch(99.2% 0.003 80 / 0.12)',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(24px, 2.3vw, 32px)', letterSpacing: 0,
        color: 'var(--neutral-0)', lineHeight: 1.05,
      }}>
        {title}
      </h3>
    </article>
  );
}

function AnalysisCard({ title, desc, accent }: { title: string; desc: string; accent: string }) {
  return (
    <article style={{
      background: 'var(--color-surface)', border: '1px solid var(--color-border)',
      borderTop: `4px solid ${accent}`, borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-7)', boxShadow: 'var(--shadow-sm)', minHeight: '210px', height: '100%',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(24px, 2.4vw, 34px)', letterSpacing: 0,
        color: 'var(--color-text-primary)', lineHeight: 1.08, marginBottom: '16px',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.7,
        color: 'var(--color-text-secondary)',
      }}>
        {desc}
      </p>
    </article>
  );
}

function StepCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <article style={{
      background: 'var(--neutral-50)', border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', minHeight: '220px', height: '100%',
    }}>
      <span style={{
        display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: '32px', color: 'var(--olive-500)', lineHeight: 1, marginBottom: '18px',
      }}>
        {number}
      </span>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: '24px', letterSpacing: 0,
        color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: '12px',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.65,
        color: 'var(--color-text-secondary)',
      }}>
        {desc}
      </p>
    </article>
  );
}