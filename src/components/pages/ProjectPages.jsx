import { useEffect, useState } from 'react';
import { PROJECTS, R2, ROTS, pad2 } from '../../data';
import { PROJECT_PAGE, placed } from '../../album';
import { Badge, Foil } from '../Sticker';
import LoadingImg from '../LoadingImg';
import { useImage, useLoaded } from '../../images';

const INTERVAL = 4000;

// Custom properties the project pages use for their accent colour and pale background.
const projectVars = p => ({ '--c': p.color, '--tint': p.tint });

function Logo({ p, className, small }) {
  return (
    <span className={className} style={{ background: p.logoBg, padding: small ? p.logoPadSm : p.logoPad }}>
      <LoadingImg src={p.logo} alt={`${p.name} logo`} style={{ objectFit: p.logoFit, transform: `scale(${p.logoScale})` }} />
    </span>
  );
}

export function ProjOpener({ album }) {
  const i = PROJECTS.findIndex(p => p.star);
  const star = PROJECTS[i];
  return (
    <div className="page-stack">
      <span className="chapter red">Chapter 03</span>
      <h2 className="big-title">Projects</h2>
      <p className="chapter-lede">Six projects, two spreads each: the mockup and the facts, then what I learned and the real screens.</p>
      <button type="button" className="sticker star-card" onClick={() => album.goTo(PROJECT_PAGE[i])}>
        <span className="star-card-logo" style={{ background: star.logoBg }}>
          <LoadingImg src={star.logo} alt={`${star.name} logo`} style={{ transform: `scale(${star.logoScale})` }} />
          <Foil />
        </span>
        <span className="star-card-text">
          <span className="star-card-kicker">★ Most popular</span>
          <span className="star-card-name">{star.name}</span>
          <span className="star-card-desc">13,000+ users · #1 Panini trading platform in BiH</span>
        </span>
        <span className="star-card-page">p.{pad2(PROJECT_PAGE[i])} →</span>
      </button>
    </div>
  );
}

export function ProjIndex({ album }) {
  return (
    <div className="squad">
      {PROJECTS.map((p, i) => (
        <button
          key={p.id}
          type="button"
          className="sticker squad-card"
          style={placed(ROTS[i], 120 + i * 80 + 'ms')}
          onClick={() => album.goTo(PROJECT_PAGE[i])}
        >
          <span className="squad-card-art" style={{ background: p.tint }}>
            <Logo p={p} className="squad-card-logo" small />
            {p.star && <Foil />}
            {p.star && <span className="squad-card-top">★ Top</span>}
          </span>
          <span className="squad-card-plate" style={{ background: p.color }}>
            <span className="squad-card-name">{p.name}</span>
            <span className="squad-card-kind">{p.kind}</span>
          </span>
          <Badge size="sm" tone="yellow">{p.num}</Badge>
        </button>
      ))}
    </div>
  );
}

export function ProjMockup({ page, album }) {
  const p = PROJECTS[page.proj];
  return (
    <div className="page-stack centered" style={projectVars(p)}>
      <button
        type="button"
        className="sticker mockup"
        onClick={() => album.openLightbox([{ src: R2 + p.mockup, alt: p.name + ' mockup' }], 0)}
      >
        <span className="mockup-art">
          <LoadingImg
            src={R2 + (album.flow ? p.mockupMobile : p.mockup)}
            alt={`${p.name} mockup`}
            label={`Sticking ${p.name}…`}
            pop
          />
          <Foil soft />
        </span>
        <span className="mockup-caption">
          <span className="mockup-name">{p.name}</span>
          <span className="mockup-kind">{p.kind}</span>
        </span>
        <Badge size="lg" tone="yellow">{p.num}</Badge>
      </button>
      <span className="hint">Tap the sticker to enlarge</span>
    </div>
  );
}

export function ProjInfo({ page, album }) {
  const p = PROJECTS[page.proj];
  return (
    <div className="page-stack info" style={projectVars(p)}>
      <div className="info-head">
        <div className="sticker info-logo">
          <Logo p={p} className="info-logo-img" />
        </div>
        {p.star && <span className="info-star">★ Most popular · 13k+ users</span>}
      </div>
      <div className="info-title">
        <h3>{p.name}</h3>
        <p>{p.tagline}</p>
      </div>
      <p className="info-summary">{p.summary}</p>
      <div className="info-facts">
        <div className="info-fact"><div>Role</div><div>{p.role}</div></div>
        <div className="info-fact"><div>When</div><div>{p.period}</div></div>
      </div>
      <div className="info-tags">
        {p.tags.map(t => <span key={t}>{t}</span>)}
      </div>
      <div className="info-actions">
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="pill-btn solid">Visit {p.linkLabel} ↗</a>
        )}
        <button type="button" className="pill-btn outline" onClick={album.next}>What I learned →</button>
      </div>
    </div>
  );
}

export function ProjLearn({ page }) {
  const p = PROJECTS[page.proj];
  return (
    <div className="page-stack learn" style={projectVars(p)}>
      <span className="chapter project">Project {p.num} · Notes</span>
      <h3 className="learn-title">What did<br />I learn?</h3>
      <ol className="learn-list">
        {p.learn.map((text, i) => (
          <li key={i} style={placed(ROTS[i + 3], 180 + i * 110 + 'ms')}>
            <span className="learn-num">{i + 1}</span>
            <span>{text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// A carousel screen; it only shows once it is both current and loaded.
function Slide({ slide, current, onOpen }) {
  const [ready, imgProps] = useImage(slide.src);
  const classes = ['slide', current && 'current', current && ready && 'shown'].filter(Boolean).join(' ');
  return <img src={slide.src} alt={slide.alt} className={classes} onClick={onOpen} {...imgProps} />;
}

export function ProjCarousel({ page, album }) {
  const p = PROJECTS[page.proj];
  const n = p.slides.length;
  const cur = album.slideIdx[p.id] || 0;
  const curReady = useLoaded(p.slides[cur].src);
  const [hovered, setHovered] = useState(false);
  const { setSlide, lightboxOpen, reducedMotion } = album;
  const go = d => setSlide(p.id, c => (c + d + n) % n);

  useEffect(() => {
    if (hovered || lightboxOpen || reducedMotion) return;
    const id = setInterval(() => setSlide(p.id, c => (c + 1) % n), INTERVAL);
    return () => clearInterval(id);
  }, [hovered, lightboxOpen, reducedMotion, setSlide, p.id, n]);

  const rows = Math.ceil(n / 8);
  const height = album.flow ? 320 : Math.min(470, 560 - rows * 58);

  return (
    <div
      className="page-stack centered"
      style={projectVars(p)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sticker screens">
        <div className="screens-stage" style={{ height }}>
          {!curReady && <span className="slot" aria-hidden="true">Sticking screen {pad2(cur + 1)} / {pad2(n)}…</span>}
          {p.slides.map((s, i) => (
            <Slide key={s.src} slide={s} current={i === cur} onOpen={() => album.openLightbox(p.slides, i)} />
          ))}
          <span className="screens-counter">{pad2(cur + 1)} / {pad2(n)}</span>
          <div className="screens-controls">
            <button type="button" aria-label="Previous screen" onClick={() => go(-1)}>←</button>
            <button type="button" aria-label="Next screen" onClick={() => go(1)}>→</button>
          </div>
        </div>
      </div>
      <div className="thumbs">
        {p.slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show ${s.alt}`}
            className={i === cur ? 'thumb active' : 'thumb'}
            onClick={() => setSlide(p.id, i)}
          >
            <LoadingImg src={s.src} alt="" />
          </button>
        ))}
      </div>
      <span className="hint left">Tap a screen to enlarge</span>
    </div>
  );
}
