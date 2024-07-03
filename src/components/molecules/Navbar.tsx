import type { ReactNode } from "react";

interface NavbarProps {
    children: ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ children }) => (
    <nav role="navigation" className="bg-white shadow py-3 px-5 lg:px-20 flex items-center justify-between">
        {children}
    </nav>
)

export default Navbar