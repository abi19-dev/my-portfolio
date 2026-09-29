// Holographic shine that sweeps across "foil" stickers.
export function Foil({ soft }) {
  return <span className={soft ? 'foil soft' : 'foil'} aria-hidden="true" />;
}

// Round number badge stuck to a sticker's top-left corner.
// size: 'lg' | 'md' | 'sm'   tone: 'red' | 'yellow' | 'green'
export function Badge({ size = 'md', tone = 'yellow', children }) {
  return <span className={`badge badge-${size} badge-${tone}`}>{children}</span>;
}
