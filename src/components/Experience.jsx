import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="stack">
      <div className="banner banner-row">
        <div className="banner-heading">
          <span className="mono-label">02 — Chapter</span>
          <h2 className="chapter-title">Professional<br />Experience</h2>
        </div>
        <span className="banner-note">From a first internship to a full-time engineering role.</span>
      </div>

      {EXPERIENCES.map(e => (
        <article key={e.id} id={e.id} className="card exp">
          <div className="exp-head">
            <div className="exp-logo" style={{ background: e.logoBg, padding: e.logoPad }}>
              <img src={e.logo} alt={`${e.name} logo`} style={{ objectFit: e.logoFit }} />
            </div>
            <div className="exp-title">
              <h3>{e.name}</h3>
              <span>{e.location}</span>
            </div>
            <span className={e.current ? 'badge current' : 'badge'}>{e.badge}</span>
          </div>

          <div className="exp-body">
            <div className="exp-text">
              {e.text.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div className="exp-roles">
              {e.roles.map(r => (
                <div key={r.title} className="role">
                  <span className="role-title">{r.title}</span>
                  <span className="role-period">{r.period}</span>
                </div>
              ))}
            </div>
          </div>

          {e.work?.length > 0 && (
            <div className="exp-work">
              <span className="mono-label accent">What I built there</span>
              <div className="work-grid">
                {e.work.map(w => (
                  <div key={w.name} className="work">
                    <div className="work-head">
                      <span className="work-name">{w.name}</span>
                      <span className="work-period">{w.period}</span>
                    </div>
                    <p>{w.desc}</p>
                    <span className="work-stack">{w.stack}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
