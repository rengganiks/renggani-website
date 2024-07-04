import React, { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolledDefault?:boolean;
  isActive?:boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, children,scrolledDefault=false,isActive=false }) => {
  const [scrolled, setScrolled] = useState(scrolledDefault);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <li>
      <a
        href={href}
        className={`font-medium border-2 px-7 border-transparent py-3 rounded-full ${scrolled 
          ? (`text-gray-800 hover:text-blue-800 hover:border-blue-800 hover:bg-blue-50 
            ${isActive && 'text-blue-800 border-blue-800 bg-blue-50'}`)
          : (`text-white hover:border-white hover:backdrop-blur-sm hover:bg-white/10 
            ${isActive && 'border-white backdrop-blur-sm bg-white/10'}`)} transition-all duration-300`}
      >
        
        {children}
      </a>
    </li>
  )
};

export default NavLink;
