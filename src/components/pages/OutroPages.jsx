import { CONTACT, CONTACTS, ROTS } from '../../data';
import { placed } from '../../album';

export function Thanks() {
  return (
    <div className="page-stack">
      <span className="chapter red">Chapter 04</span>
      <h2 className="thanks-title">Thank<br />you.</h2>
      <p className="chapter-lede">For other material — prototypes, wireframes, source files — or to talk about a role, please get in touch.</p>
      <a href={'mailto:' + CONTACT.email} className="open-slot">
        <span className="open-slot-num">03</span>
        <span className="open-slot-text">
          <span className="open-slot-title">Your club goes here</span>
          <span className="open-slot-sub">One slot left in the club chapter →</span>
        </span>
      </a>
    </div>
  );
}

export function Contact({ album }) {
  return (
    <div className="page-stack">
      <span className="chapter red">Let’s trade</span>
      <h3 className="contact-title">Get in touch</h3>
      <div className="contact-list">
        {CONTACTS.map((c, i) => (
          <a
            key={c.k}
            href={c.href}
            className="sticker contact-card"
            style={placed(ROTS[i + 1], 160 + i * 110 + 'ms')}
            {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <span className="contact-card-text">
              <span className="contact-card-k">{c.k}</span>
              <span className="contact-card-v">{c.v}</span>
            </span>
            <span className="contact-card-arrow">↗</span>
          </a>
        ))}
      </div>
      <div className="contact-foot">
        <span>© 2026 Abdulah Đulović</span>
        <button type="button" className="pill-btn outline small" onClick={() => album.goTo(0)}>Back to cover</button>
      </div>
    </div>
  );
}
