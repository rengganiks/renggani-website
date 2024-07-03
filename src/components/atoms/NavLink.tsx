import React from 'react';

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, className, children }) => (
  <li>
    <a
      href={href}
      className={`font-medium text-gray-800 hover:text-blue-800 transition-all duration-500 ${className}`}
    >
      {children}
    </a>
  </li>
);

export default NavLink;
