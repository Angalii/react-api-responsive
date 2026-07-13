import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navStyles = ({ isActive }) => 
        `font-medium text-sm transition-colors duration-200 ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"}`;

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center w-full px-4">
            
            <nav className="bg-[#18181b]/80 backdrop-blur-md border border-zinc-800 px-6 py-2.5 rounded-full flex items-center justify-between md:justify-center gap-6 shadow-xl w-full max-w-xs md:max-w-none md:w-max h-14">
                
                <div className="hidden md:flex items-center gap-6">
                    <NavLink to="/" className={navStyles}>
                        Home
                    </NavLink>
                    <NavLink to="/characters" className={navStyles}>
                        Characters
                    </NavLink>
                </div>

                <img 
                    src="https://wallpapercave.com/wp/wp5794980.jpg" 
                    className="w-9 h-9 md:w-11 md:h-11 object-cover object-center rounded-full border border-zinc-800/50"
                    alt="Logo"
                />
                
                <div className="hidden md:flex items-center gap-6">
                    <NavLink to="/posts" className={navStyles}>
                        Posts
                    </NavLink>
                    <NavLink to="/aboutus" className={navStyles}>
                        Speaking
                    </NavLink>
                </div>

                {/* Botón menú hamburguesa: Solo visible en móviles */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col gap-1.5 md:hidden p-1 focus:outline-none"
                    aria-label="Menú"
                >
                    <span className={`h-0.5 w-5 bg-zinc-300 transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`h-0.5 w-5 bg-zinc-300 transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`h-0.5 w-5 bg-zinc-300 transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Menú desplegable móvil */}
            {isOpen && (
                <div className="mt-3 w-full max-w-xs bg-[#18181b]/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-5 flex flex-col items-center gap-4 shadow-2xl md:hidden">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={navStyles}>
                        Home
                    </NavLink>
                    <NavLink to="/characters" onClick={() => setIsOpen(false)} className={navStyles}>
                        Characters
                    </NavLink>
                    <NavLink to="/posts" onClick={() => setIsOpen(false)} className={navStyles}>
                        Posts
                    </NavLink>
                    <NavLink to="/aboutus" onClick={() => setIsOpen(false)} className={navStyles}>
                        Speaking
                    </NavLink>
                </div>
            )}
        </header>
    );
};

export default Header;