import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const Rubicon2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='flex flex-col w-full bg-black-1000 h-screen'>
                <div className='flex flex-col h-[90%] lg:justify-between items-center lg:gap-0 gap-10'>
                    <div className='lg:h-[20%] h-[15%] w-full flex items-center pl-5 pt-3' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center lg:h-full'>
                            <div className='h-full' data-aos="zoom-in">
                                <div className='w-[104px] h-[104px] flex items-center justify-center p-2'>
                                    <img src="https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/RubiconLogomarkWhite.svg" alt="Rubicon Logo" className='w-full h-full object-contain' />
                                </div>
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>Rubicon</p>
                                <p className='lg:text-base text-xs'>Sarajevo, Bosnia and Herzegovina</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:h-[80%] h-[85%] flex lg:flex-row flex-col lg:justify-center items-center lg:gap-10'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl text-3xl font-bold'>What I built there</p>
                            <div className='w-5/6 flex flex-col gap-4 text-sm lg:text-base'>

                                <div className='flex items-start gap-2'>
                                    <span className='pt-0.5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 13a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M9 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M15 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" /></svg></span>
                                    <div className='flex flex-col gap-0.5'>
                                        <p className='font-semibold'>Cost Modeling Tool <span className='text-yellow-400 text-xs font-normal'>· Apr 2026 – Present</span></p>
                                        <p className='text-[rgba(255,255,255,0.65)] text-xs lg:text-sm leading-relaxed'>Full-stack work across an Angular frontend and an ASP.NET Core Azure Functions backend — REST endpoints with validation and SQL Server integration, plus dynamic filtering and data visualization in the UI.</p>
                                        <p className='text-myGrey-1000 text-xs'>Angular · TypeScript · ASP.NET Core · Azure Functions · SQL Server · Dapper</p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-2'>
                                    <span className='pt-0.5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M8.7 10.7l6.6 -3.4" /><path d="M8.7 13.3l6.6 3.4" /></svg></span>
                                    <div className='flex flex-col gap-0.5'>
                                        <p className='font-semibold'>KG – Slackbot PoC <span className='text-yellow-400 text-xs font-normal'>· Dec 2025 – Jan 2026</span></p>
                                        <p className='text-[rgba(255,255,255,0.65)] text-xs lg:text-sm leading-relaxed'>Modelled a knowledge graph out of an unstructured source document, then built a natural language pipeline that lets an LLM interpret a question and return grounded answers from it.</p>
                                        <p className='text-myGrey-1000 text-xs'>Neo4j · Cypher · Python · LLM</p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-2'>
                                    <span className='pt-0.5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg></span>
                                    <div className='flex flex-col gap-0.5'>
                                        <p className='font-semibold'>RUB 1 on 1 <span className='text-yellow-400 text-xs font-normal'>· Sep 2025 – Nov 2025</span></p>
                                        <p className='text-[rgba(255,255,255,0.65)] text-xs lg:text-sm leading-relaxed'>Client and server for a one-on-one meeting management tool — note-taking features, streamlined 1-on-1 workflows and a set of modular, reusable UI components.</p>
                                        <p className='text-myGrey-1000 text-xs'>NestJS · React · TypeScript · Sass · Azure SQL</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-1/2 flex justify-center items-center h-full' data-aos="fade-down">
                            <div className='w-5/6 lg:h-full flex items-center justify-center'>
                                <img src="https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/RubiconLogoWhite.svg" alt="Rubicon" className='w-4/5 max-w-[420px] h-auto object-contain' />
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                    <Link
                        to="setec"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        SETEC d.o.o <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Rubicon2;
