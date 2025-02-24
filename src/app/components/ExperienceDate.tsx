import { Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

interface ExperienceDateProps {
    date: string;
}

const ExperienceDate: React.FC<ExperienceDateProps> = ({date}) => {
  const dateRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateViewportOffset = () => {
      if (!dateRef.current) return;
      
      const rect = dateRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Calculate distance from center of viewport (normalized between -1 and 1)
      const distanceFromCenter = (elementCenter - viewportCenter) / (windowHeight / 2);
      
      // Create a parabolic curve effect that peaks at the viewport center
      const maxOffset = 150; // Maximum pixel offset
      const offsetValue = maxOffset * (1 - Math.pow(distanceFromCenter, 2));
      
      setOffset(Math.max(0, offsetValue)); // Ensure offset is never negative
      setIsVisible(rect.top < windowHeight && rect.bottom > 0);
    };

    // Initial calculation
    calculateViewportOffset();

    // Recalculate on scroll
    const handleScroll = () => {
      window.requestAnimationFrame(calculateViewportOffset);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateViewportOffset);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateViewportOffset);
    };
  }, []);
  return (
    <div
      ref={dateRef}
      className="relative flex flex-row items-center w-2/5 z-30 m-4"
      style={{
        transform: `translateX(${isVisible ? offset : -100}px)`,
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.3s ease-out, opacity 0.5s ease-out',
        willChange: 'transform, opacity'
      }}
    >
      <div className='relative h-2 w-full bg-dark flex-grow'></div> <Typography className='font-serif flex-shrink-0 pl-2' >&nbsp; {date}</Typography>
    </div>
  )
}

export default ExperienceDate