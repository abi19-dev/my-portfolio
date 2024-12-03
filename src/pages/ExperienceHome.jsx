import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const ExperienceHome = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default duration
    }, []);

    return (
        <>
            <div className='flex flex-col w-full h-screen'>
                <div className='flex flex-col h-screen bg-black-1000 justify-center items-center' data-aos="fade-in">
                    <div className='flex items-center justify-center text-center font-bold lg:text-9xl text-6xl text-yellow-400' style={{ fontFamily: "'Kaushan Script', cursive" }} data-aos="zoom-in">
                        Experience
                    </div>
                </div>
                <div className='w-full flex justify-between pb-2 cursor-pointer'>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-400 font-bold lg:pl-8 flex gap-1 pl-3 z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                    <Link
                        to="karatebhapp"
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-400 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        KarateBH App <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ExperienceHome;
