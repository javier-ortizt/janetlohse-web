'use client';
import React from 'react';
import { Input } from '@/components/ds';
import { Button } from '@/components/ds';

const servicios = [
  'Charla o conversatorio',
  'Taller',
  'Diseño de servicios / consultoría',
  'Moderación o conducción',
  'Entrevista / medios',
  'Colaboración de marca',
  'Otro',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [servicio, setServicio] = React.useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setServicio('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        background: 'var(--olive-50)', border: '1px solid var(--olive-200)',
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '28px',
          letterSpacing: '-0.02em', color: 'var(--olive-700)', marginBottom: '12px',
        }}>
          Mensaje enviado
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--olive-600)', lineHeight: 1.6 }}>
          Gracias por escribir. Te respondo en menos de 48 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div className="grid-2-sm">
        <Input label="Nombre" name="nombre" placeholder="Tu nombre" required />
        <Input label="Institución u organización" name="organizacion" placeholder="Empresa, municipio, ONG…" />
      </div>
      <Input label="Correo electrónico" name="email" type="email" placeholder="correo@ejemplo.com" required />
      <Input label="Cargo o rol" name="cargo" placeholder="Directora de RRHH, coordinadora cultural…" />

      {/* Servicio */}
      <div>
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' as unknown as number,
          fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1-5)',
          color: 'var(--color-text-primary)',
        }}>
          Tipo de servicio <span style={{ color: 'var(--burgundy-500)', marginLeft: '3px' }}>*</span>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {servicios.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => setServicio(s)}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
                padding: '7px 16px', borderRadius: 'var(--radius-full)',
                border: `1.5px solid ${servicio === s ? 'var(--color-accent-1)' : 'var(--color-border)'}`,
                background: servicio === s ? 'var(--burgundy-50)' : 'transparent',
                color: servicio === s ? 'var(--burgundy-700)' : 'var(--color-text-secondary)',
                cursor: 'pointer', transition: 'all var(--transition-fast)',
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <input type="hidden" name="servicio" value={servicio} />
      </div>

      <Input
        label="Mensaje"
        name="mensaje"
        multiline
        rows={5}
        placeholder="Cuéntame brevemente el contexto: qué estás organizando, para cuántas personas, en qué fecha aproximada…"
        required
      />

      {status === 'error' && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--burgundy-500)' }}>
          Hubo un error al enviar. Intenta de nuevo o escríbeme directamente.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'sending'}
        style={{ background: 'var(--burgundy-500)', alignSelf: 'flex-start' }}
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </Button>
    </form>
  );
}
