"use client"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { useRef, useState } from "react";

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeItem, setActiveItem] = useState<string>('Dashboard');

  const scrollToSection = (section: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
      Dashboard: homeRef,
      'About Me': aboutMeRef,
      Projects: projectsRef,
      Experience: experienceRef,
      Contact: contactRef,
    };

    const targetRef = sectionMap[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div>
        <Navbar scrollToSection={scrollToSection} activeItem={activeItem} setActiveItem={setActiveItem} />
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
        <div ref={contactRef} id="contact" className="section">
          <Contact />
        </div>
      </div>
  );
}
