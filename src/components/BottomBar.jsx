import { SPREADS } from '../album';

export default function BottomBar({ pageLabel, currentSpread, visited, atStart, atEnd, prev, next, goTo }) {
  return (
    <div className="bottombar">
      <button type="button" className="flip" aria-label="Previous page" disabled={atStart} onClick={prev}>←</button>
      <div className="progress">
        <div className="progress-labels">
          <span>{pageLabel}</span>
          <span className="collected">{visited.length}/{SPREADS.length} collected</span>
        </div>
        <div className="segments">
          {SPREADS.map((s, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to spread ${i + 1}`}
              className={i === currentSpread ? 'segment current' : visited.includes(i) ? 'segment seen' : 'segment'}
              onClick={() => goTo(s[0])}
            />
          ))}
        </div>
      </div>
      <button type="button" className="flip" aria-label="Next page" disabled={atEnd} onClick={next}>→</button>
    </div>
  );
}
