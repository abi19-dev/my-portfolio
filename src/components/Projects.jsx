import { PROJECTS, R2, pad2 } from '../data';
import Carousel from './Carousel';

const TOTAL = pad2(PROJECTS.length);

function Logo({ p, className, small }) {
  return (
    <span className={className} style={{ background: p.logoBg, padding: small ? p.logoPadSm : p.logoPad }}>
      <img src={p.logo} alt={small ? '' : `${p.name} logo`} style={{ objectFit: p.logoFit, transform: `scale(${p.logoScale})` }} />
    </span>
  );
}

function Project({ p, index, lightboxOpen, onOpen }) {
  const learnId = p.id + '-learn';

  return (
    <article className="project">
      <div id={p.id} className="split split-a">
        <div className="card mockup" onClick={() => onOpen([{ src: R2 + p.mockup, alt: p.name }], 0)}>
          <picture>
            <source media="(max-width: 719px)" srcSet={R2 + p.mockupMobile} />
            <img src={R2 + p.mockup} alt={`${p.name} mockup`} />
          </picture>
        </div>
        <div className="card project-info">
          <div className="project-meta">
            <span className="mono-label accent">Project {pad2(index + 1)} / {TOTAL}</span>
            <span className="kind-pill">{p.kind}</span>
          </div>
          <div className="project-title">
            <Logo p={p} className="project-logo" />
            <h3>{p.name}</h3>
          </div>
          <p className="project-tagline">{p.tagline}</p>
          <p className="project-summary">{p.summary}</p>
          <div className="project-facts">
            <div><span className="mono-label">Role</span><span>{p.role}</span></div>
            <div><span className="mono-label">When</span><span>{p.period}</span></div>
          </div>
          <div className="tags">
            {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="project-actions">
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit {p.linkLabel} ↗
              </a>
            )}
            <a href={'#' + learnId} className="btn btn-secondary">Learnings &amp; screens ↓</a>
          </div>
        </div>
      </div>

      <div id={learnId} className="split split-b">
        <div className="card learnings">
          <span className="mono-label">{p.name}</span>
          <h4>What did I learn?</h4>
          <ol>
            {p.learn.map((text, i) => (
              <li key={i}>
                <span className="learn-num">{i + 1}</span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </div>
        <Carousel slides={p.slides} halted={lightboxOpen} onOpen={onOpen} />
      </div>
    </article>
  );
}

export default function Projects({ lightboxOpen, onOpen }) {
  return (
    <section id="projects" className="stack">
      <div className="banner banner-projects">
        <div className="banner-row">
          <div className="banner-heading">
            <span className="mono-label">03 — Chapter</span>
            <h2 className="chapter-title">Projects</h2>
          </div>
          <span className="banner-note">Each one with the mockup, what I learned, and the real screens.</span>
        </div>
        <div className="project-index">
          {PROJECTS.map(p => (
            <a key={p.id} href={'#' + p.id} className="index-item">
              <Logo p={p} className="index-logo" small />
              <span className="index-text">
                <span className="index-name">{p.name}</span>
                <span className="index-kind">{p.kind}</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {PROJECTS.map((p, i) => (
        <Project key={p.id} p={p} index={i} lightboxOpen={lightboxOpen} onOpen={onOpen} />
      ))}
    </section>
  );
}
