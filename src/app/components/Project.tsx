import React, { useEffect, useRef } from 'react';

interface ProjectProps {
  title: string;         
  text: string;           
  image: string;       
  link?: string;
  index: number;
}

const Project: React.FC<ProjectProps> = ({ title, text, image, link, index }) => {
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={projectRef}
      className={`
        project-card opacity-0
        border-2 border-dark bg-light/90
        backdrop-blur-sm rounded-xl
        w-11/12 max-h-80
        p-4 overflow-hidden
        transform transition-all duration-500
        hover:scale-105 hover:shadow-xl
        group
        relative
      `}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Hover overlay */}
      <div className="
        absolute inset-0 bg-gradient-to-br
        from-dark/0 to-dark/80
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "/>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        <div className="overflow-hidden rounded-lg mb-3 h-32">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover
                     transform group-hover:scale-110
                     transition-transform duration-500"
          />
        </div>

        <h1 className="
          text-xl font-bold mb-2
          text-dark group-hover:text-white
          transition-colors duration-300
        ">
          {title}
        </h1>

        <p className="
          flex-grow text-dark/70
          group-hover:text-white/90
          transition-colors duration-300
          text-sm
        ">
          {text}
        </p>

        {link && (
          <a 
            target="_blank"
            href={link}
            className="
              mt-auto pt-2
              transform translate-y-8
              group-hover:translate-y-0
              transition-transform duration-300
              opacity-0 group-hover:opacity-100
            "
          >
            <div className="
              bg-light text-black
              hover:bg-dark hover:text-light
              border-2 border-dark
              rounded-lg py-2
              text-center text-sm font-medium
              transition-colors duration-300
              relative overflow-hidden
            ">
              <span className="relative z-10">View Project</span>
              <div className="
                absolute inset-0 bg-dark
                transform -translate-x-full
                group-hover:translate-x-0
                transition-transform duration-300
              "/>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;