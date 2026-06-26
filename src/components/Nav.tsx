'use client';
import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/charlas', label: 'Charlas' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/libro', label: 'Libro' },
  { href: '/medios', label: 'Medios' },
  { href: '/contacto', label: 'Contacto' },
];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const isLight = scrolled || open;

  return (
    <>
      <nav className="nav-inner" style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '72px',
        zIndex: 'var(--z-sticky)' as unknown as number,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 var(--space-12)',
        background: isLight ? 'oklch(99.2% 0.003 80 / 0.92)' : 'transparent',
        backdropFilter: isLight ? 'blur(16px)' : 'none',
        borderBottom: isLight ? '1px solid var(--color-border)' : 'none',
        transition: 'background var(--transition-base), border-color var(--transition-base)',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px',
          letterSpacing: '-0.02em',
          color: isLight ? 'var(--color-text-primary)' : 'var(--neutral-0)',
          transition: 'color var(--transition-base)',
        }}>
          Janet Lohse
        </Link>

        {/* Desktop links */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: 'var(--space-14)', alignItems: 'center' }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14px',
              letterSpacing: '0.04em',
              color: isLight ? 'var(--color-text-secondary)' : 'oklch(78% 0.015 68)',
              transition: 'color var(--transition-fast)',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = isLight ? 'var(--color-text-primary)' : 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = isLight ? 'var(--color-text-secondary)' : 'oklch(78% 0.015 68)')}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button — shown on mobile via CSS */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', flexDirection: 'column', gap: '5px',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: isLight ? 'var(--color-text-primary)' : 'var(--neutral-0)',
            borderRadius: '2px',
            transition: 'transform var(--transition-fast)',
            transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: isLight ? 'var(--color-text-primary)' : 'var(--neutral-0)',
            borderRadius: '2px',
            opacity: open ? 0 : 1,
            transition: 'opacity var(--transition-fast)',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: isLight ? 'var(--color-text-primary)' : 'var(--neutral-0)',
            borderRadius: '2px',
            transition: 'transform var(--transition-fast)',
            transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0,
          zIndex: 'calc(var(--z-sticky) - 1)' as unknown as number,
          background: 'oklch(99.2% 0.003 80 / 0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          padding: 'var(--space-6) var(--space-5) var(--space-10)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 7vw, 40px)', letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                padding: 'var(--space-4) 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
