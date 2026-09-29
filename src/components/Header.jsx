import { TABS } from '../album';

export default function Header({ current, showBrandText, goTo }) {
  let active = 0;
  TABS.forEach((t, i) => { if (t.page <= current) active = i; });

  return (
    <header className="topbar">
      <button type="button" className="brand" onClick={() => goTo(0)} aria-label="Back to cover">
        <span className="brand-mark">AĐ</span>
        {showBrandText && <span className="brand-text">Đulović · Sticker Album 2026</span>}
      </button>
      <nav className="tabs" aria-label="Album sections">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            type="button"
            className={i === active ? 'tab active' : 'tab'}
            aria-current={i === active ? 'page' : undefined}
            onClick={() => goTo(t.page)}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
