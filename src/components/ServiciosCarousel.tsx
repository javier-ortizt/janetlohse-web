'use client';
import React from 'react';
import Link from 'next/link';

interface ServicioItem {
  accent: string;
  label: string;
  desc: string;
  href: string;
}

export function ServiciosCarousel({ items }: { items: ServicioItem[] }) {
  const trackRef = React.useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('a');
    const step = (card?.clientWidth ?? 260) + 14;
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  }

  return (
    <div className="hcarousel">
      <div className="hcarousel-track" ref={trackRef}>
        {items.map(s => (
          <Link key={s.label} href={s.href} className="hcarousel-card" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '32px 28px', background: 'var(--neutral-0)', height: '100%',
              borderTop: `3px solid ${s.accent}`,
              borderRight: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
              borderLeft: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px',
                letterSpacing: '-0.02em', color: 'var(--color-text-primary)',
                marginBottom: '12px', lineHeight: 1.2,
              }}>{s.label}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
              }}>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <button type="button" className="hcarousel-arrow hcarousel-arrow-left" onClick={() => scroll('left')} aria-label="Servicio anterior">
        <ChevronSvg direction="left" />
      </button>
      <button type="button" className="hcarousel-arrow hcarousel-arrow-right" onClick={() => scroll('right')} aria-label="Siguiente servicio">
        <ChevronSvg direction="right" />
      </button>
    </div>
  );
}

function ChevronSvg({ direction }: { direction: 'left' | 'right' }) {
  const d = direction === 'left' ? 'M10 4 6 8l4 4' : 'M6 4l4 4-4 4';
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
