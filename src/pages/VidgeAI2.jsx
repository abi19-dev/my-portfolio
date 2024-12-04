import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const VidgeAI2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration
    }, []);

    const images = [
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeMockup.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeMockup2.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeMockup3.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeMockup4.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeMockup5.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeMockup6.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeMockup7.png", alt: "Karate Website Page 3" },
    ];

    return (
        <>
            <div className='flex flex-col w-full h-screen bg-black-1000'>
                <div className='flex flex-col h-screen bg-black-1000 justify-between items-center gap-10'>
                    <div className='h-1/6 pl-5 pt-5 w-full' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='h-1/2' data-aos="zoom-in">
                                <LazyLoadImage src="https://abdulahportfolio.blob.core.windows.net/portfolio/VidgeAILogo.png" alt="Slika" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>VidgeAI</p>
                                <p className='lg:text-base text-sm'>Your Favorite Characters, Your Best Teachers</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full flex lg:flex-row flex-col lg:justify-center items-center gap-10'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl font-bold'>What did I learn?</p>
                            <div className='w-5/6 flex flex-col gap-2 text-sm lg:text-lg'>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-ai"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 16v-6a2 2 0 1 1 4 0v6" /><path d="M8 13h4" /><path d="M16 8v8" /></svg></p>Developed a React Native app using AI for personalized educational videos</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 19l18 0" /><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /></svg></p>Led a team in a 35-hour Hackathon to build and prototype the app</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-share"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M8.7 10.7l6.6 -3.4" /><path d="M8.7 13.3l6.6 3.4" /></svg></p>Enabled user-generated content and community sharing within the app</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-timeline"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 16l6 -7l5 5l5 -6" /><path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg></p>Planned future enhancements to evolve the prototype</p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 flex justify-center items-center' data-aos="fade-down">
                            <div className='w-2/3 h-full'>
                                <Carousel
                                    autoPlay
                                    infiniteLoop
                                    showThumbs={false}
                                    showIndicators={false}
                                    showStatus={false}
                                    stopOnHover={false}
                                    showArrows={false}
                                >
                                    {images.map((image, index) => (
                                        <LazyLoadImage
                                            key={index}
                                            src={image.src}
                                            alt={image.alt}
                                            effect="blur"
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between pb-2 cursor-pointer'>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold lg:pl-8 pl-3 flex gap-1 z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                    <Link
                        to="rdonlinetv"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        RDOnlineTV <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VidgeAI2;
