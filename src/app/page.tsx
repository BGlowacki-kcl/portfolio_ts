// Page.tsx
"use client"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections: string[] = ['Home', 'About Me', 'Projects', 'Experience', 'Contact'];
  const [activeItem, setActiveItem] = useState<string>(sections[0]);

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Convert the section id back to the original format
            const sectionName = entry.target.id
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            setActiveItem(sectionName);
          }
        });
      },
      {
        // Adjust these values based on when you want the section to be considered "active"
        rootMargin: '-50% 0px -50% 0px', // Triggers when section is in middle of viewport
        threshold: 0 // Trigger as soon as any part of the element is visible
      }
    );

    // Observe all section elements
    const sectionRefs = [homeRef, aboutMeRef, projectsRef, experienceRef, contactRef];
    sectionRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Empty dependency array since we only want to set this up once

  const scrollToSection = (section: string): void => {
    const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100; // Adjust this value based on your needs
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <div>
      <Navbar 
        sections={sections}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        scrollToSection={scrollToSection}
      />
      <div ref={homeRef} id="home" className="section">
        <Home AboutMeRef={aboutMeRef}/>
      </div>
      <div ref={aboutMeRef} id="about-me" className="section">
        <AboutMe ProjectsRef={projectsRef} />
      </div>
      <div ref={projectsRef} id="projects" className="section">
        <Projects ExperienceRef={experienceRef} />
      </div>
      <div ref={experienceRef} id="experience" className="p-7 overflow-hidden">
        <Experience ContactRef={contactRef} />
      </div>
      <div ref={contactRef} id="contact" className="p-10">
        <Contact />
      </div>
    </div>
  );
}