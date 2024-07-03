import React from 'react';

interface NavListProps {
  children: React.ReactNode;
}

const NavList: React.FC<NavListProps> = ({ children }) => (
  <ul className="flex items-center gap-10 font-roboto">
    {children}
  </ul>
);

export default NavList;