import React, { useState, useRef, useEffect } from 'react'
import NavbarButton from './NavbarButton';
import "../styles/Navbar.css";

interface NavbarProps {
    scrollToSection: (section: string) => void;
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, activeItem, setActiveItem }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > window.innerHeight / 2); // Trigger after 50% scroll
      };
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (

    <nav className={`sticky top-0 z-40 bg-light w-1/2 left-1/2 transform -translate-x-1/2 mt-2.5 rounded-full border-2 border-dark ${isScrolled ? 'navbar-scrolled' : ''}`}>
      {!isScrolled ?
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {['Dashboard', 'About Me', 'Projects', 'Experience', 'Contact'].map((item) => (
            <NavbarButton
              key={item}
              label={item}
              to={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              onClick={() => {
                setActiveItem(item);
                scrollToSection(item);
              }}
            />
              // {item}
            // </NavbarButton>
          ))}
        </div>
      </div>
      :
      <div
        className="fluid-line"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {isMenuOpen && (
          <div className="circular-menu">
            {['Dashboard', 'About Me', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
            <button
              key={item}
              className={`navbar-button ${activeItem === item ? 'active' : ''}`}
              onClick={() => {
                setActiveItem(item);
                scrollToSection(item);
              }}
            >
              {item}
            </button>
          ))}
          </div>
        )}
      </div>
}
    </nav>
    // <nav className="sticky top-0 z-40 bg-light w-6/12 left-1/2 transform -translate-x-1/2 mt-2.5 rounded-full border-2 border-dark">
    //     <div className="mx-auto max-w-6/12 px-2 sm:px-6 lg:px-8">
    //         <div className="flex h-16 items-center justify-between">
    //             {/* <div className="inset-y-0 left-0 flex items-center sm:hidden">
    //                 <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
    //                     <span className="absolute -inset-0.5"></span>
    //                     <span className="sr-only">Open main menu</span>
    //                 </button>
    //             </div>   */}

    //             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //                 <div className="hidden sm:ml-6 sm:block">
    //                     <div className="flex space-x-4">
    //                         <NavbarButton label="Dashboard" to="/" activeItem={activeItem} setActiveItem={setActiveItem} />
    //                         <NavbarButton label="About Me" to="/about" activeItem={activeItem} setActiveItem={setActiveItem} />
    //                         <NavbarButton label="Projects" to="/projects" activeItem={activeItem} setActiveItem={setActiveItem} />
    //                         <NavbarButton label="Experience" to="/experience" activeItem={activeItem} setActiveItem={setActiveItem} />
    //                         <NavbarButton label="Education" to="/education" activeItem={activeItem} setActiveItem={setActiveItem} />
    //                         <NavbarButton label="Contact" to="/contact" activeItem={activeItem} setActiveItem={setActiveItem} />
    //                     </div>
    //                 </div>
    //             </div>
    //             </div>
    //     </div>
    // </nav>

  )
}

export default Navbar;