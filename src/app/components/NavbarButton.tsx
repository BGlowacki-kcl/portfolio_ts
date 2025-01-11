import React from 'react'
import { Link } from 'react-router-dom';

interface NavbarButton {
    label: string;
    to: string;
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarButton: React.FC<NavbarButton> = ({ label, to, activeItem, setActiveItem }) => {
    const isActive = activeItem === label;
  
    return (
      <Link to={to}>
        <button
          className={`rounded-md px-3 py-2 text-sm font-medium ${
            isActive
              ? 'bg-black text-light'
              : 'text-primary hover:bg-dark hover:text-white'
          }`}
          onClick={() => setActiveItem(label)}
        >
          {label}
        </button>
      </Link>
    );
};


export default NavbarButton