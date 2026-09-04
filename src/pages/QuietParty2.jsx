import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Screenshots from '../components/Screenshots';

const QuietParty2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const images = [
        { src: "https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/QuietPartySearch.webp",   alt: "The Quiet Party - search page" },
        { src: "https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/QuietPartyResults.webp",  alt: "The Quiet Party - search results with sourced quotes" },
        { src: "https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/QuietPartyCompare.webp",  alt: "The Quiet Party - side-by-side politician comparison" },
        { src: "https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/QuietPartyBrowse.webp",   alt: "The Quiet Party - browse the House of Representatives" },
    ];

    return (
        <>
            <div className='flex flex-col w-full bg-black-1000 h-screen'>
                <div className='flex flex-col h-[90%] lg:justify-between items-center lg:gap-0 gap-10'>
                    <div className='lg:h-[20%] h-[15%] w-full flex items-center pl-5 pt-3' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center lg:h-full'>
                            <div className='h-full' data-aos="zoom-in">
                                <div className='w-[104px] h-[104px] bg-white rounded-2xl flex items-center justify-center p-3'>
                                    <img src="https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/QuietPartyLogo.svg" alt="The Quiet Party Logo" className='w-full h-full object-contain' />
                                </div>
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>The Quiet Party</p>
                                <p className='lg:text-base text-xs'>Facts only. Verbatim quotes and the record around them.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:h-[80%] h-[85%] flex lg:flex-row flex-col lg:justify-center items-center lg:gap-10'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl text-3xl font-bold'>What did I learn?</p>
                            <div className='w-5/6 flex flex-col gap-2 text-sm lg:text-lg'>
                                <p className='flex items-start gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg></span>
                                    Led the full user-facing product — search, browse, politician profiles, side-by-side comparison and public sharing — from the design system and app shell upward.
                                </p>
                                <p className='flex items-start gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 10l18 0" /><path d="M7 15l.01 0" /><path d="M11 15l2 0" /></svg></span>
                                    Built authentication and onboarding, Stripe-backed subscriptions, and a usage metering system moved out of a client cookie into the database so a query is charged exactly once.
                                </p>
                                <p className='flex items-start gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg></span>
                                    Shipped the layer around it: server-generated share images, PDF and CSV export, a blog and static-page CMS, and the admin interface.
                                </p>
                                <p className='flex items-start gap-2'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg></span>
                                    Live at <a href="https://www.thequietparty.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">thequietparty.com</a>
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 flex justify-center items-center h-full' data-aos="fade-down">
                            {/* landscape mockups, so let them use the full column width -
                                the portrait ones on Slibe are capped by height instead */}
                            <div className='w-full lg:pr-8 lg:h-full flex items-center justify-center'>
                                <Screenshots images={images} label="The Quiet Party" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                    <Link
                        to="slibe"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        Slibe <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default QuietParty2;
