import React, { useState, useEffect } from 'react';
import Karikatura from './assets/caricature.webp'
import HomeSection from './pages/HomeSection'
import AboutMeSection from './pages/AboutMeSection'
import './App.css'
import ExperienceHome from './pages/ExperienceHome'
import KarateBHApp from './pages/KarateBHApp'
import KarateBHApp2 from './pages/KarateBHApp2'
import KarateBHWebsite from './pages/KarateBHWebsite'
import KarateBHWebsite2 from './pages/KarateBHWebsite2'
import VidgeAI from './pages/VidgeAI'
import VidgeAI2 from './pages/VidgeAI2'
import Thnx from './pages/Thnx'
import RDOnlineTV from './pages/RDOnlineTV'
import RDOnlineTV2 from './pages/RDOnlineTV2'
import Lezzet from './pages/Lezzet'
import Lezzet2 from './pages/Lezzet2'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ParticleBackground from './components/ParticleBackground';
import FloatingShapes from './components/FloatingShapes';
import MouseFollower from './components/MouseFollower';
import SpecialEffects from './components/SpecialEffects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen flex items-center justify-center h-screen bg-black-1000">
        <ParticleBackground />
        <SpecialEffects />
        <LazyLoadImage 
          className='lg:h-1/2 lg:w-fit w-1/2 h-fit rounded-full border-yellow-400 border-8 profile-image relative z-20' 
          src={Karikatura} 
          alt="Abdulah Đulović - Software Engineer Profile Picture"
          title="Abdulah Đulović"
        />
      </div>
    );
  }

  return (
    <main>
      {/* Background Animations */}
      <ParticleBackground />
      <FloatingShapes />
      <SpecialEffects />
      <MouseFollower />
      
      {/* Skip to content link for accessibility */}
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-400 text-black px-4 py-2 rounded z-50">
        Skip to main content
      </a>

      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-black-1000" role="banner">
        <HomeSection />
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center bg-black-1000" role="main">
        <header className="sr-only">
          <h1>About Abdulah Đulović</h1>
        </header>
        <AboutMeSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="h-screen flex items-center justify-center bg-black-1000" role="main">
        <header className="sr-only">
          <h2>Professional Experience</h2>
        </header>
        <ExperienceHome />
      </section>

      {/* Portfolio Projects */}
      <section id="portfolio" className="bg-black-1000" role="main">
        <header className="sr-only">
          <h2>Portfolio Projects by Abdulah Đulović</h2>
        </header>

        {/* KarateBH App Project */}
        <article id="karatebhapp" className="h-screen flex items-center justify-center bg-black-1000">
          <header className="sr-only">
            <h3>KarateBH Mobile Application</h3>
          </header>
          <KarateBHApp />
        </article>

        <article id="karatebhapp2" className="h-screen flex items-center justify-center bg-black-1000">
          <KarateBHApp2 />
        </article>

        {/* KarateBH Website Project */}
        <article id="karatebhwebsite" className="h-screen flex items-center justify-center bg-black-1000">
          <header className="sr-only">
            <h3>KarateBH Website Development</h3>
          </header>
          <KarateBHWebsite />
        </article>

        <article id="karatebhwebsite2" className="h-screen flex items-center justify-center bg-black-1000">
          <KarateBHWebsite2 />
        </article>

        {/* Lezzet Website Project */}
        <article id="lezzet" className="h-screen flex items-center justify-center bg-black-1000">
          <header className="sr-only">
            <h3>Lezzet Restaurant Website</h3>
          </header>
          <Lezzet />
        </article>

        <article id="lezzet2" className="h-screen flex items-center justify-center bg-black-1000">
          <Lezzet2 />
        </article>

        {/* VidgeAI Project */}
        <article id="vidgeai" className="h-screen flex items-center justify-center bg-black-1000">
          <header className="sr-only">
            <h3>VidgeAI - Artificial Intelligence Project</h3>
          </header>
          <VidgeAI />
        </article>

        <article id="vidgeai2" className="h-screen flex items-center justify-center bg-black-1000">
          <VidgeAI2 />
        </article>

        {/* RDOnlineTV Project */}
        <article id="rdonlinetv" className="h-screen flex items-center justify-center bg-black-1000">
          <header className="sr-only">
            <h3>RDOnlineTV Streaming Website</h3>
          </header>
          <RDOnlineTV />
        </article>

        <article id="rdonlinetv2" className="h-screen flex items-center justify-center bg-black-1000">
          <RDOnlineTV2 />
        </article>
      </section>

      {/* Thank You Section */}
      <section id="thnx" className="h-screen flex items-center justify-center bg-black-1000" role="contentinfo">
        <Thnx />
      </section>

      {/* Hidden content for SEO */}
      <div className="sr-only">
        <h1>Abdulah Đulović - Software Engineer and Web Developer Portfolio</h1>
        <p>
          Abdulah Đulović is a talented 21-year-old Software Engineering student from Mostar, Bosnia and Herzegovina, 
          specializing in React, React Native, JavaScript, and full-stack development. This portfolio showcases 
          innovative projects including KarateBH mobile application, VidgeAI artificial intelligence project, 
          Lezzet restaurant website, and RDOnlineTV streaming platform.
        </p>
        <address>
          <p>Contact: abdulahdulovic@gmail.com</p>
          <p>Phone: +387-60-34-83-487</p>
          <p>Location: Mostar, Bosnia and Herzegovina</p>
        </address>
      </div>
    </main>
  );
}

export default App;