import React, { useState, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaTerminal } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [error, setError] = useState(false);

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle Terminal Input Navigation
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = command.trim().toLowerCase().replace("#", "");

    if (!cleanCmd) return;

    const matchedItem = navItems.find(
      (item) => item.name.toLowerCase() === cleanCmd
    );

    if (matchedItem) {
      setError(false);
      const targetEl = document.querySelector(matchedItem.href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
      setCommand("");
      setIsOpen(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  // Entrance animation
  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    },
    { scope: navRef }
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 max-w-6xl mx-auto font-mono">
      <nav
        ref={navRef}
        className="relative bg-[#0d1117]/85 backdrop-blur-xl border border-cyan-500/20 shadow-[0_10px_30px_rgba(0,255,240,0.05)] px-4 sm:px-6 py-2.5 flex justify-between items-center rounded-2xl transition-all duration-300"
      >
        {/* Glow Line Top Accent */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-2 group mr-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
          <span className="text-lg font-black tracking-wider text-white group-hover:text-cyan-400 transition-colors">
            SK<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Interactive Terminal Command Input Bar */}
        <form
          onSubmit={handleCommandSubmit}
          className={`flex items-center gap-2 bg-[#161b22]/90 px-3 py-1.5 rounded-xl border transition-all duration-300 ${
            error
              ? "border-red-500/80 shadow-[0_0_12px_rgba(239,68,68,0.3)]"
              : "border-cyan-500/30 focus-within:border-cyan-400 focus-within:shadow-[0_0_12px_rgba(34,211,238,0.25)]"
          }`}
        >
          <FaTerminal className="text-cyan-400 text-xs shrink-0" />
          <span className="text-slate-500 text-xs font-bold hidden sm:inline">
            &gt;
          </span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder={
              error ? "Command not found!" : "Type 'projects' or 'contact'..."
            }
            className={`bg-transparent outline-none text-xs w-36 sm:w-52 transition-colors ${
              error ? "text-red-400 placeholder-red-400/70" : "text-cyan-300 placeholder-slate-500"
            }`}
          />
          <button
            type="submit"
            className="text-[10px] bg-cyan-500/10 hover:bg-cyan-400 hover:text-black text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30 font-semibold transition-all"
          >
            RUN
          </button>
        </form>

        {/* Desktop Quick Nav Links */}
        <ul className="hidden lg:flex items-center gap-1 bg-[#161b22]/40 p-1 rounded-xl border border-white/5">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative px-3 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-all duration-200 block group"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 shadow-[0_0_8px_#22d3ee]" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          className="lg:hidden text-2xl cursor-pointer p-1.5 rounded-xl bg-[#161b22] border border-cyan-500/30 text-cyan-400 hover:text-white transition-all ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-[115%] left-0 right-0 bg-[#0d1117]/95 border border-cyan-500/30 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl backdrop-blur-2xl lg:hidden z-50 origin-top"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all flex justify-between items-center"
              >
                <span>{item.name}</span>
                <span className="text-cyan-400 text-xs">&gt; cd #{item.name.toLowerCase()}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;