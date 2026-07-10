import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navStyles = ({ isActive }) => 
        `font-medium text-sm transition-colors duration-200 ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"}`;
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 h-14">
            <nav className="bg-[#18181b]/80 backdrop-blur-md border border-zinc-800 px-6 py-2.5 rounded-full flex items-center gap-6 shadow-xl">
                <NavLink to="/" className={navStyles}>
                Home
                </NavLink>
                <NavLink to="/characters" className={navStyles}>
                Characters
                </NavLink>

                <img 
                src="https://wallpapercave.com/wp/wp5794980.jpg" 
                className='w-20 h-23 object-cover object-center aspect-square rounded-full' 
                />

                <NavLink to="/posts" className={navStyles}>
                Posts
                </NavLink>
                <NavLink to="/aboutus" className={navStyles}>
                Speaking
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;