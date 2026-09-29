import { CLUBS, ROTS, pad2 } from '../../data';
import { CLUB_PAGE, placed } from '../../album';
import { Badge, Foil } from '../Sticker';
import LoadingImg from '../LoadingImg';

export function ExpOpener({ album }) {
  return (
    <div className="page-stack">
      <span className="chapter green">Chapter 02</span>
      <h2 className="chapter-title">Professional<br />experience</h2>
      <p className="chapter-lede">From a first internship to a full-time engineering role.</p>
      <div className="club-history">
        <span className="kicker">Club history</span>
        {CLUBS.map((c, i) => (
          <button
            key={c.name}
            type="button"
            className="club-card"
            style={placed(i ? '1deg' : '-1deg', 200 + i * 120 + 'ms')}
            onClick={() => album.goTo(CLUB_PAGE[i])}
          >
            <span className="club-card-logo" style={{ background: c.logoBg, padding: c.logoPadSm }}>
              <LoadingImg src={c.logo} alt={`${c.name} logo`} style={{ objectFit: c.logoFit }} />
            </span>
            <span className="club-card-text">
              <span className="club-card-name">{c.name}</span>
              <span className="club-card-role">{c.role} · {c.years}</span>
            </span>
            <span className="club-card-page">p.{pad2(CLUB_PAGE[i])} →</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Club({ page }) {
  const c = CLUBS[page.club];
  return (
    <div className="page-stack">
      <div className="club-head">
        <div className="sticker club-logo">
          <div className="club-logo-img" style={{ background: c.logoBg, padding: c.logoPad }}>
            <LoadingImg src={c.logo} alt={`${c.name} logo`} style={{ objectFit: c.logoFit }} pop />
            <Foil />
          </div>
          <Badge size="md" tone="green">{c.num}</Badge>
        </div>
        <div className="club-title">
          <h3>{c.name}</h3>
          <span>{c.location}</span>
        </div>
      </div>
      <div className="club-roles">
        {c.roles.map(r => (
          <div key={r.title} className="club-role">
            <span className="club-role-title">{r.title}</span>
            <span className="club-role-period">{r.period}</span>
          </div>
        ))}
      </div>
      <div className="club-text">
        {c.text.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </div>
  );
}

export function ClubWork({ page }) {
  return (
    <div className="page-stack centered">
      {CLUBS[page.club].work.map((w, i) => (
        <div key={w.name} className="sticker work-card" style={placed(ROTS[i], 150 + i * 120 + 'ms')}>
          <div className="work-card-head">
            <span className="work-card-name">{w.name}</span>
            <span className="work-card-period">{w.period}</span>
          </div>
          <p>{w.desc}</p>
          <span className="work-card-stack">{w.stack}</span>
          <Badge size="sm" tone="green">{pad2(i + 1)}</Badge>
        </div>
      ))}
    </div>
  );
}
