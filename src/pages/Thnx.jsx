import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Thnx1 from '../assets/Thnx.png';
import '../App.css';

const Thnx = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

    return (
        <>
            <div className='flex flex-col w-full h-screen'>
                <div className='flex flex-col bg-black-1000 justify-center items-center h-screen' data-aos="fade-in">
                    <img src={Thnx1} alt="Slika" className='' />
                </div>
                <div className='flex flex-col lg:pl-32 gap-10 pb-10' style={{ fontFamily: "'Prompt', cursive" }} data-aos="fade-up">
                    <p className='text-myGrey-1000 lg:text-start text-center'>For other material and files like prototypes, wireframes and ... please contact me</p>
                    <div className='w-full flex lg:flex-row flex-col lg:gap-32 gap-10'>
                        <div className='text-center lg:text-start flex flex-col lg:justify-start justify-center items-center lg:items-start'>
                            <p className='text-yellow-400'>EMAIL</p>
                            <p className='flex font-bold'>abdulahdulovic<p className='text-myGrey-1000'>@gmail.com</p></p>
                        </div>
                        <div className='text-center lg:text-start flex flex-col lg:justify-start justify-center items-center lg:items-start'>
                            <p className='text-yellow-400'>PHONE</p>
                            <p className='flex gap-1 font-bold'><p className='text-myGrey-1000'>(387)</p>60 34 83 487</p>
                        </div>
                    </div>

                </div>
                <div className='w-full flex justify-between pb-2 cursor-pointer'>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-400 font-bold lg:pl-8 pl-3 flex gap-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> First Page
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Thnx;
