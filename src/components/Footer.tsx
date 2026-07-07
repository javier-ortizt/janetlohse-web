import React from 'react';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/janet-lohse-3a711113b/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://www.instagram.com/janet.lohse/', label: 'Instagram', Icon: InstagramIcon },
];

const otherLinks = [
  { href: '/contacto', label: 'Contacto' },
  { href: '/medios', label: 'Prensa' },
];

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
        <div style={{ display: 'flex', gap: 'var(--space-7)', alignItems: 'center', flexWrap: 'wrap' }}>
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-footer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Icon />
              {label}
            </Link>
          ))}
          {otherLinks.map(({ href, label }) => (
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

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
