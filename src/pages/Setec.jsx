import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const Setec = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='flex flex-col w-full h-screen bg-black-1000'>
                <div className='flex lg:flex-row flex-col-reverse h-[90%] bg-black-1000 lg:justify-center items-center'>

                    {/* Left: details */}
                    <div className='lg:w-1/2 w-5/6 lg:h-full h-[55%] flex flex-col justify-center items-start lg:pl-16' data-aos="fade-up">
                        <div className='flex flex-col gap-3 w-full' style={{ fontFamily: "'Prompt', cursive" }}>
                            <div className='flex flex-col gap-1'>
                                <p className='lg:text-5xl text-2xl font-bold'>SETEC d.o.o</p>
                                <p className='text-[rgba(255,255,255,0.40)] lg:text-sm text-xs'>Sarajevo, Bosnia and Herzegovina</p>
                            </div>
                            <div className='flex flex-col gap-0.5'>
                                <p className='lg:text-xl text-base font-semibold'>Software Engineering Intern</p>
                                <p className='text-yellow-400 text-xs'>Feb 2025 – Jul 2025 · 6 months</p>
                            </div>
                            <div className='w-12 h-px bg-yellow-400 opacity-40 my-1'></div>
                            <p className='text-[rgba(255,255,255,0.65)] lg:text-sm text-xs leading-relaxed lg:pr-8'>
                                My six-month internship at Setec holds a deeply special place in my career—it was the moment my ambitions turned into reality. This was my very first opportunity to step out of a learning environment and touch a real, living project. Immersing myself in the basics of Chromium, I experienced the thrill and responsibility of contributing to production-level software for the first time. It was a foundational chapter that taught me the core mechanics of development, and I will always look back on this experience as the spark that truly ignited my journey as an engineer.
                            </p>
                        </div>
                    </div>

                    {/* Right: logo */}
                    <div className='lg:w-1/2 h-[45%] flex flex-col lg:justify-center justify-center items-center' data-aos="fade-down">
                        <div className='w-48 h-48 lg:w-72 lg:h-72 rounded-2xl overflow-hidden'>
                            <img src="https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/1F245381-E8FC-43A7-8AB7-D2583ECA0F5B.png" alt="SETEC Logo" className='w-full h-full object-cover' />
                        </div>
                    </div>

                </div>
                <div className='w-full flex justify-between pb-2 cursor-pointer h-[10%] items-end z-10'>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold lg:pl-8 pl-3 flex gap-1 z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                    <Link
                        to="personalprojects"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        Projects <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Setec;
