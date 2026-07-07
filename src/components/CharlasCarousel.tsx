'use client';
import React from 'react';

interface CharlaItem {
  accent: string;
  title: string;
  desc: string;
  temas: string[];
}

export function CharlasCarousel({ items }: { items: CharlaItem[] }) {
  const trackRef = React.useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('div[data-card]');
    const step = (card?.clientWidth ?? 260) + 14;
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  }

  return (
    <div className="hcarousel">
      <div className="hcarousel-track" ref={trackRef}>
        {items.map(c => (
          <div key={c.title} data-card className="hcarousel-card" style={{
            background: 'white', borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)', padding: '28px',
            display: 'flex', flexDirection: 'column', gap: '14px',
            borderTop: `3px solid ${c.accent}`,
            borderRight: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
            borderLeft: '1px solid var(--color-border)',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px',
              letterSpacing: '-0.02em', color: 'var(--color-text-primary)', lineHeight: 1.2,
            }}>
              {c.title}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '15px',
              lineHeight: 1.65, color: 'var(--color-text-secondary)',
            }}>
              {c.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {c.temas.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500,
                  color: 'var(--color-text-tertiary)', padding: '3px 9px',
                  borderRadius: '9999px', border: '1px solid var(--color-border)',
                  background: 'var(--color-bg-subtle)',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="hcarousel-arrow hcarousel-arrow-left" onClick={() => scroll('left')} aria-label="Charla anterior">
        <ChevronSvg direction="left" />
      </button>
      <button type="button" className="hcarousel-arrow hcarousel-arrow-right" onClick={() => scroll('right')} aria-label="Siguiente charla">
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
