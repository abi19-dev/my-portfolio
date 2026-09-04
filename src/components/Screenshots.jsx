/* eslint-disable react/prop-types -- this project does not use prop-types anywhere */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

/**
 * Right-hand column of a project detail page.
 *
 * Renders the same carousel every project page uses. When `images` is empty it
 * falls back to the bordered "coming soon" card instead, so a section whose
 * screenshots have not been uploaded to R2 yet still looks finished.
 */
const Screenshots = ({ images = [], label }) => {
    if (images.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center gap-4 text-center border border-yellow-400 border-opacity-10 rounded-2xl p-10 w-full'>
                <p className='lg:text-5xl text-3xl font-bold text-yellow-400' style={{ fontFamily: "'Kaushan Script', cursive" }}>{label}</p>
                <p className='text-myGrey-1000 text-sm' style={{ fontFamily: "'Prompt', cursive" }}>Screenshots coming soon</p>
            </div>
        );
    }

    return (
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
                    className='object-contain'
                    /* the carousel's own stylesheet forces `.carousel .slide img
                       { width: 100% }`, which makes a tall portrait mockup
                       overflow the section. An inline style outranks it without
                       needing !important, so the image is bounded by height. */
                    style={{ width: 'auto', maxHeight: '64vh', margin: '0 auto' }}
                />
            ))}
        </Carousel>
    );
};

export default Screenshots;
