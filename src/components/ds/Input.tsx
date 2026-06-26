'use client';
import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  hint?: string;
  disabled?: boolean;
  id?: string;
  multiline?: boolean;
  rows?: number;
  style?: React.CSSProperties;
  name?: string;
  required?: boolean;
}

export function Input({ label, placeholder, type = 'text', value, defaultValue, onChange, error, hint, disabled = false, id, multiline = false, rows = 4, style = {}, name, required }: InputProps) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const borderColor = error
    ? 'var(--burgundy-500)'
    : focused
    ? 'var(--petrol-400)'
    : 'var(--color-border-strong)';

  const boxShadow = focused
    ? error ? '0 0 0 3px var(--burgundy-100)' : '0 0 0 3px var(--petrol-100)'
    : 'none';

  const sharedStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-regular)',
    fontSize: 'var(--text-base)', lineHeight: 1.5,
    color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
    background: disabled ? 'var(--color-bg-muted)' : 'var(--color-surface)',
    border: `1.5px solid ${borderColor}`,
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-3)',
    width: '100%', outline: 'none', boxSizing: 'border-box' as const,
    boxShadow,
    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
    cursor: disabled ? 'not-allowed' : 'text',
    resize: 'vertical' as const,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1-5)', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)',
          fontSize: 'var(--text-sm)', lineHeight: 1.3,
          color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
        }}>
          {label}{required && <span style={{ color: 'var(--burgundy-500)', marginLeft: '3px' }}>*</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          id={inputId} placeholder={placeholder} value={value} defaultValue={defaultValue}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          disabled={disabled} rows={rows} name={name} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...sharedStyle, height: 'auto' }}
        />
      ) : (
        <input
          id={inputId} type={type} placeholder={placeholder} value={value} defaultValue={defaultValue}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          disabled={disabled} name={name} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...sharedStyle, height: '42px' }}
        />
      )}
      {(error || hint) && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
          color: error ? 'var(--burgundy-500)' : 'var(--color-text-tertiary)',
          lineHeight: 1.4,
        }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
