import { useEffect } from 'react';

export default function Lightbox({ state, onChange, onClose }) {
  const { list, i } = state;
  const item = list[i];

  useEffect(() => {
    const n = list.length;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange({ list, i: (i + 1) % n });
      if (e.key === 'ArrowLeft') onChange({ list, i: (i - 1 + n) % n });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [list, i, onChange, onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <img src={item.src} alt={item.alt} />
      <div className="lightbox-caption">
        <span>{item.alt}</span>
        <span className="dim">Tap / Esc to close · ← → to browse</span>
      </div>
    </div>
  );
}
