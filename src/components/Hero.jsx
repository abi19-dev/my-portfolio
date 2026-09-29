import { CONTACT, EXPERIENCES, PROJECTS, R2 } from '../data';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="card hero-name">
        <div className="hero-top">
          <span className="status-pill"><span className="status-dot" />Open to new roles</span>
          <span className="mono-label">Portfolio · 2026</span>
        </div>
        <div className="hero-intro">
          <h1 className="hero-title">Abdulah Đulović</h1>
          <p className="hero-lede">
            Software engineer from Sarajevo building full-stack web, mobile and cloud products — from Figma to production.
          </p>
        </div>
      </div>

      <div className="hero-photo">
        <img src={R2 + 'Ja.jpg'} alt="Abdulah Đulović" />
        <div className="photo-tag">Sarajevo, BiH</div>
      </div>

      <nav className="card hero-toc" aria-label="Contents">
        <span className="mono-label">Contents</span>
        <div className="toc-list">
          <a href="#about" className="toc-link bordered">
            <span className="toc-label"><span className="toc-num">01</span>About me</span>
            <span className="toc-meta">→</span>
          </a>
          <a href="#experience" className="toc-link bordered">
            <span className="toc-label"><span className="toc-num">02</span>Experience</span>
            <span className="toc-meta">{EXPERIENCES.length}</span>
          </a>
          <a href="#projects" className="toc-link">
            <span className="toc-label"><span className="toc-num">03</span>Projects</span>
            <span className="toc-meta">{PROJECTS.length}</span>
          </a>
          <div className="toc-projects">
            {PROJECTS.map(p => (
              <a key={p.id} href={'#' + p.id}>{p.name}</a>
            ))}
          </div>
          <a href="#contact" className="toc-link">
            <span className="toc-label"><span className="toc-num">04</span>Contact</span>
            <span className="toc-meta">→</span>
          </a>
        </div>
      </nav>

      <div className="hero-now">
        <span className="mono-label">Now</span>
        <div className="now-body">
          <span className="now-title">Open to new full-stack roles</span>
          <span className="now-text">Previously Software Engineer at RUBICON, Dec 2025 – Sep 2026.</span>
        </div>
      </div>

      <div className="card hero-contact">
        <span className="mono-label">Get in touch</span>
        <a href={'mailto:' + CONTACT.email} className="plain-link break">{CONTACT.email}</a>
        <a href={CONTACT.phoneHref} className="plain-link">{CONTACT.phone}</a>
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="plain-link">
          github.com/{CONTACT.githubHandle} ↗
        </a>
      </div>
    </section>
  );
}
