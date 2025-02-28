import React from 'react';
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
      title: "Airport Management",
      text: "Python Django web application that helps airlines and airports manage their operations. It includes features like flight scheduling, task management and ticket purchase. It contains multiple database models and relationships.",
      image: "/home-bg.jpeg",
    },
    {
      title: "Connecting Tutors with Students",
      text: "University project, a fully functional web application that helps connect tutors to students, with roles like admin, generating invoices, and managing timetable for both tutors and students.",
      image: "/tutors.png",
      link: "https://teameland.pythonanywhere.com/"
    },
    {
      title: "Newsify AI",
      text: "Newsify AI is a chatbot application that uses RAG for giving you the latest information from any topic you want. Leveraging Llama 3.1 model its long-term memory allows for more sophisticated answers.",
      image: "/news.png",
      link: "https://newsify-ai-jvev.vercel.app/"
    },
    {
      title: "Inventory Management",
      text: "Simple and fast NextJS app that helps quickly add new items, remove items or change the quantity of items in the inventory. It consists of searching functionality, anonymous authentication and a simple dataase",
      image: "/invent.png",
      link: "https://inventory-nextjs.vercel.app/"
    },
    {
      title: "Penguins Clusters",
      text: "Data analysis on penguins with done with pandas and matplotlib Python libraries. Algorithm used for clustering is KMeans and the elbow method along with silhouette score was utilized to find the best parameter K.",
      image: "/penguins.png",
      link: "https://github.com/BGlowacki-kcl/penguins-cluster/blob/main/penguins.ipynb"
    },
    {
      title: "Data Structures in Java",
      text: "Github repository withthe most important data structures implemented from stratch in Java. It includes linked lists, array lists, sorting algorithms, queues, stacks, heaps, hash maps and more",
      image: "/java.jpg",
      link: "https://github.com/BGlowacki-kcl/Data-structures"
    },
    {
      title: "Titanic survival prediction",
      text: "Machine Learning project that uses K-nearest neighbours algorithm to predict whether a passenger survived the Titanic disaster. It uses the famous Titanic dataset from Kaggle.",
      image: "/titanic.jpeg",
      link: "https://mern-store-basic-1.onrender.com/"
    },
    {
      title: "JavaFX game of life",
      text: "JavaFX implementation of Conway's Game of Life. It includes features like multiple cells kinds, different rules for each cell, and a simple GUI for manipulating the board.",
      image: "/cells.png",
      link: "https://github.com/BGlowacki-kcl/Coursework_3"
    },
    // coursework_3 (cells)
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
