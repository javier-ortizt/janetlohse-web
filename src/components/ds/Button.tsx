'use client';
import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const variantMap: Record<Variant, { bg: string; hover: string; color: string; border: string }> = {
  primary:   { bg: 'var(--color-accent-1)',   hover: 'var(--color-accent-1-dark)',  color: 'var(--color-text-inverse)', border: 'none' },
  secondary: { bg: 'var(--color-bg-muted)',    hover: 'var(--neutral-200)',          color: 'var(--color-text-primary)', border: 'none' },
  outline:   { bg: 'transparent',              hover: 'var(--color-bg-subtle)',      color: 'var(--color-text-primary)', border: '1.5px solid var(--color-border-strong)' },
  ghost:     { bg: 'transparent',              hover: 'var(--color-bg-muted)',       color: 'var(--color-text-secondary)', border: 'none' },
};

const sizeMap: Record<Size, { padding: string; height: string; fontSize: string; borderRadius: string; gap: string }> = {
  sm: { padding: '0 14px', height: '32px', fontSize: 'var(--text-sm)',   borderRadius: 'var(--radius-sm)', gap: '6px'  },
  md: { padding: '0 20px', height: '40px', fontSize: 'var(--text-base)', borderRadius: 'var(--radius-md)', gap: '8px'  },
  lg: { padding: '0 28px', height: '48px', fontSize: 'var(--text-lg)',   borderRadius: 'var(--radius-md)', gap: '10px' },
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children, style = {}, type = 'button' }: ButtonProps) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const v = variantMap[variant];
  const s = sizeMap[size];

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, fontFamily: 'var(--font-body)',
        fontWeight: 'var(--font-weight-semibold)', fontSize: s.fontSize,
        lineHeight: 1, letterSpacing: 'var(--tracking-wide)',
        height: s.height, padding: s.padding, borderRadius: s.borderRadius,
        background: hovered && !disabled ? v.hover : v.bg,
        color: disabled ? 'var(--color-text-disabled)' : v.color,
        border: v.border, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'background var(--transition-fast), transform var(--transition-fast)',
        outline: 'none', boxSizing: 'border-box',
        userSelect: 'none', whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
