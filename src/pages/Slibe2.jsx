import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Screenshots from '../components/Screenshots';

const Slibe2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const images = [
        { src: "https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/SlibeAlbum.webp",   alt: "Slibe - sticker album" },
        { src: "https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/SlibeSwap.webp",    alt: "Slibe - swap proposal" },
        { src: "https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/SlibeChat.webp",    alt: "Slibe - chat with a trading partner" },
        { src: "https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/SlibeProfile.webp", alt: "Slibe - collector profile" },
    ];

    return (
        <>
            <div className='flex flex-col w-full bg-black-1000 h-screen'>
                <div className='flex flex-col h-[90%] lg:justify-between items-center lg:gap-0 gap-10'>
                    <div className='lg:h-[20%] h-[15%] w-full flex items-center pl-5 pt-3' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center lg:h-full'>
                            <div className='h-full' data-aos="zoom-in">
                                <div className='w-[104px] h-[104px] rounded-2xl overflow-hidden bg-white flex items-center justify-center'>
                                    <img src="https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/SLIBE.svg" alt="Slibe Logo" className='w-full h-full object-cover scale-125' />
                                </div>
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>Slibe</p>
                                <p className='lg:text-base text-xs'>Find. Match. Trade your stickers.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:h-[80%] h-[85%] flex lg:flex-row flex-col lg:justify-center items-center lg:gap-10'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl font-bold'>What did I learn?</p>
                            <div className='w-5/6 flex flex-col gap-2 text-sm lg:text-lg'>
                                <p className='flex items-start gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg></span>
                                    Built a full-stack matchmaking platform from scratch, scaling to 13,000+ users in Bosnia and Herzegovina.
                                </p>
                                <p className='flex items-start gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-exchange"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10h14l-4 -4" /><path d="M17 14h-14l4 4" /></svg></span>
                                    Designed a real-time sticker matching algorithm connecting users who have duplicates with users who need them.
                                </p>
                                <p className='flex items-start gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trophy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 21l8 0" /><path d="M12 17l0 4" /><path d="M7 4l10 0" /><path d="M17 4v8a5 5 0 0 1 -10 0v-8" /><path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg></span>
                                    Became the #1 Panini trading platform in BiH for the 2026 FIFA World Cup cycle.
                                </p>
                                <p className='flex items-start gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg></span>
                                    Live at <a href="https://slibe.online" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">slibe.online</a>
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 flex justify-center items-center h-full' data-aos="fade-down">
                            <div className='w-5/6 lg:h-full flex items-center justify-center'>
                                <Screenshots images={images} label="Slibe" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between pb-2 cursor-pointer items-end h-[10%]'>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold lg:pl-8 pl-3 flex gap-1 z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                    <Link
                        to="madinahguider"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        MadinahGuider <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Slibe2;
