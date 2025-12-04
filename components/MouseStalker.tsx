import React, { useEffect, useState, useRef } from 'react';

const MouseStalker: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  
  // Use a ref for the trailing effect to avoid re-rendering heavy DOM excessively
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (trailerRef.current) {
        // Add a slight delay for the "stalker" feel using CSS transition or JS lag
        // Here we use direct update for responsiveness, CSS handles the transition lag
        trailerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Main Cursor Dot */}
      <div 
        ref={cursorRef}
        className={`absolute top-0 left-0 w-4 h-4 rounded-full bg-neo-orange -ml-2 -mt-2 mix-blend-difference transition-transform duration-75 ease-out ${clicked ? 'scale-150' : 'scale-100'}`}
      />
      
      {/* Trailing Ring */}
      <div 
        ref={trailerRef}
        className={`absolute top-0 left-0 w-10 h-10 border-2 border-neo-cyan rounded-full -ml-5 -mt-5 transition-all duration-300 ease-out opacity-60 ${clicked ? 'scale-50 border-neo-orange' : 'scale-100'}`}
      />
    </div>
  );
};

export default MouseStalker;