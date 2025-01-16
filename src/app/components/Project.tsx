import React from 'react'

interface ProjectProps {
  title: string;         
  text: string;           
  image: string;       
  link?: string;         
}

const Project: React.FC<ProjectProps> = ({ title, text, image, link})  => {
  return (
    <div className="project_card border-1 border-dark bg-primary rounded-lg w-11/12 min-h-64 max-h-64 p-4">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{text}</p>
      <a target="_blank" href={link} className={`flex justify-center items-center ${link ? 'visible' : 'invisible'}`}>
        <div className='flex bg-secondary w-1/3 h-8 border-2 border-black items-center justify-center rounded-lg'>
          View Project
        </div>
      </a>
    </div>
  )
}

export default Project