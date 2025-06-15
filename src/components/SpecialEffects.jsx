import React, { useEffect, useState } from 'react';

const SpecialEffects = () => {
    const [stars, setStars] = useState([]);
    const [orbs, setOrbs] = useState([]);

    useEffect(() => {
        // Create shooting stars periodically
        const starInterval = setInterval(() => {
            const newStar = {
                id: Date.now(),
                left: Math.random() * 100,
                top: Math.random() * 50,
                delay: 0,
            };
            
            setStars(prev => [...prev, newStar]);
            
            // Remove star after animation
            setTimeout(() => {
                setStars(prev => prev.filter(star => star.id !== newStar.id));
            }, 3000);
        }, 5000);

        // Create glowing orbs
        const orbInterval = setInterval(() => {
            const newOrb = {
                id: Date.now(),
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 30 + 10,
                duration: Math.random() * 8 + 4,
            };
            
            setOrbs(prev => [...prev, newOrb]);
            
            // Remove orb after animation
            setTimeout(() => {
                setOrbs(prev => prev.filter(orb => orb.id !== newOrb.id));
            }, newOrb.duration * 1000);
        }, 3000);

        return () => {
            clearInterval(starInterval);
            clearInterval(orbInterval);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Shooting Stars */}
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        boxShadow: '0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15',
                        animationName: 'shootingStar',
                        animationDuration: '3s',
                        animationTimingFunction: 'ease-out',
                        animationFillMode: 'forwards',
                    }}
                />
            ))}

            {/* Glowing Orbs */}
            {orbs.map(orb => (
                <div
                    key={orb.id}
                    className="absolute rounded-full bg-yellow-400 opacity-20"
                    style={{
                        left: `${orb.left}%`,
                        top: `${orb.top}%`,
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        boxShadow: '0 0 20px rgba(250, 204, 21, 0.3)',
                        animationName: 'floatingOrb',
                        animationDuration: `${orb.duration}s`,
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite',
                    }}
                />
            ))}

            {/* Static Background Stars */}
            <div className="absolute inset-0">
                {Array.from({ length: 50 }, (_, i) => (
                    <div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationName: 'twinkle',
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            animationTimingFunction: 'ease-in-out',
                            animationIterationCount: 'infinite',
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SpecialEffects; 