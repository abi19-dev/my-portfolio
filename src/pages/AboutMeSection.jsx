import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const AboutMeSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default duration
    }, []);

    return (
        <>
            <div className='lg:h-screen flex flex-col items-center justify-center'>
                <div className='flex flex-col w-full lg:h-4/5 lg:justify-center items-center lg:gap-0 gap-10'>
                    <div className='flex flex-col lg:h-screen justify-center items-center'>
                        <div className='lg:w-3/5 w-5/6 flex items-center justify-center text-center lg:text-2xl' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            I am 21 years old third year student of Faculty of Information Technology in Mostar. I am interested in programming and information technologies. Almost with each step that I take in my daily life, technology comes in sight and I am continuously mesmerized by the whole effect it has on our everyday society.
                        </div>
                    </div>
                    <div className="w-10/12 grid lg:grid-cols-3 lg:gap-12 grid-cols-1 gap-3 text-white lg:mb-10" style={{ fontFamily: "'Prompt', cursive" }} data-aos="zoom-in">
                        <div className="info-item flex flex-col items-center" data-aos="fade-right">
                            <h3 className="text-yellow-400 lg:text-sm text-xs lg:mb-2">EDUCATION</h3>
                            <p className="lg:text-sm text-xs font-bold">Software Engineering</p>
                        </div>
                        <div className="info-item flex flex-col items-center" data-aos="fade-up">
                            <h3 className="text-yellow-400 lg:text-sm text-xs lg:mb-2">EXPERIENCE</h3>
                            <p className="lg:text-sm text-xs font-bold">about 1 year</p>
                        </div>
                        <div className="info-item flex flex-col items-center" data-aos="fade-left">
                            <h3 className="text-yellow-400 lg:text-sm text-xs lg:mb-2">DATE OF BIRTH</h3>
                            <p className="lg:text-sm text-xs font-bold">Aug, 2003 – 21 years old</p>
                        </div>
                        <div className="info-item flex flex-col items-center" data-aos="fade-right">
                            <h3 className="text-yellow-400 lg:text-sm text-xs lg:mb-2">FAMILIAR WITH</h3>
                            <p className="lg:text-sm text-xs font-bold text-center">
                                React, React Native, JavaScript, Node.js, Express.js, C++, C#, HTML/CSS, Figma
                            </p>
                        </div>
                        <div className="info-item flex flex-col items-center" data-aos="fade-up">
                            <h3 className="text-yellow-400 lg:text-sm text-xs lg:mb-2">SKILLS</h3>
                            <p className="lg:text-sm text-xs font-bold text-center">
                                Programming, App Development, Web Development, Graphic design
                            </p>
                        </div>
                        <div className="info-item flex flex-col items-center" data-aos="fade-left">
                            <h3 className="text-yellow-400 lg:text-sm text-xs lg:mb-2">CURRENTLY LEARNING</h3>
                            <p className="lg:text-sm text-xs font-bold">
                                Angular, C#
                            </p>
                        </div>

                    </div>
                </div>
                <div className='w-full flex justify-between pb-2 h-full items-end absolute '>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold lg:pl-8 flex gap-1 pl-3 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                    <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 cursor-pointer"
                    >
                        Experience <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AboutMeSection;
