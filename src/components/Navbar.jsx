import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Services", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-xl px-6 md:px-12 py-4 flex justify-between items-center text-white rounded-b-2xl">
      
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-widest text-violet-300 hover:text-white transition duration-500 drop-shadow-md hover:drop-shadow-[0_0_10px_#a78bfa] cursor-pointer">
        SK
      </h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative group transition duration-300 ease-in-out"
            >
              <span className="text-white group-hover:text-violet-300 transition duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-violet-400 group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg border-t border-white/20 py-4 px-6 flex flex-col gap-4 text-lg font-semibold shadow-lg md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-violet-300 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
