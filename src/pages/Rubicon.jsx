import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const Rubicon = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='flex flex-col w-full h-screen bg-black-1000'>
                <div className='flex lg:flex-row flex-col-reverse h-[90%] bg-black-1000 lg:justify-center items-center'>

                    {/* Left: details */}
                    <div className='lg:w-1/2 w-5/6 lg:h-full h-[60%] flex flex-col justify-center items-start lg:pl-16 overflow-y-auto' data-aos="fade-up">
                        <div className='flex flex-col gap-3 w-full' style={{ fontFamily: "'Prompt', cursive" }}>
                            <div className='flex flex-col gap-1'>
                                <p className='lg:text-5xl text-2xl font-bold'>Rubicon</p>
                                <p className='text-[rgba(255,255,255,0.40)] lg:text-sm text-xs'>Sarajevo, Bosnia and Herzegovina</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-3'>
                                    <div className='flex flex-col gap-0.5'>
                                        <p className='lg:text-base text-sm font-semibold'>Intern</p>
                                        <p className='text-[rgba(255,255,255,0.30)] text-xs'>Oct 2025 – Nov 2025 · 2 months</p>
                                    </div>
                                    <div className='w-px h-8 bg-yellow-400 opacity-20'></div>
                                    <div className='flex flex-col gap-0.5'>
                                        <p className='lg:text-base text-sm font-semibold'>Software Engineer <span className='text-yellow-400 text-xs font-normal'>· Full time</span></p>
                                        <p className='text-[rgba(255,255,255,0.30)] text-xs'>Dec 2025 – Present · 6 months</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-12 h-px bg-yellow-400 opacity-40 my-1'></div>
                            <div className='flex flex-col gap-3 lg:pr-8'>
                                <p className='text-[rgba(255,255,255,0.65)] lg:text-sm text-xs leading-relaxed'>
                                    My journey with RUBICON has been nothing short of transformative, both professionally and personally. What began as an intensive month-and-a-half internship quickly evolved into a full-time role as a Software Engineer. I am immensely grateful for the trust they placed in me and the wonderful opportunity they gave me to prove myself. For the past six months, I have had the privilege of diving deep into building robust solutions, actively working on a dynamic project utilizing Angular, .NET, and Azure Functions.
                                </p>
                                <p className='text-[rgba(255,255,255,0.65)] lg:text-sm text-xs leading-relaxed'>
                                    But beyond the technical growth and the code, what truly defines my time at RUBICON is the people. I have crossed paths with some incredibly kind, talented, and supportive folks who have made every challenge a joy to tackle. Together, we have shared laughs, solved complex problems, and created beautiful memories that I will carry with me for the rest of my career. RUBICON hasn't just shaped me as a developer; it has given me a community where I have genuinely thrived.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: logo */}
                    <div className='lg:w-1/2 h-[40%] flex flex-col lg:justify-center justify-center items-center' data-aos="fade-down">
                        <div className='w-48 h-48 lg:w-72 lg:h-72 flex items-center justify-center p-5'>
                            <img src="https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/RubiconLogomarkWhite.svg" alt="Rubicon Logo" className='w-full h-full object-contain' />
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
                        to="rubicon2"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        Rubicon Projects <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Rubicon;
