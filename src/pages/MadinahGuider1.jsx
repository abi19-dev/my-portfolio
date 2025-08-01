import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MadinahGuider1 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration
    }, []);

    const images = [
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahHome1.png", alt: "MadinahGuider Screenshot 1" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahHomeLight1.png", alt: "MadinahGuider Screenshot 1" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahMap1.png", alt: "MadinahGuider Screenshot 2" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahMap2.png", alt: "MadinahGuider Screenshot 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahMapLight1.png", alt: "MadinahGuider Screenshot 1" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahLocationDetail1.png", alt: "MadinahGuider Screenshot 4" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahLocations1.png", alt: "MadinahGuider Screenshot 5" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahRoutes1.png", alt: "MadinahGuider Screenshot 6" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahRoutes2.png", alt: "MadinahGuider Screenshot 7" },
    ];

    return (
        <>
            <div className='flex flex-col w-full bg-black-1000 h-screen'>
                <div className='flex flex-col h-[90%] lg:justify-between items-center lg:gap-0 gap-10'>
                    <div className='lg:h-[20%] h-[15%] w-full flex items-center pl-5 pt-3' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center lg:h-full'>
                            <div className='h-full' data-aos="zoom-in">
                                <img src="https://abdulahportfolio.blob.core.windows.net/portfolio/MadinahGuiderLogoPortfolio.png" alt="MadinahGuider Logo" className='w-[104px] h-[104px]' />
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>MadinahGuider</p>
                                <p className='lg:text-base text-xs'>Your Digital Companion Through Madinah...</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:h-[80%] h-[85%] flex lg:flex-row flex-col lg:justify-center items-center lg:gap-10'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl font-bold'>What did I learn?</p>
                            <div className='w-5/6 flex flex-col gap-2 text-sm lg:text-lg'>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3z" /><path d="M9 4v13" /><path d="M15 7v13" /></svg></p>Developed a complete tourism application with React Native mobile app, React web dashboard, and .NET API, featuring GPS navigation, Google Maps integration, and location-based recommendations for Medina visitors.</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" /><path d="M11 4h2" /><path d="M12 17v.01" /></svg></p>Implemented secure authentication, real-time location services, and modern mobile features including dark/light themes, offline functionality, and multilingual support across cross-platform applications.</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg></p>Deployed production-ready infrastructure using Docker, Azure cloud storage, PostgreSQL database, with planned release to Apple App Store and Google Play Store.</p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 flex justify-center items-center h-full' data-aos="fade-down">
                            <div className='w-5/6  lg:h-full flex items-center'>
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
                                        <img effect='blur'
                                            key={index}
                                            src={image.src}
                                            alt={image.alt}
                                            className='lg:h-full'
                                        />
                                    ))}
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
                        to="karatebhapp"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        KarateBH App <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MadinahGuider1; 