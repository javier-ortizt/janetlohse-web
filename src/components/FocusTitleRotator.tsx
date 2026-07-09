'use client';

import React from 'react';

const phrases = [
  'pasa inadvertido',
  'se expresa en silencio',
  'habita entre líneas',
].map(text => ({ text, words: text.split(' ') }));

export function FocusTitleRotator() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % phrases.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <h2 className="focus-title" aria-label="Observar lo que pasa inadvertido, se expresa en silencio y habita entre líneas">
      <span className="focus-title-fixed">Observar lo que</span>
      <span className="focus-title-rotator" aria-hidden="true">
        {phrases.map((phrase, phraseIndex) => (
          <span
            key={phrase.text}
            className={`focus-title-current${phraseIndex === index ? ' focus-title-current-active' : ''}`}
          >
            {phrase.words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="focus-title-word"
                style={{ '--word-index': wordIndex } as React.CSSProperties}
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </span>
    </h2>
  );
}
