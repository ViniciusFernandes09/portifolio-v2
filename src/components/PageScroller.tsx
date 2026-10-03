import React, { useEffect, useRef, useState } from 'react';

interface PageScrollerProps {
    children: React.ReactNode[];
}

export default function PageScroller({ children }: PageScrollerProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const isScrolling = useRef(false);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            if (isScrolling.current) return;

            if (e.deltaY > 0) {
                // Rolagem para baixo
                setCurrentPage((prev) => (prev < children.length - 1 ? prev + 1 : prev));
            } else if (e.deltaY < 0) {
                // Rolagem para cima
                setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
            }

            isScrolling.current = true;
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000); // Tempo de espera entre cada scroll em ms
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [children.length]);

    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <div
                style={{
                    transform: `translateY(-${currentPage * 100}vh)`,
                    transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
                    height: '100vh',
                }}
            >
                {children.map((child, index) => (
                    <div key={index} style={{ height: '100vh', width: '100%' }}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}