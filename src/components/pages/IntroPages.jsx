import { CLUBS, PHOTO, PROJECTS, ROTS, STATS, TECH, pad2 } from '../../data';
import { CLUB_PAGE, LAST, PG, PROJECT_PAGE, placed } from '../../album';
import { Badge, Foil } from '../Sticker';
import LoadingImg from '../LoadingImg';

export function Cover({ album }) {
  return (
    <div className="cover">
      <span className="cover-stripe navy" aria-hidden="true" />
      <span className="cover-stripe red" aria-hidden="true" />
      <div className="cover-top">
        <span className="cover-pill">Official sticker album</span>
        <span className="cover-edition">2026 edition</span>
      </div>
      <div className="cover-title">
        <h1>Abdulah<br />Đulović</h1>
        <p>Software Engineer · Sarajevo, BiH</p>
      </div>
      <div className="sticker cover-photo">
        <div className="cover-photo-img">
          <LoadingImg src={PHOTO} alt="Abdulah Đulović" label="Sticking…" pop />
          <Foil />
        </div>
        <div className="cover-photo-caption">
          <span>Đulović</span>
          <span>Full-stack</span>
        </div>
        <Badge size="lg" tone="red">01</Badge>
      </div>
      <div className="cover-bottom">
        <span>{CLUBS.length} clubs · {PROJECTS.length} projects · {LAST} pages</span>
        <button type="button" className="cover-open" onClick={album.next}>Open the album →</button>
      </div>
    </div>
  );
}

const CONTENTS = [
  { main: true, num: '01', label: 'Player profile', page: PG.profile },
  { main: true, num: '02', label: 'Clubs', page: PG.clubs },
  ...CLUBS.map((c, i) => ({ label: c.name, page: CLUB_PAGE[i] })),
  { main: true, num: '03', label: 'Projects', page: PG.projects },
  ...PROJECTS.map((p, i) => ({ label: p.name, page: PROJECT_PAGE[i] })),
  { main: true, num: '04', label: 'Contact', page: PG.thanks },
];

export function Contents({ album }) {
  return (
    <div className="page-stack contents">
      <h2 className="contents-title">Contents</h2>
      <div className="contents-rows">
        {CONTENTS.map(r => (
          <button
            key={r.label}
            type="button"
            className={r.main ? 'contents-row main' : 'contents-row sub'}
            onClick={() => album.goTo(r.page)}
          >
            {r.main && <span className="contents-num">{r.num}</span>}
            <span className="contents-label">{r.label}</span>
            <span className="contents-leader" aria-hidden="true" />
            <span className="contents-page">{pad2(r.page)}</span>
          </button>
        ))}
      </div>
      <div className="contents-hint">
        Flip with the <strong>← →</strong> keys, a swipe, or the arrows below. Tap any sticker to open it.
      </div>
    </div>
  );
}

export function Profile() {
  return (
    <div className="page-stack profile">
      <div className="profile-top">
        <div className="sticker profile-photo">
          <div className="profile-photo-img">
            <LoadingImg src={PHOTO} alt="Abdulah Đulović" label="Sticking…" pop />
            <Foil />
          </div>
          <div className="profile-photo-name">Abdulah Đulović</div>
          <Badge size="md" tone="yellow">01</Badge>
        </div>
        <dl className="stats">
          {STATS.map(s => (
            <div key={s.k} className="stat">
              <dt>{s.k}</dt>
              <dd>{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="profile-text">
        I’m a 23-year-old software engineer interested in programming and information technologies. Almost every step I take in daily life, technology comes into sight — and I’m continuously mesmerized by the effect it has on our everyday society.
      </p>
      <div className="skills">
        <span className="kicker">Skill stickers</span>
        <div className="skill-list">
          {TECH.map((t, i) => (
            <span key={t} className="skill" style={placed(ROTS[i % ROTS.length], 260 + i * 55 + 'ms')}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
