"use client"

import React, { useEffect, useRef } from 'react'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
        <div className='flex flex-col justify-center items-center h-full w-1/2'>
          <div className='w-full ml-auto mr-auto flex items-center justify-center text-dark text-2xl'>
          Hi, I’m Bartosz, a Software Engineer from Poland who loves solving problems and thinking strategically—skills honed through years of playing competitive chess. I’m passionate about creating, whether it’s through coding, building cool web apps, or exploring new AI technologies. When I’m not programming, you’ll find me competing in chess tournaments, enjoying a good logic puzzle, or learning something new.
          </div>
          <div className='flex flex-row'>
            <div className="animate-bounce flex mt-8 mr-6 h-10 w-20 rounded-md items-center justify-center bg-secondary text-dark border border-spacing-0 border-black">
              <a href='resume.pdf' target='_blank'>Resume</a>
            </div>
            <a className='mt-8 animate-bounce ml-6 mr-6' href="https://github.com/BGlowacki-kcl" target="_blank" ><GitHubIcon fontSize='large' /></a>
            <a className="mt-8 animate-bounce ml-6 mr-6" href="https://www.linkedin.com/in/bartosz-glowacki-kcl/" target="_blank" ><LinkedInIcon fontSize='large' /></a>
          </div>
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