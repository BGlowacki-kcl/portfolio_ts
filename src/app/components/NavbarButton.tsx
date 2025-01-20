import React from 'react'

interface NavbarButton {
    label: string;
    to: string;
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
    onClick: () => void;
}

const NavbarButton: React.FC<NavbarButton> = ({ label, to, activeItem, setActiveItem, onClick }) => {
    const isActive = activeItem === label;
  
    return (
        <button
          key={label}
          className={`rounded-md px-3 py-2 text-sm font-medium ${
            isActive
              ? 'bg-black text-light'
              : 'text-primary hover:bg-dark hover:text-white'
          }`}
          onClick={() => {
            onClick();
          }}
        >
          {label}
        </button>
    );
};


export default NavbarButton