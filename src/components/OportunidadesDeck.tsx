'use client';

import React from 'react';

const cards = [
  { text: 'Quieres fortalecer la recomendación y fidelización de tus clientes.', bg: 'var(--burgundy-500)', fg: 'var(--neutral-0)' },
  { text: 'Buscas crear una experiencia más amable para distintas necesidades sensoriales.', bg: 'var(--olive-300)', fg: 'var(--neutral-900)' },
  { text: 'Recibes comentarios sobre la atención de tu establecimiento.', bg: 'var(--petrol-500)', fg: 'var(--neutral-0)' },
  { text: 'Tu espacio se ve bien, pero la experiencia no se siente completamente coherente.', bg: 'var(--neutral-100)', fg: 'var(--neutral-900)' },
  { text: 'Quieres comprender mejor el recorrido de personas solas y acompañadas.', bg: 'var(--burgundy-300)', fg: 'var(--neutral-900)' },
  { text: 'Tus protocolos de atención varían según el equipo.', bg: 'var(--petrol-200)', fg: 'var(--neutral-900)' },
  { text: 'Estás por abrir, remodelar o actualizar un espacio o servicio.', bg: 'var(--olive-600)', fg: 'var(--neutral-0)' },
];

/** Cuántas tarjetas ya reveladas siguen asomando detrás de la del frente. */
const MAX_PEEK = 3;

const pad = (n: number) => String(n).padStart(2, '0');

export function OportunidadesDeck() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const { top, height } = section.getBoundingClientRect();
      const travel = height - window.innerHeight;

      // Sin recorrido (mobile: la sección no se fija) mostramos el mazo completo.
      if (travel <= 0) {
        setActive(cards.length - 1);
        return;
      }

      const progress = Math.min(Math.max(-top / travel, 0), 1);
      setActive(Math.min(Math.floor(progress * cards.length), cards.length - 1));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="deck-section"
      style={{ '--deck-count': cards.length } as React.CSSProperties}
    >
      <div className="deck-sticky">
        <div className="deck-inner">
          <header className="deck-head">
            <p className="deck-eyebrow">Oportunidades para mejorar</p>
            <h2 className="deck-title">Este servicio puede ser adecuado si:</h2>
            <p className="deck-counter" aria-hidden="true">
              <span className="deck-counter-current">{pad(active + 1)}</span>
              <span className="deck-counter-total">/ {pad(cards.length)}</span>
            </p>
          </header>

          <ul className="deck">
            {cards.map((card, index) => {
              const revealed = index <= active;
              return (
                <li
                  key={card.text}
                  className={[
                    'deck-card',
                    revealed ? 'is-revealed' : '',
                    index === active ? 'is-front' : '',
                  ].filter(Boolean).join(' ')}
                  style={{
                    '--depth': revealed ? Math.min(active - index, MAX_PEEK) : 0,
                    '--card-bg': card.bg,
                    '--card-fg': card.fg,
                    zIndex: index,
                  } as React.CSSProperties}
                >
                  <div className="deck-card-body">
                    <span className="deck-card-index">{pad(index + 1)}</span>
                    <p className="deck-card-text">{card.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
