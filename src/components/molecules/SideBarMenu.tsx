import { useEffect, useRef, useState } from "react";
import NavList from "@components/molecules/NavList";
import HeaderButtonContactUs from "@components/atoms/HeaderButtonContactUs";
interface SideBarMenuProps{
    currentPathName:string
}
const SideBarMenu:React.FC<SideBarMenuProps>= ({currentPathName}) => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        const handleScroll = () => {
            if (window.scrollY > 50 ) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);
    return (
        <>
            <button onClick={toggleSidebar} className={`text-2xl ${scrolled?'text-gray-800':'text-white'} flex items-center justify-center h-10 w-10 rounded-full lg:hidden`} aria-label="menu open">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path></svg>
            </button>
            <aside className={`lg:hidden fixed flex overflow-hidden justify-end  top-0 right-0 h-screen bg-black/50 backdrop-blur-sm transition-all w-full  ${isOpen ? 'max-w-full' : 'max-w-0 duration-700'}`} >
                <menu ref={sidebarRef} className={`bg-white w-[80%] ${isOpen ? 'max-w-full duration-700' : 'max-w-0 duration-300 translate-x-10'} transition-all pt-10 pl-10 pr-5`}>
                    <div className="flex justify-end mb-10">
                        <button onClick={toggleSidebar} className="text-2xl text-gray-800" aria-label="menu close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg>
                        </button>
                    </div>
                    <NavList currentPathName={currentPathName} isMobile={true}/>
                    <hr className="my-10"/>
                    <HeaderButtonContactUs className="" />
                </menu>
            </aside>
        </>
    )
}
export default SideBarMenu