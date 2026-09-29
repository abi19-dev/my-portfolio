import { useState } from 'react';
import { PROJECTS } from '../data';

const MENU_ITEMS = [
  { href: '#about', label: 'About me', num: '01' },
  { href: '#experience', label: 'Experience', num: '02' },
  { href: '#projects', label: 'Projects', num: '03' },
  ...PROJECTS.map(p => ({ href: '#' + p.id, label: p.name, num: '', sub: true })),
  { href: '#contact', label: 'Contact', num: '04' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-bar">
        <a href="#home" className="brand">
          <span className="brand-mark">AĐ</span>Abdulah Đulović
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
        <button
          type="button"
          className="menu-button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-menu" className="menu-panel" aria-label="Mobile">
          {MENU_ITEMS.map(m => (
            <a key={m.href} href={m.href} onClick={closeMenu} className={m.sub ? 'menu-item sub' : 'menu-item'}>
              <span className="menu-num">{m.num}</span>
              {m.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
