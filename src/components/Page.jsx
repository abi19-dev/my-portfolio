import { bandFor } from '../album';
import { Contents, Cover, Profile } from './pages/IntroPages';
import { Club, ClubWork, ExpOpener } from './pages/ClubPages';
import { ProjCarousel, ProjIndex, ProjInfo, ProjLearn, ProjMockup, ProjOpener } from './pages/ProjectPages';
import { Contact, Thanks } from './pages/OutroPages';

const BODIES = {
  cover: Cover,
  contents: Contents,
  profile: Profile,
  expOpener: ExpOpener,
  club: Club,
  clubWork: ClubWork,
  projOpener: ProjOpener,
  projIndex: ProjIndex,
  projMockup: ProjMockup,
  projInfo: ProjInfo,
  projLearn: ProjLearn,
  projCarousel: ProjCarousel,
  thanks: Thanks,
  contact: Contact,
};

// One album page. `side` is 'L' or 'R' inside a two-page spread, 'S' when shown alone.
// `motion` holds the animation classes for how the page arrives (see index.css).
export default function Page({ index, page, side, motion, style, album }) {
  const Body = BODIES[page.type];
  const band = bandFor(page);
  const classes = ['page', `side-${side}`, page.type === 'cover' && 'is-cover', motion];

  return (
    <section className={classes.filter(Boolean).join(' ')} style={style} aria-label={page.label}>
      {band && (
        <div className="band" style={{ background: band.band, color: band.fg }}>
          <span className="band-title">{band.title}</span>
          <span className="band-sub">{band.sub}</span>
        </div>
      )}
      <div className="page-body">
        <Body page={page} album={album} />
      </div>
      {band && (
        <div className="page-foot">
          <span>Abdulah Đulović · Album 2026</span>
          <span className="page-num">{index}</span>
        </div>
      )}
    </section>
  );
}
