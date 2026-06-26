import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ds';

export default function SobreMiPage() {
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
              Sobre mí
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0,
              letterSpacing: '-0.04em', color: 'var(--neutral-0)',
            }}>
              Janet Lohse
            </h1>
          </div>
        </section>

        {/* Bio principal */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div style={{
            maxWidth: 'var(--content-max)', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '380px 1fr',
            gap: 'var(--space-16)', alignItems: 'start',
          }}>
            <div style={{ position: 'sticky', top: '96px' }}>
              <div style={{
                position: 'relative', borderRadius: 'var(--radius-lg)',
                overflow: 'hidden', aspectRatio: '3/4', marginBottom: '24px',
              }}>
                <Image
                  src="/images/janet-3.jpg" alt="Janet Lohse"
                  fill style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  ['Autora', 'Una mesa para uno (Urano World, 2024)'],
                  ['Diseñadora', 'Formación superior en servicios y experiencias'],
                  ['Oradora', 'Charlas, conversatorios y moderación'],
                  ['Comunicadora', 'Prensa, radio, podcasts y televisión'],
                ].map(([rol, detalle]) => (
                  <div key={rol} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                    <span style={{
                      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px',
                      letterSpacing: '0.10em', textTransform: 'uppercase',
                      color: 'var(--color-accent-1)', flexShrink: 0, minWidth: '90px',
                    }}>
                      {rol}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-tertiary)', lineHeight: 1.4 }}>
                      {detalle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '20px', lineHeight: 1.75,
                color: 'var(--color-text-secondary)', marginBottom: '24px',
              }}>
                Soy diseñadora metodológica con formación superior en servicios y experiencias. Trabajo en la intersección entre el diseño, la comunicación y el bienestar humano.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
                color: 'var(--color-text-secondary)', marginBottom: '24px',
              }}>
                Mi enfoque integra experiencia de usuario, ergonomía, psicología del color, acústica, iluminación y protocolos de atención. He desarrollado una mirada aplicable a gastronomía, hotelería, turismo, espacios culturales, atención al público y empresas.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
                color: 'var(--color-text-secondary)', marginBottom: '24px',
              }}>
                Soy autora de <em>Una mesa para uno</em>, publicado por Urano World — un ensayo sobre la soledad elegida, la autonomía y el arte de disfrutar la propia compañía en un mundo que teme el silencio.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
                color: 'var(--color-text-secondary)', marginBottom: '40px',
              }}>
                Como oradora y comunicadora, he participado en medios, podcasts, festivales literarios y actividades institucionales en Chile. Mi trabajo se orienta a convertir ideas complejas en conversaciones cercanas, concretas y útiles.
              </p>
              <Link href="/contacto">
                <Button variant="primary" size="lg" style={{ background: 'var(--burgundy-500)' }}>
                  Contáctame
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Fotos secundarias */}
        <section style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-20) var(--space-12)',
        }}>
          <div style={{
            maxWidth: 'var(--content-max)', margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {[
              { src: '/images/janet-1.jpg', alt: 'Janet Lohse — retrato íntimo' },
              { src: '/images/janet-4.jpg', alt: 'Janet Lohse — en trabajo' },
              { src: '/images/janet-2.jpg', alt: 'Janet Lohse — sesión editorial' },
            ].map(img => (
              <div key={img.src} style={{
                position: 'relative', borderRadius: 'var(--radius-lg)',
                overflow: 'hidden', aspectRatio: '3/4',
              }}>
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
