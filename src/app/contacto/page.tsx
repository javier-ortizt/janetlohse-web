import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export default function ContactoPage() {
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
              Contacto
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0,
              letterSpacing: '-0.04em', color: 'var(--neutral-0)', marginBottom: '24px',
            }}>
              ¿Conversamos?
            </h1>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5,
              color: 'var(--neutral-400)', maxWidth: '520px',
            }}>
              Para charlas, conversatorios, consultorías y colaboraciones. Presencial u online.
            </p>
          </div>
        </section>

        {/* Formulario */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div style={{
            maxWidth: 'var(--content-max)', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-20)',
            alignItems: 'start',
          }}>
            {/* Info lateral */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: '24px',
              }}>
                Contáctame
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.75,
                color: 'var(--color-text-secondary)', marginBottom: '40px',
              }}>
                Comparte el contexto de tu institución u organización y qué tipo de servicio te interesa. Te respondo en menos de 48 horas.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { label: 'Charlas y conversatorios', desc: 'Presencial u online · 60 a 90 minutos · Adaptable.' },
                  { label: 'Diseño de servicios', desc: 'Diagnóstico de experiencia · Consultoría · Taller.' },
                  { label: 'Comunicaciones y medios', desc: 'Entrevistas, conducción, moderación de paneles.' },
                ].map(({ label, desc }) => (
                  <div key={label}>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px',
                      color: 'var(--color-text-primary)', marginBottom: '4px',
                    }}>
                      {label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-tertiary)', lineHeight: 1.5 }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
