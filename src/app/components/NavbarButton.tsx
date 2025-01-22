import React from 'react'

interface NavbarButton {
    label: string;
    activeItem: string;
    onClick: () => void;
}

const NavbarButton: React.FC<NavbarButton> = ({ label, activeItem, onClick }) => {
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