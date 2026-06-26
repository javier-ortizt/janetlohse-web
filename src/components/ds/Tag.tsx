'use client';
import React from 'react';

type Variant = 'neutral' | 'burgundy' | 'olive' | 'petrol';

const variantMap: Record<Variant, { bg: string; color: string; border: string }> = {
  neutral:  { bg: 'var(--neutral-100)',  color: 'var(--neutral-700)',  border: '1px solid var(--neutral-200)'   },
  burgundy: { bg: 'var(--burgundy-50)',  color: 'var(--burgundy-600)', border: '1px solid var(--burgundy-200)' },
  olive:    { bg: 'var(--olive-50)',     color: 'var(--olive-600)',    border: '1px solid var(--olive-200)'    },
  petrol:   { bg: 'var(--petrol-50)',    color: 'var(--petrol-600)',   border: '1px solid var(--petrol-200)'   },
};

interface TagProps {
  variant?: Variant;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag({ variant = 'neutral', children, style = {} }: TagProps) {
  const v = variantMap[variant];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-medium)',
      fontSize: 'var(--text-sm)', lineHeight: 1,
      padding: '5px 11px', borderRadius: 'var(--radius-full)',
      background: v.bg, color: v.color, border: v.border,
      whiteSpace: 'nowrap', boxSizing: 'border-box',
      ...style,
    }}>
      {children}
    </span>
  );
}
