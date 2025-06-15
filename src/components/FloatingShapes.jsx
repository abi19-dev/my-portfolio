import React from 'react';

const FloatingShapes = () => {
    const shapes = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    className={`absolute opacity-10 ${
                        shape.shape === 'circle' ? 'rounded-full' :
                        shape.shape === 'square' ? 'rounded-lg' : ''
                    }`}
                    style={{
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        left: `${shape.left}%`,
                        top: `${shape.top}%`,
                        background: shape.shape === 'triangle' ? 'none' : 
                                  `linear-gradient(45deg, #facc15, #fbbf24)`,
                        animationName: 'float',
                        animationDuration: `${shape.duration}s`,
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite',
                        animationDelay: `${shape.delay}s`,
                        borderLeft: shape.shape === 'triangle' ? `${shape.size/2}px solid transparent` : 'none',
                        borderRight: shape.shape === 'triangle' ? `${shape.size/2}px solid transparent` : 'none',
                        borderBottom: shape.shape === 'triangle' ? `${shape.size}px solid #facc15` : 'none',
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes; 