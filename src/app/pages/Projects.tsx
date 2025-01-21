import React, { useEffect } from 'react';
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

  const projects = [
    {
      title: "Airport Management app",
      text: "Python Django web application that helps airlines and airports manage their operations. It includes features like flight scheduling, task management and ticket purchase. It contains multiple database models and relationships.",
      image: "/home-bg.jpeg",
      link: "https://airport-kgl3.onrender.com"
    },
    {
      title: "Connecting Tutors with Students",
      text: "University project, a fully functional web application that helps connect tutors to students, with roles like admin, generating invoices, and managing timetable for both tutors and students.",
      image: "/tutors.png",
      link: "https://teameland.pythonanywhere.com/"
    },
    {
      title: "Airport Management app",
      text: "Python Django web application that helps airlines and airports manage their operations. It includes features like flight scheduling, task management and ticket purchase. It contains multiple database models and relationships.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com"
    },
    {
      title: "Airport Management app",
      text: "Python Django web application that helps airlines and airports manage their operations. It includes features like flight scheduling, task management and ticket purchase. It contains multiple database models and relationships.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com"
    },
    {
      title: "Airport Management app",
      text: "Python Django web application that helps airlines and airports manage their operations. It includes features like flight scheduling, task management and ticket purchase. It contains multiple database models and relationships.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com"
    },
    {
      title: "Airport Management app",
      text: "Python Django web application that helps airlines and airports manage their operations. It includes features like flight scheduling, task management and ticket purchase. It contains multiple database models and relationships.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com"
    },
    // ... rest of your projects
  ];

  return (
    <div className='relative flex flex-col justify-center items-center h-screen w-screen z-30'>
      {/* Background grid animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-dark/[0.02] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      {/* Projects grid */}
      <div className='
        relative grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2
        gap-5 justify-center h-screen w-screen z-20
        px-16 py-8 overflow-auto
      '>
        {projects.map((project, index) => (
          <Project 
            key={index}
            {...project}
            index={index}
          />
        ))}
      </div>

      {/* Scroll button */}
      <button 
          className="absolute bottom-6 text-black px-6 py-3 z-20 rounded-lg shadow-md hover:bg-secondary focus:outline-none animate-pulse"
          onClick={scrollToSection}
        >
          <KeyboardDoubleArrowDownOutlinedIcon />
        </button>
    </div>
  );
};

export default Projects;