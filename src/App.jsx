import { useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Lightbox from './components/Lightbox';

function App() {
  const [lightbox, setLightbox] = useState(null);
  const openLightbox = useCallback((list, i) => setLightbox({ list, i }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="site">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main" className="page">
        <Hero />
        <About />
        <Experience />
        <Projects lightboxOpen={!!lightbox} onOpen={openLightbox} />
        <Contact />

        <footer className="footer">
          <span>© 2026 Abdulah Đulović · Sarajevo</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </main>

      {lightbox && <Lightbox state={lightbox} onChange={setLightbox} onClose={closeLightbox} />}
    </div>
  );
}

export default App;
