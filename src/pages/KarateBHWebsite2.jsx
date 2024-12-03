import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import { Carousel } from 'react-responsive-carousel';
import CreatePost1 from '../assets/KarateBHWebsite/Mobile/CreatePost1.png';
import CreatePost2 from '../assets/KarateBHWebsite/Mobile/CreatePost2.png';
import Home2 from '../assets/KarateBHWebsite/Mobile/Home2.png';
import Home3 from '../assets/KarateBHWebsite/Mobile/Home3.png';
import Home4 from '../assets/KarateBHWebsite/Mobile/Home4.png';
import Home12 from '../assets/KarateBHWebsite/Mobile/Home12.png';
import NavBar1 from '../assets/KarateBHWebsite/Mobile/Navbar1.png';
import NavBar2 from '../assets/KarateBHWebsite/Mobile/NavBar2.png';
import News1 from '../assets/KarateBHWebsite/Mobile/News1.png';
import News2 from '../assets/KarateBHWebsite/Mobile/News2.png';
import News3 from '../assets/KarateBHWebsite/Mobile/News3.png';
import Home1Desktop from '../assets/KarateBHWebsite/Desktop/Home1.png';
import Home2Desktop from '../assets/KarateBHWebsite/Desktop/Home2.png';
import Home3Desktop from '../assets/KarateBHWebsite/Desktop/Home3.png';
import News1Desktop from '../assets/KarateBHWebsite/Desktop/News1.png';
import News2Desktop from '../assets/KarateBHWebsite/Desktop/News2.png';
import CreatePost1Desktop from '../assets/KarateBHWebsite/Desktop/CreatePost1.png';
import CreatePost2Desktop from '../assets/KarateBHWebsite/Desktop/CreatePost2.png';
import karatebhappicon from '../assets/KarateBHApp/karatebhappicon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../App.css';

const KarateBHWebsite2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration
    }, []);

    const images = [
        { src: Home1Desktop, alt: "Karate Website Page 3" },
        { src: Home2Desktop, alt: "Karate Website Page 3" },
        { src: Home3Desktop, alt: "Karate Website Page 3" },
        { src: News1Desktop, alt: "Karate Website Page 3" },
        { src: News2Desktop, alt: "Karate Website Page 3" },
        { src: CreatePost1Desktop, alt: "Karate Website Page 3" },
        { src: CreatePost2Desktop, alt: "Karate Website Page 3" },
        { src: Home12, alt: "Karate Website" },
        { src: Home2, alt: "Karate Website Page 2" },
        { src: Home3, alt: "Karate Website Page 3" },
        { src: Home4, alt: "Karate Website Page 3" },
        { src: NavBar1, alt: "Karate Website Page 3" },
        { src: NavBar2, alt: "Karate Website Page 3" },
        { src: News1, alt: "Karate Website Page 3" },
        { src: News2, alt: "Karate Website Page 3" },
        { src: News3, alt: "Karate Website Page 3" },
        { src: CreatePost1, alt: "Karate Website Page 3" },
        { src: CreatePost2, alt: "Karate Website Page 3" },
    ];

    return (
        <>
            <div className='flex flex-col w-full h-screen bg-black-1000'>
                <div className='flex flex-col h-screen bg-black-1000 justify-between items-center gap-10'>
                    <div className='h-1/6 pl-5 pt-5 w-full' data-aos="fade-down">
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='h-1/2' data-aos="zoom-in">
                                <img src={karatebhappicon} alt="Slika" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col lg:gap-0 gap-2' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-down">
                                <p className='lg:text-xl font-bold'>KarateBH Website</p>
                                <p className='lg:text-base text-sm'>With sports values, we strengthen society – together</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full flex lg:flex-row flex-col lg:justify-center items-center gap-10'>
                        <div className='lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-5' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                            <p className='lg:text-6xl font-bold'>What did I learn?</p>
                            <div className='w-5/6 flex flex-col gap-2 text-sm lg:text-lg'>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brush"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21v-4a4 4 0 1 1 4 4h-4" /><path d="M21 3a16 16 0 0 0 -12.8 10.2" /><path d="M21 3a16 16 0 0 1 -10.2 12.8" /><path d="M10.6 9a9 9 0 0 1 4.4 4.4" /></svg></p>Designed and implemented UI/UX in Figma for a national sports association's webpage</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg></p>Developed a dynamic website using the React framework, enhancing proficiency in React</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-writing"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" /><path d="M16 7h4" /><path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" /></svg></p>Gained experience in client communication and project proposal writing, securing project approval</p>
                                <p className='flex items-start gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users-group"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg></p>Collaborated effectively in a team environment, honing teamwork and project coordination skills</p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 flex justify-center items-center' data-aos="fade-down">
                            <div className='lg:w-5/6 h-full'>
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
                        to="lezzet"
                        smooth={true}
                        duration={500}
                        className="hover:text-myYellow-1000 font-bold flex gap-1 lg:pr-8 pr-3 z-10"
                    >
                        Lezzet <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default KarateBHWebsite2;