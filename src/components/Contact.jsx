import { CONTACT } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="banner contact-banner">
        <span className="mono-label">04 — Contact</span>
        <div className="contact-heading">
          <h2 className="thanks">Thank you.</h2>
          <p>For other material — prototypes, wireframes, source files — or to talk about a role, please get in touch.</p>
        </div>
      </div>
      <div className="contact-links">
        <a href={'mailto:' + CONTACT.email} className="card contact-card">
          <span className="mono-label">Email</span>
          <span className="contact-value break">{CONTACT.email} ↗</span>
        </a>
        <a href={CONTACT.phoneHref} className="card contact-card">
          <span className="mono-label">Phone</span>
          <span className="contact-value">{CONTACT.phone} ↗</span>
        </a>
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="card contact-card">
          <span className="mono-label">GitHub</span>
          <span className="contact-value">{CONTACT.githubHandle} ↗</span>
        </a>
      </div>
    </section>
  );
}
