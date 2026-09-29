import { useEffect, useState } from 'react';
import { pad2 } from '../data';

const INTERVAL = 4000;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Carousel({ slides, halted, onOpen }) {
  const [cur, setCur] = useState(0);
  const [hovered, setHovered] = useState(false);
  const n = slides.length;
  const go = d => setCur(c => (c + d + n) % n);

  useEffect(() => {
    if (hovered || halted || prefersReducedMotion()) return;
    const id = setInterval(() => setCur(c => (c + 1) % n), INTERVAL);
    return () => clearInterval(id);
  }, [hovered, halted, n]);

  return (
    <div className="card carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="carousel-stage">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            className={i === cur ? 'slide active' : 'slide'}
            onClick={() => onOpen(slides, i)}
          />
        ))}
        <div className="carousel-counter">{pad2(cur + 1)} / {pad2(n)}</div>
        <div className="carousel-controls">
          <button type="button" aria-label="Previous screen" onClick={() => go(-1)}>←</button>
          <button type="button" aria-label="Next screen" onClick={() => go(1)}>→</button>
        </div>
      </div>
      <div className="thumbs">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show ${s.alt}`}
            className={i === cur ? 'thumb active' : 'thumb'}
            onClick={() => setCur(i)}
          >
            <img src={s.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
