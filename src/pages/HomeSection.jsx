import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const HomeSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Set the duration for the animations
    }, []);

    return (
        <>
            <section className='flex flex-col h-screen bg-black-1000 justify-center lg:items-start items-center w-full'>
                <div className='flex lg:flex-row flex-col justify-center align-middle items-center lg:w-full w-5/6 h-[95%] gap-5'>
                    <div className='lg:w-1/2 flex flex-col justify-center items-center' data-aos="fade-right">
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col justify-center lg:text-left text-center' data-aos="fade-up">
                                <p className='lg:text-6xl text-4xl text-yellow-400 typing-animation' style={{ fontFamily: "'Kaushan Script', cursive" }}>Abdulah Đulović</p>
                                <p className='lg:text-3xl text-[rgba(255,255,255,0.26)] hover:text-white transition-colors duration-300' style={{ fontFamily: "'Fredoka', cursive" }}>Student of Information Technologies</p>
                            </div>
                            <div className='flex flex-col gap-2' data-aos="zoom-in">
                                <div className='uppercase flex flex-col gap-2 lg:items-start items-center cursor-pointer lg:text-base text-sm' style={{ fontFamily: "'Fredoka', cursive" }}>
                                    <Link
                                        to="about"
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-yellow-400 btn-hover px-3 py-1 rounded transition-all duration-300"
                                    >
                                        About Me
                                    </Link>
                                    <Link
                                        to="experience"
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-yellow-400 btn-hover px-3 py-1 rounded transition-all duration-300"
                                    >
                                        Experience
                                    </Link>
                                </div>
                                <div className='flex flex-row gap-3 lg:justify-start justify-center'>
                                    <div className='text-yellow-400 lg:block hidden'>
                                        <div className='h-full bg-yellow-400 w-1 rounded-xl'></div>
                                    </div>
                                    <ul className='uppercase flex flex-col gap-2 cursor-pointer lg:items-start items-center lg:text-base text-sm' style={{ fontFamily: "'Fredoka', cursive" }}>
                                        <li><Link
                                            to="madinahguider"
                                            smooth={true}
                                            duration={500}
                                            className="hover:text-yellow-400 btn-hover px-3 py-1 rounded transition-all duration-300 project-card"
                                        >
                                            MadinahGuider
                                        </Link></li>
                                        <li><Link
                                            to="karatebhapp"
                                            smooth={true}
                                            duration={500}
                                            className="hover:text-yellow-400 btn-hover px-3 py-1 rounded transition-all duration-300 project-card"
                                        >
                                            KarateBH App
                                        </Link></li>
                                        <li><Link
                                            to="karatebhwebsite"
                                            smooth={true}
                                            duration={500}
                                            className="hover:text-yellow-400 btn-hover px-3 py-1 rounded transition-all duration-300 project-card"
                                        >
                                            KarateBH Website
                                        </Link></li>
                                        <li><Link
                                            to="lezzet"
                                            smooth={true}
                                            duration={500}
                                            className="hover:text-yellow-400 btn-hover px-3 py-1 rounded transition-all duration-300 project-card"
                                        >
                                            Lezzet Website
                                        </Link></li>
                                        <li><Link
                                            to="vidgeai"
                                            smooth={true}
                                            duration={500}
                                            className="hover:text-yellow-400 btn-hover px-3 py-1 rounded transition-all duration-300 project-card"
                                        >
                                            VidgeAI
                                        </Link></li>
                                        <li><Link
                                            to="rdonlinetv"
                                            smooth={true}
                                            duration={500}
                                            className="hover:text-yellow-400 btn-hover px-3 py-1 rounded transition-all duration-300 project-card"
                                        >
                                            RDOnlineTV Website
                                        </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className=' lg:block hidden' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                                <div className='w-full flex lg:flex-row justify-start items-start flex-col gap-5'>
                                    <div className='flex flex-col lg:justify-start justify-center lg:items-start items-center w-full'>
                                        <p className='text-yellow-400'>EMAIL</p>
                                        <p className='flex font-bold'>abdulahdulovic<p className='text-myGrey-1000'>@gmail.com</p></p>
                                    </div>
                                    <div className='flex flex-col lg:justify-start justify-center lg:items-start items-center w-full'>
                                        <p className='text-yellow-400'>PHONE</p>
                                        <p className='flex gap-1 font-bold'><p className='text-myGrey-1000'>(387)</p>60 34 83 487</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 flex justify-center items-center'>
                        <div className="relative lg:w-[500px] lg:h-[500px] w-full h-[200px] flex lg:justify-center lg:items-center overflow-hidden lg:rounded-full rounded-md border-4 border-yellow-400 profile-image" data-aos="fade-left">
                            <img src="https://abdulahportfolio.blob.core.windows.net/portfolio/Ja.jpg" alt="Slika" className='lg:rounded-full w-full h-full object-cover relative z-10' />
                        </div>
                    </div>
                    <div className=' lg:hidden block' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                        <div className='w-full flex lg:flex-row justify-start items-start flex-col gap-5'>
                            <div className='flex flex-col lg:justify-start justify-center lg:items-start items-center w-full'>
                                <p className='text-yellow-400'>EMAIL</p>
                                <p className='flex font-bold'>abdulahdulovic<p className='text-myGrey-1000'>@gmail.com</p></p>
                            </div>
                            <div className='flex flex-col lg:justify-start justify-center lg:items-start items-center w-full'>
                                <p className='text-yellow-400'>PHONE</p>
                                <p className='flex gap-1 font-bold'><p className='text-myGrey-1000'>(387)</p>60 34 83 487</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end pb-2 cursor-pointer h-[5%] w-full items-end' >
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-400 font-bold flex gap-1 lg:pr-8 pr-3 items-end justify-end"
                    >
                        About Me <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomeSection;
