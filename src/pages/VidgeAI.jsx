import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const VidgeAI = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration
    }, []);

    return (
        <>
            <div className='flex flex-col w-full h-screen bg-black-1000'>
                <div className='flex lg:flex-row flex-col h-[90%] bg-black-1000 lg:justify-center items-center'>
                    <div className='lg:w-1/2 h-[45%] flex flex-col lg:justify-center justify-start items-center' data-aos="fade-down"><img effect='opacity'
                        src="https://abdulahportfolio.blob.core.windows.net/portfolio/Vidge.png"
                        alt="Desktop View"
                        className='hidden lg:block w-full'
                    />

                        {/* Image for Mobile View */}
                        <LazyLoadImage effect='opacity'
                            src="https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeGradientTest.png"
                            alt="Mobile View"
                            className='block lg:hidden w-full h-full'
                        /></div>
                    <div className='lg:w-1/2 w-5/6 lg:pl-0 lg:pr-0 lg:h-full h-[55%] flex flex-col justify-center items-center' data-aos="fade-up">
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='h-full lg:w-fit w-1/2 flex flex-col items-center justify-center' data-aos="zoom-in">
                                <img src="https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeAILogo.png" alt="Slika" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                                <p className='lg:text-4xl text-base font-bold'>VidgeAI</p>
                                <p className='lg:text-base text-xs'>Your Favorite Characters, Your Best Teachers</p>
                                <p className='flex flex-col text-[rgba(255,255,255,0.30)] lg:text-base text-xs'>App Developer <p>Project for Hackaton in 2024</p></p>
                            </div>
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
                        to="vidgeai2"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        VidgeAI <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VidgeAI;
