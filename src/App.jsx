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
import Thnx from './pages/Thnx'
import Lezzet from './pages/Lezzet'
import Lezzet2 from './pages/Lezzet2'
import Setec from './pages/Setec'
import Rubicon from './pages/Rubicon'
import Rubicon2 from './pages/Rubicon2'
import QuietParty from './pages/QuietParty'
import QuietParty2 from './pages/QuietParty2'
import PersonalProjects from './pages/PersonalProjects'
import Slibe from './pages/Slibe'
import Slibe2 from './pages/Slibe2'
import MadinahGudier from './pages/MadinahGudier'
import MadinahGuider1 from './pages/MadinahGuider1'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen flex items-center justify-center h-screen bg-black-1000">
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

      <section id="rubicon" className="h-screen flex items-center justify-center bg-black-1000" role="main">
        <Rubicon />
      </section>

      <section id="rubicon2" className="h-screen flex items-center justify-center bg-black-1000" role="main">
        <header className="sr-only">
          <h3>Rubicon Projects - Cost Modeling Tool, Knowledge Graph Slackbot, RUB 1 on 1</h3>
        </header>
        <Rubicon2 />
      </section>

      <section id="setec" className="h-screen flex items-center justify-center bg-black-1000" role="main">
        <Setec />
      </section>

      <section id="personalprojects" className="h-screen flex items-center justify-center bg-black-1000" role="main">
        <PersonalProjects />
      </section>

      {/* Portfolio Projects */}
      <section id="portfolio" className="bg-black-1000" role="main">
        <header className="sr-only">
          <h2>Portfolio Projects by Abdulah Đulović</h2>
        </header>

        {/* The Quiet Party */}
        <article id="quietparty" className="h-screen flex items-center justify-center bg-black-1000">
          <header className="sr-only">
            <h3>The Quiet Party - US Federal Public Records Research Platform</h3>
          </header>
          <QuietParty />
        </article>

        <article id="quietparty2" className="h-screen flex items-center justify-center bg-black-1000">
          <QuietParty2 />
        </article>

        {/* Slibe Project */}
        <article id="slibe" className="h-screen flex items-center justify-center bg-black-1000">
          <header className="sr-only">
            <h3>Slibe - Panini Sticker Trading Platform</h3>
          </header>
          <Slibe />
        </article>

        <article id="slibe2" className="h-screen flex items-center justify-center bg-black-1000">
          <Slibe2 />
        </article>

        {/* MadinahGuider Project */}
        <article id="madinahguider" className="h-screen flex items-center justify-center bg-black-1000">
          <header className="sr-only">
            <h3>MadinahGuider Project</h3>
          </header>
          <MadinahGudier />
        </article>

        <article id="madinahguider1" className="h-screen flex items-center justify-center bg-black-1000">
          <MadinahGuider1 />
        </article>

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
      </section>

      {/* Thank You Section */}
      <section id="thnx" className="h-screen flex items-center justify-center bg-black-1000" role="contentinfo">
        <Thnx />
      </section>

      {/* Hidden content for SEO */}
      <div className="sr-only">
        <h1>Abdulah Đulović - Software Engineer and Web Developer Portfolio</h1>
        <p>
          Abdulah Đulović is a Software Engineer at RUBICON in Sarajevo, Bosnia and Herzegovina,
          specializing in full-stack web, mobile and cloud development with React, Angular, TypeScript,
          NestJS, .NET and Azure. This portfolio showcases The Quiet Party research platform, the Slibe
          sticker trading platform, the MadinahGuider tourism application, the KarateBH website and
          mobile app, and the Lezzet e-commerce website.
        </p>
        <address>
          <p>Contact: abdulahdulovic@gmail.com</p>
          <p>Phone: +387-60-34-83-487</p>
          <p>Location: Sarajevo, Bosnia and Herzegovina</p>
        </address>
      </div>
    </main>
  );
}

export default App;
