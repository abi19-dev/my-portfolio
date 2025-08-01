import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RDOnlineTV2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration
    }, []);

    return (
        <>
            <div className='flex flex-col w-full bg-black-1000 h-screen'>
                <div className='flex flex-col h-[90%] lg:justify-between items-center lg:gap-0 gap-10'>
                    <div className='lg:h-[20%] h-[15%] w-full flex items-center pl-5 pt-3' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center lg:h-full'>
                            <div className='h-full' data-aos="zoom-in">
                                <img src="https://abdulahportfolio.blob.core.windows.net/portfolio/RDOnlineTVLogo.png" alt="Slika" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>RDOnlineTV</p>
                                <p className='lg:text-base text-xs'>IPTV with over 17,000 channels</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:h-[80%] h-[85%] flex lg:flex-row flex-col lg:justify-center items-center lg:gap-10 gap-5'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl font-bold'>What did I learn?</p>
                            <div className='w-5/6 flex flex-col gap-2 text-sm lg:text-lg'>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg></p>Independently designed and built a functional website for an IPTV service using the React framework</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brush"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21v-4a4 4 0 1 1 4 4h-4" /><path d="M21 3a16 16 0 0 0 -12.8 10.2" /><path d="M21 3a16 16 0 0 1 -10.2 12.8" /><path d="M10.6 9a9 9 0 0 1 4.4 4.4" /></svg></p>Created and refined UI/UX design in Figma, improving design-to-development workflow</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg></p>Successfully launched a fully functional website, marking the completion of the first React project</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brackets-angle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4l-5 8l5 8" /><path d="M16 4l5 8l-5 8" /></svg></p>Enhanced problem-solving abilities by managing all aspects of the project from concept to deployment</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex justify-center items-center h-full" data-aos="fade-down">
                            <div className="w-full lg:w-5/6  lg:h-full flex items-center">
                                <Carousel
                                    autoPlay
                                    infiniteLoop
                                    showThumbs={false}
                                    showIndicators={false}
                                    showStatus={false}
                                    stopOnHover={false}
                                    showArrows={false}
                                >
                                    {/* Larger Images */}
                                    <img effect='blur'
                                        className="!w-5/6 mx-auto"
                                        style={{ width: '83.333%' }}
                                        src="https://abdulahportfolio.blob.core.windows.net/portfolio/Rd3.png"
                                        alt="Karate Website Page 3"
                                    />
                                    <img effect='blur'
                                        className="!w-5/6 mx-auto"
                                        style={{ width: '83.333%' }}
                                        src="https://abdulahportfolio.blob.core.windows.net/portfolio/Rd1.png"
                                        alt="Karate Website Page 3"
                                    />
                                    <img effect='blur'
                                        className="!w-5/6 mx-auto"
                                        style={{ width: '83.333%' }}
                                        src="https://abdulahportfolio.blob.core.windows.net/portfolio/Rd2.png"
                                        alt="Karate Website Page 3"
                                    />

                                    {/* Smaller Images */}
                                    <img effect='blur'
                                        className="!w-1/4 mx-auto"
                                        style={{ width: '25%' }}
                                        src="https://abdulahportfolio.blob.core.windows.net/portfolio/Rd10.png"
                                        alt="Karate Website Page 3"
                                    />
                                    <img effect='blur'
                                        className="!w-1/4 mx-auto"
                                        style={{ width: '25%' }}
                                        src="https://abdulahportfolio.blob.core.windows.net/portfolio/Rd7.png"
                                        alt="Karate Website Page 3"
                                    />
                                    <img effect='blur'
                                        className="!w-1/4 mx-auto"
                                        style={{ width: '25%' }}
                                        src="https://abdulahportfolio.blob.core.windows.net/portfolio/Rd8.png"
                                        alt="Karate Website Page 3"
                                    />
                                    <img effect='blur'
                                        className="!w-1/4 mx-auto"
                                        style={{ width: '25%' }}
                                        src="https://abdulahportfolio.blob.core.windows.net/portfolio/Rd9.png"
                                        alt="Karate Website Page 3"
                                    />
                                </Carousel>
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
                        to="thnx"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        Thank You <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default RDOnlineTV2;
