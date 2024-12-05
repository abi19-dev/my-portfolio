import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Lezzet2Page = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration
    }, []);

    const images = [
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet8.png", alt: "Karate Website" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet9.png", alt: "Karate Website Page 2" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet1.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet2.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet3.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet4.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet5.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet6.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet7.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet11.png", alt: "Karate Website Page 3" },
        { src: "https://abdulahportfolio.blob.core.windows.net/portfolio/Lezzet10.png", alt: "Karate Website Page 3" },
    ];

    return (
        <>
            <div className='flex flex-col w-full bg-black-1000 h-screen'>
                <div className='flex flex-col h-[90%] lg:justify-between items-center lg:gap-0 gap-10'>
                    <div className='lg:h-[20%] h-[15%] w-full flex items-center pl-5 pt-3' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center lg:h-full'>
                            <div className='h-full' data-aos="zoom-in">
                                <img src="https://abdulahportfolio.blob.core.windows.net/portfolio/LezzetLogo.png" alt="Slika" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>Lezzet</p>
                                <p className='lg:text-base text-xs'>Irresistible chocolate delight...</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:h-[80%] h-[85%] flex lg:flex-row flex-col lg:justify-center items-center lg:gap-10'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl font-bold'>What did I learn?</p>
                            <div className='w-5/6 flex flex-col gap-2 text-sm lg:text-lg'>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-gift"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><path d="M12 8l0 13" /><path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" /></svg></p>Designed and developed an e-commerce website for a family business specializing in chocolate pralines, mendiants, and truffles</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-c-sharp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" /><path d="M16 7l-1 10" /><path d="M20 7l-1 10" /><path d="M14 10h7.5" /><path d="M21 14h-7.5" /></svg></p>Integrated a dynamic backend using C# (.NET) and SQL to manage product data, orders, and user accounts efficiently</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-azure"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 7.5l-4 9.5h4l6 -15z" /><path d="M22 20l-7 -15l-3 7l4 5l-8 3z" /></svg></p>Integrated Azure Blob Storage for secure and scalable image storage of product photos</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brackets-angle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4l-5 8l5 8" /><path d="M16 4l5 8l-5 8" /></svg></p>Gained hands-on experience in full-stack development while delivering a practical solution tailored to client needs</p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 flex justify-center items-center h-full' data-aos="fade-down">
                            <div className='w-2/3  lg:h-full flex items-center'>
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
                                            className=' lg:h-full'
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
                        to="vidgeai"
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

export default Lezzet2Page;
