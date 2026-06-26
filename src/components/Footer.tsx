import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{
      background: 'var(--neutral-900)',
      borderTop: '1px solid var(--neutral-800)',
      padding: 'var(--space-8) var(--space-12)',
    }}>
      <div style={{
        maxWidth: 'var(--content-max)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 'var(--space-4)',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '16px',
            letterSpacing: '-0.02em', color: 'var(--neutral-0)', marginBottom: '4px',
          }}>
            Janet Lohse
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--neutral-600)' }}>
            © {new Date().getFullYear()} Janet Lohse · janetlohse.com
          </p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-7)', flexWrap: 'wrap' }}>
          {[
            { href: 'https://www.instagram.com/janet.lohse/', label: 'Instagram' },
            { href: '/contacto', label: 'Contacto' },
            { href: '/medios', label: 'Prensa' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="link-footer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '13px' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
