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




function App() {
  return (
    <>
      <section id="home" className="h-screen flex items-center justify-center bg-black-1000">
        <HomeSection />
      </section>
      <section id="about" className="h-screen flex items-center justify-center bg-black-1000">
        <AboutMeSection />
      </section>
      <section id="experience" className="h-screen flex items-center justify-center bg-black-1000">
        <ExperienceHome />
      </section>
      <section id="karatebhapp" className="h-screen flex items-center justify-center bg-black-1000">
        <KarateBHApp />
      </section>
      <section id="karatebhapp2" className="h-screen flex items-center justify-center bg-black-1000">
        <KarateBHApp2 />
      </section>
      <section id="karatebhwebsite" className="h-screen flex items-center justify-center bg-black-1000">
        <KarateBHWebsite />
      </section>
      <section id="karatebhwebsite2" className="h-screen flex items-center justify-center bg-black-1000">
        <KarateBHWebsite2 />
      </section>
      <section id="lezzet" className="h-screen flex items-center justify-center bg-black-1000">
        <Lezzet />
      </section>
      <section id="lezzet2" className="h-screen flex items-center justify-center bg-black-1000">
        <Lezzet2 />
      </section>
      <section id="vidgeai" className="h-screen flex items-center justify-center bg-black-1000">
        <VidgeAI />
      </section>
      <section id="vidgeai2" className="h-screen flex items-center justify-center bg-black-1000">
        <VidgeAI2 />
      </section>
      <section id="rdonlinetv" className="h-screen flex items-center justify-center bg-black-1000">
        <RDOnlineTV />
      </section>
      <section id="rdonlinetv2" className="h-screen flex items-center justify-center bg-black-1000">
        <RDOnlineTV2 />
      </section>
      <section id="thnx" className="h-screen flex items-center justify-center bg-black-1000">
        <Thnx />
      </section>

    </>
  );
}

export default App;