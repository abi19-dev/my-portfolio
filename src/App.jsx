import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LAST, PAGES, SPREADS, SPREAD_OF, spreadImages } from './album';
import { preload } from './images';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import Page from './components/Page';
import Lightbox from './components/Lightbox';

const STORAGE_KEY = 'dulovic-album-page';
const PAGE_W = 560;
const PAGE_H = 780;
const CHROME_H = 56 + 68 + 28; // top bar + bottom bar + breathing room
const TURN_MS = 900; // keep in sync with the turn* animations in index.css

function readSavedPage() {
  try {
    const v = parseInt(localStorage.getItem(STORAGE_KEY), 10);
    if (v >= 0 && v <= LAST) return v;
  } catch { /* storage unavailable */ }
  return 0;
}

function savePage(pg) {
  try { localStorage.setItem(STORAGE_KEY, String(pg)); } catch { /* storage unavailable */ }
}

// Wide screens show two-page spreads, mid-size screens one scaled page,
// and small screens a single page that fills the width and scrolls.
function computeLayout(w, h) {
  const availH = h - CHROME_H;
  if (w >= 1000) {
    const scale = Math.min((w - 64) / (PAGE_W * 2), availH / PAGE_H, 1.3);
    return { mode: 'spread', scale, width: PAGE_W * 2 };
  }
  const scale = Math.min((w - 24) / PAGE_W, availH / PAGE_H, 1.3);
  if (scale >= 0.8) return { mode: 'single', scale, width: PAGE_W };
  return { mode: 'flow', minHeight: Math.max(availH, 520) };
}

function useViewport() {
  const [size, setSize] = useState(() => ({ w: window.innerWidth, h: window.innerHeight }));
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return size;
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Where each page sits in spread mode, keyed by page index. While a page turn is
// running both spreads are mounted: the turning sheet is the old page on its front
// and the new page on its back, each hiding its backface, over the two pages that stay put.
function spreadRoles(turn, curSpread) {
  if (turn) {
    const [oL, oR] = SPREADS[turn.from];
    const [nL, nR] = SPREADS[turn.to];
    return turn.fwd
      ? { [oL]: { left: 0, z: 1 }, [nR]: { left: PAGE_W, z: 1 },
          [oR]: { left: PAGE_W, z: 3, motion: 'flip front-fwd' }, [nL]: { left: 0, z: 3, motion: 'flip back-fwd' } }
      : { [nL]: { left: 0, z: 1 }, [oR]: { left: PAGE_W, z: 1 },
          [oL]: { left: 0, z: 3, motion: 'flip front-back' }, [nR]: { left: PAGE_W, z: 3, motion: 'flip back-back' } };
  }
  const [l, r] = SPREADS[curSpread];
  // The cover is a spread of its own and sits centred.
  return r == null ? { [l]: { left: PAGE_W / 2, z: 1, motion: 'turn-fwd' } } : { [l]: { left: 0, z: 1 }, [r]: { left: PAGE_W, z: 1 } };
}

function App() {
  const { w, h } = useViewport();
  const layout = computeLayout(w, h);
  const spread = layout.mode === 'spread';
  const flow = layout.mode === 'flow';
  const reducedMotion = useMemo(prefersReducedMotion, []);

  const [nav, setNav] = useState(() => {
    const pg = readSavedPage();
    return { pg, dir: 1, turn: null, visited: [SPREAD_OF[pg]] };
  });
  const [lightbox, setLightbox] = useState(null);
  const [slideIdx, setSlideIdx] = useState({});

  const { pg } = nav;
  const curSpread = SPREAD_OF[pg];

  const goTo = useCallback(target => {
    target = Math.max(0, Math.min(LAST, target));
    if (spread) target = SPREADS[SPREAD_OF[target]][0];
    if (target === pg) return;
    const fwd = target > pg;
    const sp = SPREAD_OF[target];
    const from = SPREAD_OF[pg];
    // Pages turn in 3D only between two full spreads, never onto or off the cover.
    const turn = spread && !reducedMotion && sp !== 0 && from !== 0 && sp !== from
      ? { key: Date.now(), fwd, from, to: sp }
      : null;
    setNav(n => ({
      pg: target,
      dir: fwd ? 1 : -1,
      turn,
      visited: n.visited.includes(sp) ? n.visited : [...n.visited, sp],
    }));
    savePage(target);
    if (flow) window.scrollTo(0, 0);
  }, [spread, flow, pg, reducedMotion]);

  // Fetch the neighbouring spreads' images so the next flip lands on loaded stickers.
  useEffect(() => {
    preload(spreadImages(curSpread + 1));
    preload(spreadImages(curSpread - 1));
  }, [curSpread]);

  // Once the turn has played, drop the outgoing spread.
  useEffect(() => {
    if (!nav.turn) return;
    const { key } = nav.turn;
    const t = setTimeout(() => setNav(n => (n.turn?.key === key ? { ...n, turn: null } : n)), TURN_MS + 40);
    return () => clearTimeout(t);
  }, [nav.turn]);

  const next = useCallback(() => {
    if (!spread) goTo(pg + 1);
    else if (curSpread < SPREADS.length - 1) goTo(SPREADS[curSpread + 1][0]);
  }, [spread, pg, curSpread, goTo]);

  const prev = useCallback(() => {
    if (!spread) goTo(pg - 1);
    else if (curSpread > 0) goTo(SPREADS[curSpread - 1][0]);
  }, [spread, pg, curSpread, goTo]);

  // Arrow keys flip pages; while the lightbox is open it handles the keys itself.
  useEffect(() => {
    if (lightbox) return;
    const onKey = e => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, next, prev]);

  const touch = useRef(null);
  const onTouchStart = e => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = e => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x, dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? next : prev)();
    touch.current = null;
  };

  const openLightbox = useCallback((list, i) => setLightbox({ list, i }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const setSlide = useCallback((id, value) => {
    setSlideIdx(s => ({ ...s, [id]: typeof value === 'function' ? value(s[id] || 0) : value }));
  }, []);

  const album = { goTo, next, openLightbox, slideIdx, setSlide, flow, lightboxOpen: !!lightbox, reducedMotion };

  const roles = spread ? spreadRoles(nav.turn, curSpread) : null;
  const visible = spread ? Object.keys(roles).map(Number).sort((a, b) => a - b) : [pg];
  const sideOf = i => {
    const s = SPREADS[SPREAD_OF[i]];
    return spread && s.length === 2 ? (s[0] === i ? 'L' : 'R') : 'S';
  };
  const pageMotion = i => (spread ? roles[i].motion : nav.dir < 0 ? 'turn-back' : 'turn-fwd');
  const pageStyle = i => (spread ? { left: roles[i].left, zIndex: roles[i].z } : flow ? { minHeight: layout.minHeight } : undefined);

  const effective = spread ? SPREADS[curSpread][0] : pg;
  const pageLabel = spread
    ? (curSpread === 0 ? 'Cover' : `Pages ${SPREADS[curSpread][0]}–${SPREADS[curSpread][1]} / ${LAST}`)
    : (pg === 0 ? 'Cover' : `Page ${pg} / ${LAST}`);

  return (
    <div className={`album mode-${layout.mode}`}>
      <Header current={effective} showBrandText={w >= 720} goTo={goTo} />

      <main className="stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="stage-outer"
          style={flow ? undefined : { width: layout.width * layout.scale, height: PAGE_H * layout.scale }}
        >
          <div
            className="stage-inner"
            style={flow ? undefined : { width: layout.width, transform: `scale(${layout.scale})` }}
          >
            {visible.map(i => (
              <Page
                key={i}
                index={i}
                page={PAGES[i]}
                side={sideOf(i)}
                motion={pageMotion(i)}
                style={pageStyle(i)}
                album={album}
              />
            ))}
          </div>
        </div>
      </main>

      <BottomBar
        pageLabel={pageLabel}
        currentSpread={curSpread}
        visited={nav.visited}
        atStart={spread ? curSpread === 0 : pg === 0}
        atEnd={spread ? curSpread === SPREADS.length - 1 : pg === LAST}
        prev={prev}
        next={next}
        goTo={goTo}
      />

      {lightbox && <Lightbox state={lightbox} onChange={setLightbox} onClose={closeLightbox} />}
    </div>
  );
}

export default App;
