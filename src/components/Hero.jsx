import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Profile3DCanvas from './Profile3D';
import profileVideo from '../assets/video4.mp4';
import './Hero.css';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const containerRef = useRef(null);
  const spotlightTextRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    gsap.fromTo(
      '.reveal-item',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' }
    );
  }, { scope: containerRef });

  // Update Cursor Spotlight Mask over the Title Text
  const handlePointerMove = contextSafe((clientX, clientY) => {
    if (!containerRef.current || !spotlightTextRef.current) return;

    const rect = spotlightTextRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    spotlightTextRef.current.style.setProperty('--spot-x', `${x}px`);
    spotlightTextRef.current.style.setProperty('--spot-y', `${y}px`);
  });

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onTouchMove={(e) =>
        e.touches[0] && handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)
      }
      className="relative min-h-screen flex items-center justify-center bg-[#030509] text-white overflow-hidden px-4 sm:px-8 py-20"
    >

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      {/* ================= FOREGROUND CONTENT & 3D CANVAS ================= */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: Modern Content */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          <div className="reveal-item inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/90 border border-violet-500/30 backdrop-blur-xl shadow-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono tracking-widest text-violet-300 uppercase">Available for Work</span>
          </div>

          <div className="space-y-2">
            <h1 className="reveal-item text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              SURENDAR<span className="text-violet-500">.</span>K
            </h1>

            {/* Spotlight Interactive Title */}
            <div className="reveal-item relative inline-block">
              {/* Base Very Dark/Dull Title */}
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-800/80 tracking-wide select-none">
                FULL STACK JAVA DEVELOPER
              </h2>

              {/* Ultra-Bright Spotlight Overlay Layer */}
              <h2
                ref={spotlightTextRef}
                className="absolute inset-0 text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-cyan-300 tracking-wide brightness-150 drop-shadow-[0_0_35px_rgba(167,139,250,1)] filter pointer-events-none select-none"
                style={{
                  WebkitMaskImage: `radial-gradient(130px circle at var(--spot-x, 50%) var(--spot-y, 50%), black 0%, transparent 100%)`,
                  maskImage: `radial-gradient(130px circle at var(--spot-x, 50%) var(--spot-y, 50%), black 0%, transparent 100%)`,
                }}
              >
                FULL STACK JAVA DEVELOPER
              </h2>
            </div>
          </div>

          <p className="reveal-item text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
            I engineer high-performance web applications with modern React, robust Java backends, interactive WebGL/Three.js 3D elements, and clean design systems.
          </p>

          <div className="reveal-item flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Featured Work
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Contact Direct
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Interactive Canvas Stage */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <Profile3DCanvas videoSrc={profileVideo} />
        </div>

      </div>
    </section>
  );
};

export default Hero;