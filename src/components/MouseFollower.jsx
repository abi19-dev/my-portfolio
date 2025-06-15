import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newPosition = { x: e.clientX, y: e.clientY };
            setMousePosition(newPosition);
            
            // Add new trail point
            setTrails(prev => {
                const newTrails = [...prev, { ...newPosition, id: Date.now(), opacity: 1 }];
                // Keep only last 15 trail points
                return newTrails.slice(-15);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Fade out trails
        const trailInterval = setInterval(() => {
            setTrails(prev => 
                prev.map(trail => ({ ...trail, opacity: trail.opacity - 0.1 }))
                    .filter(trail => trail.opacity > 0)
            );
        }, 50);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(trailInterval);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {/* Main cursor */}
            <div
                className="absolute w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)',
                }}
            />
            
            {/* Cursor ring */}
            <div
                className="absolute w-8 h-8 border border-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    opacity: 0.6,
                }}
            />

            {/* Trail effects */}
            {trails.map((trail, index) => (
                <div
                    key={trail.id}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                        left: trail.x,
                        top: trail.y,
                        opacity: trail.opacity * 0.7,
                        transform: `translate(-50%, -50%) scale(${trail.opacity})`,
                    }}
                />
            ))}
        </div>
    );
};

export default MouseFollower; 