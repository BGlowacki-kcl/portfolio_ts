import React, { useState, useEffect } from 'react';

export interface NavbarProps {
  sections: string[];
  activeItem: string;
  setActiveItem: (item: string) => void;
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  sections, 
  activeItem, 
  setActiveItem, 
  scrollToSection 
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 2,
    duration: 10 + Math.random() * 5
  }));

  return (
    <nav 
      className={`
        fixed transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'left-8 top-1/2 -translate-y-1/2 w-12' 
          : 'top-0 left-1/2 -translate-x-1/2 w-1/2 mt-2.5'
        }
        z-40 rounded-full border-2 border-dark
        ${!isScrolled ? 'bg-light' : ''}
      `}
    >
      {!isScrolled ? (
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {sections.map((item: string) => (
              <button
                key={item}
                type="button"
                className={`
                  px-4 py-2 rounded-full transition-all
                  ${activeItem === item 
                    ? 'bg-dark text-light' 
                    : 'hover:bg-dark/10'
                  }
                `}
                onClick={() => {
                  setActiveItem(item);
                  scrollToSection(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
        <div
          className={`
            relative group
            ${isMenuOpen ? 'w-48' : 'w-12'}
            transition-all duration-500 ease-in-out
          `}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          {/* Main expanding container */}
          <div 
            className={`
              relative overflow-hidden
              w-12
              transition-all duration-500 ease-in-out
              ${isMenuOpen 
                ? 'w-48 rounded-l-full h-64 rounded-r-lg' 
                : 'rounded-full hover:shadow-lg h-24 hover:scale-105'
              }
            `}
          >
            {/* Floating particles */}
            {isMenuOpen && particles.map(particle => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 bg-light/30 rounded-full"
                style={{
                  animation: `
                    float ${particle.duration}s linear ${particle.delay}s infinite,
                    pulse 2s ease-in-out infinite
                  `,
                }}
              />
            ))}
            
            {/* Gradient overlay */}
            <div 
              className={`
                absolute inset-0
                bg-gradient-to-r from-dark/50 to-dark
                transition-opacity duration-500
              `}
            />
          </div>
          
          {/* Menu items */}
          <div 
            className={`
              absolute left-16 top-1/2 -translate-y-1/2
              transition-all duration-500
              ${isMenuOpen 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-4'
              }
            `}
          >
            {sections.map((item: string) => (
              <button
                key={item}
                type="button"
                className={`
                  block w-full text-left px-4 py-2 mb-1
                  rounded-lg transition-all duration-300
                  hover:bg-dark/10 hover:scale-105
                  ${activeItem === item 
                    ? 'text-dark font-bold bg-light/10' 
                    : 'text-light hover:text-dark'
                  }
                `}
                onClick={() => {
                  setActiveItem(item);
                  scrollToSection(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;