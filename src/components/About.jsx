import { FACTS, TECH } from '../data';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="card about-main">
        <h2 className="section-label">01 — About me</h2>
        <p className="about-text">
          I’m a 23-year-old software engineer interested in programming and information technologies.
          I use Claude Code to plan, build and ship features faster.{' '}
          <span className="muted">
            Almost every step I take in daily life, technology comes into sight — and I’m continuously mesmerized by the effect it has on our everyday society.
          </span>
        </p>
        <div className="chips">
          {TECH.map(t => <span key={t} className="chip">{t}</span>)}
        </div>
      </div>
      <dl className="card facts">
        {FACTS.map(f => (
          <div key={f.k} className="fact">
            <dt className="mono-label">{f.k}</dt>
            <dd>{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
