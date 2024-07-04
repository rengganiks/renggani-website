import React from 'react';

interface NavListProps {
  children: React.ReactNode;
  isMobile?:boolean
}

const NavList: React.FC<NavListProps> = ({ children,isMobile=false }) => (
  <ul className={`${isMobile?'flex flex-col justify-start gap-10':'lg:flex items-center hidden'} xl:gap-7  lg:gap-5 font-roboto`}>
    {children}
  </ul>
);

export default NavList;