import React from 'react';

type Variant = 'neutral' | 'burgundy' | 'olive' | 'petrol';
type Size = 'sm' | 'md';

const variantMap: Record<Variant, { bg: string; color: string }> = {
  neutral:  { bg: 'var(--neutral-100)',  color: 'var(--neutral-700)'  },
  burgundy: { bg: 'var(--burgundy-100)', color: 'var(--burgundy-700)' },
  olive:    { bg: 'var(--olive-100)',    color: 'var(--olive-700)'    },
  petrol:   { bg: 'var(--petrol-100)',   color: 'var(--petrol-700)'   },
};

const sizeMap: Record<Size, { fontSize: string; padding: string; height: string }> = {
  sm: { fontSize: 'var(--text-xs)', padding: '2px 7px',  height: '18px' },
  md: { fontSize: 'var(--text-xs)', padding: '3px 10px', height: '22px' },
};

interface BadgeProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge({ variant = 'neutral', size = 'md', children, style = {} }: BadgeProps) {
  const v = variantMap[variant];
  const s = sizeMap[size];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-bold)',
      fontSize: s.fontSize, letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase', height: s.height, padding: s.padding,
      borderRadius: 'var(--radius-full)', background: v.bg, color: v.color,
      lineHeight: 1, whiteSpace: 'nowrap', boxSizing: 'border-box',
      ...style,
    }}>
      {children}
    </span>
  );
}
