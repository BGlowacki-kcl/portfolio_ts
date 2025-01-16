"use client"

import React, { useEffect, useRef } from 'react'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

interface AboutMeProps {
  ProjectsRef: React.RefObject<HTMLDivElement>;
}

const AboutMe: React.FC<AboutMeProps> = ({ProjectsRef}) => {
  const profileRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Add the 'visible' class when the element is in view
            entry.target.classList.add("visible");
          }
        },
        {
          threshold: 0.5, // Trigger when 50% of the element is in view
        }
    );
    const profileElement = profileRef.current;
    if (profileElement) {
      observer.observe(profileElement);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (profileElement) {
        observer.unobserve(profileElement);
      }
    };
  }, []);

  return (
    <div className='relative flex flex-col justify-center items-center h-screen w-screen z-30 boprder'>
      <div ref={ profileRef } className='bg-primary h-3/4 w-5/6 border-2 border-black rounded-xl profile flex'>
        <div className='flex h-full w-5/12'>
          <img src='profile_img.jpeg' alt='profile' className='rounded-full w-1/2 m-auto shadow-2xl border-2 border-dark'/>
        </div>
        <div className='h-full w-6/12 ml-auto mr-auto flex items-center justify-center text-dark text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <button 
        className="absolute bottom-6 text-black px-6 py-3 rounded-lg shadow-md hover:bg-secondary focus:outline-none animate-pulse"
        onClick={scrollToSection}
      >
        <KeyboardDoubleArrowDownOutlinedIcon />
      </button>
    </div> 
  )
}

export default AboutMe