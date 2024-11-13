import Image from 'next/image';
import React, { useState } from 'react'
import NavbarButton from './NavbarButton';


const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [activeItem, setActiveItem] = useState<string>('Dashboard');

  return (
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>

                    </button>
                </div>  

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                        <img height={32} width={32} src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <NavbarButton label="Dashboard" to="/" activeItem={activeItem} setActiveItem={setActiveItem} />
                            <NavbarButton label="About Me" to="/about" activeItem={activeItem} setActiveItem={setActiveItem} />
                            <NavbarButton label="Projects" to="/projects" activeItem={activeItem} setActiveItem={setActiveItem} />
                            <NavbarButton label="Experience" to="/experience" activeItem={activeItem} setActiveItem={setActiveItem} />
                            <NavbarButton label="Education" to="/education" activeItem={activeItem} setActiveItem={setActiveItem} />
                            <NavbarButton label="Contact" to="/contact" activeItem={activeItem} setActiveItem={setActiveItem} />
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </nav>

  )
}

export default Navbar;