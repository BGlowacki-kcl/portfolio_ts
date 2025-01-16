'use client'

import React from 'react'
import Project from '../components/Project';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

interface ProjectsProps {
  ExperienceRef: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<ProjectsProps> = ({ExperienceRef}) => {

  const scrollToSection = () => {
    if (ExperienceRef.current) {
      ExperienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative flex flex-col justify-center items-center h-screen w-screen z-30'>
      <div className='relative grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center h-screen w-screen z-20 pl-16 pr-16'>
        <Project 
          title="Project 1"
          text="This is the first project. i used react and tailwindcss to create this project."
          image="https://via.placeholder.com/150"
        />
        <Project 
          title="Project 1"
          text="This is the first project. i used react and tailwindcss to create this project."
          image="https://via.placeholder.com/150"
          link="https://www.google.com"
        />
        <Project 
          title="Project 1"
          text="This is the first project. i used react and tailwindcss to create this project."
          image="https://via.placeholder.com/150"
          link="https://www.google.com"
        />
        <Project 
          title="Project 1"
          text="This is the first project. i used react and tailwindcss to create this project."
          image="https://via.placeholder.com/150"
          link="https://www.google.com"
        />
        <Project 
          title="Project 1"
          text="This is the first project. i used react and tailwindcss to create this project."
          image="https://via.placeholder.com/150"
          link="https://www.google.com"
        />
        <Project 
          title="Project 1"
          text="This is the first project. i used react and tailwindcss to create this project."
          image="https://via.placeholder.com/150"
          link="https://www.google.com" 
        />
        <Project 
          title="Project 1"
          text="This is the first project. i used react and tailwindcss to create this project."
          image="https://via.placeholder.com/150"
          link="https://www.google.com" 
        />
      </div>
      <button 
        className="absolute bottom-6 z-20 text-black px-6 py-3 rounded-lg shadow-md hover:bg-secondary focus:outline-none animate-pulse"
        onClick={scrollToSection}
      >
        <KeyboardDoubleArrowDownOutlinedIcon />
      </button>
    </div>
  )
}

export default Projects;