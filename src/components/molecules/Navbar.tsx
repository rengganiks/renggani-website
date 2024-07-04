import React, { useEffect, useState } from "react";

interface NavbarProps {
    children: React.ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);

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
        <nav role="navigation" className={`${scrolled? 'bg-white' :'bg-transparent'} py-3 px-5 lg:px-20 fixed top-0 left-0 right-0 z-50 flex items-center justify-between`}>
            {children}
        </nav>
    )
}

export default Navbar