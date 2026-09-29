import { CLUBS, PHOTO, PROJECTS, R2 } from './data';

// Every page of the album in reading order, grouped into two-page spreads.
// The cover is a spread of its own.
export const PAGES = [];
export const SPREADS = [];
const add = page => (PAGES.push(page), PAGES.length - 1);

SPREADS.push([add({ type: 'cover', label: 'Cover' })]);
SPREADS.push([add({ type: 'contents', label: 'Contents' }), add({ type: 'profile', label: 'Player profile' })]);
SPREADS.push([add({ type: 'expOpener', label: 'Experience' }), add({ type: 'club', club: 0, label: 'RUBICON' })]);
SPREADS.push([add({ type: 'clubWork', club: 0, label: 'RUBICON · Work' }), add({ type: 'club', club: 1, label: 'SETEC' })]);
SPREADS.push([add({ type: 'projOpener', label: 'Projects' }), add({ type: 'projIndex', label: 'Project index' })]);
PROJECTS.forEach((p, i) => {
  SPREADS.push([add({ type: 'projMockup', proj: i, label: p.name + ' · Mockup' }), add({ type: 'projInfo', proj: i, label: p.name + ' · Info' })]);
  SPREADS.push([add({ type: 'projLearn', proj: i, label: p.name + ' · Learned' }), add({ type: 'projCarousel', proj: i, label: p.name + ' · Screens' })]);
});
SPREADS.push([add({ type: 'thanks', label: 'Thank you' }), add({ type: 'contact', label: 'Contact' })]);

export const LAST = PAGES.length - 1;

export const SPREAD_OF = [];
SPREADS.forEach((pages, s) => pages.forEach(pg => { SPREAD_OF[pg] = s; }));

const firstPage = match => PAGES.findIndex(match);

export const PG = {
  contents: firstPage(p => p.type === 'contents'),
  profile: firstPage(p => p.type === 'profile'),
  clubs: firstPage(p => p.type === 'expOpener'),
  projects: firstPage(p => p.type === 'projOpener'),
  thanks: firstPage(p => p.type === 'thanks'),
};

export const CLUB_PAGE = CLUBS.map((_, i) => firstPage(p => p.type === 'club' && p.club === i));
export const PROJECT_PAGE = PROJECTS.map((_, i) => firstPage(p => p.type === 'projMockup' && p.proj === i));

export const TABS = [
  { label: 'Cover', page: 0 },
  { label: 'Contents', page: PG.contents },
  { label: 'Profile', page: PG.profile },
  { label: 'Clubs', page: PG.clubs },
  { label: 'Projects', page: PG.projects },
  { label: 'Contact', page: PG.thanks },
];

// The images a spread shows first, so they can be fetched before the reader flips to it.
export function spreadImages(s) {
  const out = [];
  (SPREADS[s] || []).forEach(i => {
    const page = PAGES[i];
    if (page.type === 'cover' || page.type === 'profile') out.push(PHOTO);
    if (page.type === 'expOpener' || page.type === 'club') CLUBS.forEach(c => out.push(c.logo));
    if (page.type === 'projOpener' || page.type === 'projIndex') PROJECTS.forEach(p => out.push(p.logo));
    if (page.proj != null) {
      const p = PROJECTS[page.proj];
      out.push(R2 + p.mockup, R2 + p.mockupMobile, p.logo, p.slides[0].src, p.slides[1]?.src);
    }
  });
  return out.filter(Boolean);
}

// Inline style for a sticker that tilts by `rot` and pops in after `delay`.
export const placed = (rot, delay) => ({ '--rot': rot, animationDelay: delay });

const YELLOW = { band: '#FACC15', fg: '#14161C' };
const GREEN = { band: '#12804A', fg: '#FFFFFF' };
const RED = { band: '#C62834', fg: '#FFFFFF' };

// The coloured title band across the top of every page except the cover.
export function bandFor(page) {
  const p = page.proj != null ? PROJECTS[page.proj] : null;
  const c = page.club != null ? CLUBS[page.club] : null;
  const project = sub => ({ band: p.color, fg: '#FFFFFF', title: p.name, sub });
  switch (page.type) {
    case 'contents': return { ...YELLOW, title: 'Contents', sub: 'Index' };
    case 'profile': return { ...YELLOW, title: 'Player profile', sub: 'Chapter 01' };
    case 'expOpener': return { ...GREEN, title: 'Clubs', sub: 'Chapter 02' };
    case 'club': return { ...GREEN, title: c.name, sub: `Club ${c.num} · ${c.years}` };
    case 'clubWork': return { ...GREEN, title: c.name, sub: 'What I built there' };
    case 'projOpener': return { ...RED, title: 'Projects', sub: 'Chapter 03' };
    case 'projIndex': return { ...RED, title: 'The squad', sub: `${PROJECTS.length} projects` };
    case 'projMockup': return project(`Project ${p.num} · Mockup`);
    case 'projInfo': return project(`Project ${p.num} · Facts`);
    case 'projLearn': return project('What did I learn?');
    case 'projCarousel': return project('Screens');
    case 'thanks': return { ...YELLOW, title: 'Final whistle', sub: 'Chapter 04' };
    case 'contact': return { ...YELLOW, title: 'Contact', sub: "Let's trade" };
    default: return null;
  }
}
