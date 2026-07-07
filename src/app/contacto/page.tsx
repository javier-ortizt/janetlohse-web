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
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
