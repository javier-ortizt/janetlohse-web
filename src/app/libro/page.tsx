import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Badge, Button } from '@/components/ds';

const aparicionesLibro = [
  {
    medio: 'La Tercera — Paula',
    titulo: 'Panoramas a solas con una misma',
    url: 'https://www.latercera.com/paula/panoramas-a-solas-con-una-misma/',
  },
  {
    medio: 'La Tercera — Culto',
    titulo: 'Cuestionar la soledad en "Una mesa para uno"',
    url: 'https://www.latercera.com/culto/2024/05/07/cuestionar-la-soledad-en-una-mesa-para-uno-con-janet-lohse-compartir-contigo-misma-te-ayuda-a-anhelar-al-resto/',
  },
  {
    medio: 'The Clinic',
    titulo: 'Salir a comer solos: lo que nos estamos perdiendo',
    url: 'https://www.theclinic.cl/2024/01/20/salir-a-comer-solos-lo-que-nos-estamos-perdiendo-por-una-experiencia-mal-mirada/',
  },
];

export default function LibroPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header con portada */}
        <section style={{
          background: 'var(--neutral-900)',
          padding: '120px var(--space-12) 80px',
        }}>
          <div className="grid-book" style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div style={{
              position: 'relative', borderRadius: 'var(--radius-lg)',
              overflow: 'hidden', aspectRatio: '2/3', boxShadow: 'var(--shadow-xl)',
            }}>
              <Image
                src="/images/book-cover.jpg" alt="Una mesa para uno — Janet Lohse"
                fill style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Badge variant="neutral" style={{ marginBottom: '20px' }}>Autora</Badge>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.0,
                letterSpacing: '-0.04em', color: 'var(--neutral-0)', marginBottom: '12px',
              }}>
                Una mesa para uno
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'var(--neutral-500)', letterSpacing: '0.06em',
                textTransform: 'uppercase', marginBottom: '28px',
              }}>
                Urano World · 2024
              </p>
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5,
                color: 'var(--neutral-300)', maxWidth: '480px',
              }}>
                Estar sol@ no es sentirse sol@. Ser tu mejor compañía en un mundo hiperconectado.
              </p>
            </div>
          </div>
        </section>

        {/* Sobre el libro */}
        <section style={{ background: 'var(--neutral-0)', padding: 'var(--space-24) var(--space-12)' }}>
          <div style={{ maxWidth: 'var(--content-narrow)', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--color-accent-1)', marginBottom: '24px',
            }}>
              Sobre el libro
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '20px', lineHeight: 1.8,
              color: 'var(--color-text-secondary)', marginBottom: '24px',
            }}>
              Un ensayo sobre la soledad elegida, la autonomía y el arte de disfrutar la propia compañía en un mundo que teme el silencio.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.8,
              color: 'var(--color-text-secondary)', marginBottom: '24px',
            }}>
              Janet Lohse explora la diferencia entre estar a solas y sentirse sola, desmontando los prejuicios que rodean a quienes eligen —o simplemente disfrutan— su propia compañía. Un libro para quienes comen solos, viajan solos, viven solos, y encuentran en eso algo más que una ausencia.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.8,
              color: 'var(--color-text-secondary)', marginBottom: '40px',
            }}>
              Editado por Urano World y disponible en librerías y online.
            </p>
            <Link href="https://www.buscalibre.cl/libro-mesa-para-uno/9789566196693/p/56104983" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md" style={{ background: 'var(--burgundy-500)' }}>Comprar</Button>
            </Link>
          </div>
        </section>

        {/* Prensa del libro */}
        <section style={{
          background: 'var(--neutral-50)',
          borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-24) var(--space-12)',
        }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--color-accent-1)', marginBottom: '16px',
            }}>
              El libro en prensa
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)', marginBottom: '40px',
            }}>
              Qué se ha dicho
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {aparicionesLibro.map(a => (
                <a key={a.url} href={a.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: 'var(--space-6)', padding: 'var(--space-5) var(--space-6)',
                  background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--color-accent-1)', marginBottom: '4px',
                    }}>
                      {a.medio}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-primary)' }}>
                      {a.titulo}
                    </p>
                  </div>
                  <span style={{ color: 'var(--color-text-tertiary)', flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
