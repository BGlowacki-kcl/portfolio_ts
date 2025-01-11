"use client"

import React from 'react'
import StarrySky from '../components/Starback'
import { Typography } from '@mui/material'
import { Rubik_Vinyl } from 'next/font/google';
import { useRef } from 'react';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

const rubikVinyl = Rubik_Vinyl({
  subsets: ['latin'], // Choose the desired subsets, you can add others like 'latin-ext' if needed
  weight: '400', // Choose the weights you want
});

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="absolute inset-0 z-10">
        <StarrySky starCount={100}/>
      </div>

      <div className={`${rubikVinyl.className} relative z-20 flex flex-col items-center justify-center h-screen w-screen`}>
        <div id="first_text" >Who is...</div>
        <div id="second_text" >Bartosz?</div>
        <button 
          className="relative bottom-4 text-black px-6 py-3 rounded-lg shadow-md hover:bg-secondary focus:outline-none animate-pulse"
          onClick={scrollToSection}
        >
          <KeyboardDoubleArrowDownOutlinedIcon />
        </button>
      </div>
      <div ref={targetRef} className='relative flex justify-center items-center h-screen w-screen z-20 boprder'>
        <div className='bg-primary h-3/4 w-5/6 border-2 border-black rounded-xl'>
        </div>
      </div> 
    </div>
  )
}

export default Home

      {/* <div className='flex flex-col h-screen w-screen overflow-hidden bg-opacity-0'>
        <div className='flex flex-col w-2/3 right-0 h-screen ml-[66%] bg-dark rotate-12'>
        </div>
      </div> */}