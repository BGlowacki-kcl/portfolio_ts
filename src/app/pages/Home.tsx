"use client"

import React, { useEffect } from 'react'
import StarrySky from '../components/Starback'
import { Rubik_Vinyl } from 'next/font/google';
import { useRef } from 'react';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import Project from '../components/Project';

const rubikVinyl = Rubik_Vinyl({
  subsets: ['latin'], // Choose the desired subsets, you can add others like 'latin-ext' if needed
  weight: '400', // Choose the weights you want
});

interface HomeProps {
  AboutMeRef: React.RefObject<HTMLDivElement>;
}

const Home: React.FC<HomeProps> = ({AboutMeRef}) => {

  const scrollToSection = () => {
    if (AboutMeRef.current) {
      AboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
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

    // Start observing the profile element
    if (AboutMeRef.current) {
      observer.observe(AboutMeRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (AboutMeRef.current) {
        observer.unobserve(AboutMeRef.current);
      }
    };
  }, []);


  return (
    <div>
      <StarrySky starCount={100}/>

      <div className={`${rubikVinyl.className} relative z-20 flex flex-col items-center justify-center h-screen w-screen`}>
        <div id="first_text" >Who is...</div>
        <div id="second_text" >Bartosz?</div>
        <button 
          className="absolute bottom-6 text-black px-6 py-3 rounded-lg shadow-md hover:bg-secondary focus:outline-none animate-pulse"
          onClick={scrollToSection}
        >
          <KeyboardDoubleArrowDownOutlinedIcon />
        </button>
      </div>
    </div>
  )
}

export default Home