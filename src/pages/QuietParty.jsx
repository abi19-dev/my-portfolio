import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const QuietParty = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='flex flex-col w-full h-screen bg-black-1000'>
                <div className='flex lg:flex-row flex-col h-[90%] bg-black-1000 lg:justify-center items-center'>
                    <div className='lg:w-1/2 lg:h-full h-[45%] flex flex-col lg:justify-center justify-start items-center' data-aos="fade-down">
                        <img
                            src="https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/QuietPartySearch.webp"
                            alt="The Quiet Party search page on a MacBook"
                            className='lg:w-[92%] w-full h-auto object-contain'
                        />
                    </div>
                    <div className='lg:w-1/2 w-5/6 lg:pl-0 lg:pr-0 lg:h-full h-[55%] flex flex-col justify-center items-center' data-aos="fade-up">
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='h-full lg:w-fit flex flex-col items-center justify-center' data-aos="zoom-in">
                                <div className='w-[104px] h-[104px] bg-white rounded-2xl flex items-center justify-center p-3'>
                                    <img src="https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/QuietPartyLogo.svg" alt="The Quiet Party Logo" className='w-full h-full object-contain' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                                <p className='lg:text-4xl text-xl font-bold'>The Quiet Party</p>
                                <p className='lg:text-base text-xs'>Facts only. Verbatim quotes and the record around them.</p>
                                <p className='flex flex-col text-[rgba(255,255,255,0.30)] lg:text-base text-xs'>
                                    Full stack developer &middot; AETERDATA Analytics
                                    <span>July 2026 &ndash; Present</span>
                                </p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                    <Link
                        to="quietparty2"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        The Quiet Party <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default QuietParty;
