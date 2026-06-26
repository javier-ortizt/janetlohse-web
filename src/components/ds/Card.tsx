'use client';
import React from 'react';

type Variant = 'flat' | 'elevated' | 'outlined' | 'muted';
type Padding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

const variantMap: Record<Variant, { background: string; border: string; boxShadow: string }> = {
  flat:     { background: 'var(--color-surface)',  border: 'none',                          boxShadow: 'none'             },
  elevated: { background: 'var(--color-surface)',  border: 'none',                          boxShadow: 'var(--shadow-sm)' },
  outlined: { background: 'var(--color-surface)',  border: '1px solid var(--color-border)', boxShadow: 'none'             },
  muted:    { background: 'var(--color-bg-muted)', border: 'none',                          boxShadow: 'none'             },
};

const paddingMap: Record<Padding, string> = {
  none: '0',
  sm:   'var(--space-4)',
  md:   'var(--space-6)',
  lg:   'var(--space-8)',
  xl:   'var(--space-12)',
};

interface CardProps {
  variant?: Variant;
  padding?: Padding;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card({ variant = 'elevated', padding = 'md', onClick, children, style = {} }: CardProps) {
  const [hovered, setHovered] = React.useState(false);
  const v = variantMap[variant];
  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => isClickable && setHovered(true)}
      onMouseLeave={() => isClickable && setHovered(false)}
      style={{
        background: v.background, border: v.border,
        boxShadow: isClickable && hovered ? 'var(--shadow-md)' : v.boxShadow,
        borderRadius: 'var(--radius-lg)', padding: paddingMap[padding],
        transform: isClickable && hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
        cursor: isClickable ? 'pointer' : 'default',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
