import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import { Carousel } from 'react-responsive-carousel';
import Lezzet1 from '../assets/Lezzet/Desktop-Mobile/Lezzet1.png';
import Lezzet2 from '../assets/Lezzet/Desktop-Mobile/Lezzet2.png';
import Lezzet3 from '../assets/Lezzet/Desktop-Mobile/Lezzet3.png';
import Lezzet4 from '../assets/Lezzet/Desktop-Mobile/Lezzet4.png';
import Lezzet5 from '../assets/Lezzet/Desktop-Mobile/Lezzet5.png';
import Lezzet6 from '../assets/Lezzet/Desktop-Mobile/Lezzet6.png';
import Lezzet7 from '../assets/Lezzet/Desktop-Mobile/Lezzet7.png';
import Lezzet8 from '../assets/Lezzet/Desktop-Mobile/Lezzet8.png';
import Lezzet9 from '../assets/Lezzet/Desktop-Mobile/Lezzet9.png';
import Lezzet10 from '../assets/Lezzet/Desktop-Mobile/Lezzet10.png';
import Lezzet11 from '../assets/Lezzet/Desktop-Mobile/Lezzet11.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LezzetLogo from '../assets/Lezzet/LezzetLogo.png';
import '../App.css';

const Lezzet2Page = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration
    }, []);

    const images = [
        { src: Lezzet8, alt: "Karate Website" },
        { src: Lezzet9, alt: "Karate Website Page 2" },
        { src: Lezzet1, alt: "Karate Website Page 3" },
        { src: Lezzet2, alt: "Karate Website Page 3" },
        { src: Lezzet3, alt: "Karate Website Page 3" },
        { src: Lezzet4, alt: "Karate Website Page 3" },
        { src: Lezzet5, alt: "Karate Website Page 3" },
        { src: Lezzet6, alt: "Karate Website Page 3" },
        { src: Lezzet7, alt: "Karate Website Page 3" },
        { src: Lezzet11, alt: "Karate Website Page 3" },
        { src: Lezzet10, alt: "Karate Website Page 3" },
    ];

    return (
        <>
            <div className='flex flex-col w-full h-screen bg-black-1000'>
                <div className='flex flex-col h-screen bg-black-1000 justify-start items-center gap-10'>
                    <div className='h-1/6 pl-5 pt-5 w-full' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='h-1/2' data-aos="zoom-in">
                                <img src={LezzetLogo} alt="Slika" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>Lezzet</p>
                                <p className='lg:text-base text-sm'>Irresistible chocolate delight...</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full flex lg:flex-row flex-col lg:justify-center items-center gap-10'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl font-bold'>What did I learn?</p>
                            <div className='w-5/6 flex flex-col gap-2 text-sm lg:text-lg'>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-gift"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><path d="M12 8l0 13" /><path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" /></svg></p>Designed and developed an e-commerce website for a family business specializing in chocolate pralines, mendiants, and truffles</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-c-sharp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" /><path d="M16 7l-1 10" /><path d="M20 7l-1 10" /><path d="M14 10h7.5" /><path d="M21 14h-7.5" /></svg></p>Integrated a dynamic backend using C# (.NET) and SQL to manage product data, orders, and user accounts efficiently</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg></p>Implemented a React-based frontend with an intuitive user interface for seamless navigation and product browsing</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-azure"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 7.5l-4 9.5h4l6 -15z" /><path d="M22 20l-7 -15l-3 7l4 5l-8 3z" /></svg></p>Integrated Azure Blob Storage for secure and scalable image storage of product photos</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brackets-angle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4l-5 8l5 8" /><path d="M16 4l5 8l-5 8" /></svg></p>Gained hands-on experience in full-stack development while delivering a practical solution tailored to client needs</p>
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
                                        <img
                                            key={index}
                                            src={image.src}
                                            alt={image.alt}
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
