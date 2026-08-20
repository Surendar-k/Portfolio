import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import profileImage from '../assets/profilects.png';
import {
  FaGlobe,
  FaFileDownload,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiGithub,
  SiFirebase,
  SiGooglecloud,
  SiNetlify,
  SiMysql,
} from 'react-icons/si';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview'); // overview | stack | education

  useGSAP(
    () => {
      // Browser Window Entrance Animation
      gsap.fromTo(
        '.browser-window',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.browser-window',
            start: 'top 85%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 px-4 sm:px-8 bg-[#080b11] text-slate-100 font-sans overflow-hidden"
    >

      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <FaCode /> DEVTOOLS_INSPECTOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm">
            Inspect my profile details, tech capabilities, and academic history live below.
          </p>
        </div>

        {/* SIMULATED BROWSER WINDOW */}
        <div className="browser-window rounded-2xl bg-[#0e131f] border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Address & Navigation Bar */}
          <div className="bg-[#141a29] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            
            {/* Window Dots & Tab Switcher */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>

              <div className="flex bg-[#0a0d14] p-1 rounded-lg border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1 rounded transition-all ${
                    activeTab === 'overview'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Overview.html
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1 rounded transition-all ${
                    activeTab === 'stack'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  TechStack.css
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-3 py-1 rounded transition-all ${
                    activeTab === 'education'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Academic.json
                </button>
              </div>
            </div>

            {/* URL Search Bar */}
            <div className="flex-1 max-w-sm hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0d14] border border-slate-800 text-xs font-mono text-slate-400">
              <FaGlobe className="text-cyan-400" />
              <span className="text-slate-200">https://surendar-k.dev/about/{activeTab}</span>
            </div>

          </div>

          {/* MAIN WORKSPACE CANVAS */}
          <div className="p-6 sm:p-8 min-h-[460px] flex flex-col justify-between bg-[#0b0e17]">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={profileImage}
                    alt="Surendar K"
                    className="w-32 h-32 rounded-2xl object-cover border-2 border-indigo-500/40 shadow-xl"
                  />
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      &lt;DeveloperProfile /&gt;
                    </span>
                    <h3 className="text-2xl font-bold text-white">Surendar K</h3>
                    <p className="text-sm text-indigo-300 font-medium">
                      Full-Stack Developer
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      Full-stack developer building seamless solutions using <span className="text-violet-300 font-semibold">React.js</span>, <span className="text-violet-300 font-semibold">Node.js</span>, and <span className="text-violet-300 font-semibold">TailwindCSS</span>. Focused on writing clean, efficient code and growing through new challenges.
                    </p>
                  </div>
                </div>

                {/* Personal Information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { icon: <FaBirthdayCake className="text-indigo-400" />, label: 'Date of Birth', value: 'April 19, 2004' },
                    { icon: <FaMapMarkerAlt className="text-indigo-400" />, label: 'Location', value: 'Tiruvannamalai, TN' },
                    { icon: <FaEnvelope className="text-indigo-400" />, label: 'Email', value: 'surendarkumar2k@gmail.com', href: 'mailto:surendarkumar2k@gmail.com' },
                    { icon: <FaPhone className="text-indigo-400" />, label: 'Phone', value: '+91 94877 69772', href: 'tel:+919487769772' },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#131926] border border-slate-800 flex items-center gap-3 text-xs">
                      <div className="text-base">{item.icon}</div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-mono">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="text-cyan-400 hover:underline font-semibold">{item.value}</a>
                        ) : (
                          <span className="text-white font-semibold">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: TECH STACK */}
            {activeTab === 'stack' && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  /* Technical Capabilities */
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
                    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
                    { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript' },
                    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
                    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
                    { icon: <SiMysql className="text-blue-400" />, name: 'MySQL' },
                    { icon: <FaGitAlt className="text-orange-400" />, name: 'Git' },
                    { icon: <SiGithub className="text-white" />, name: 'GitHub' },
                    { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind' },
                    { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
                    { icon: <SiGooglecloud className="text-blue-300" />, name: 'Google Cloud' },
                    { icon: <SiNetlify className="text-green-400" />, name: 'Netlify' },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-[#131926] border border-slate-800 flex items-center gap-3 text-xs hover:border-indigo-500/50 transition-colors"
                    >
                      <div className="text-xl">{skill.icon}</div>
                      <span className="font-bold text-white">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: ACADEMIC RECORD */}
            {activeTab === 'education' && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <FaGraduationCap /> // Academic Credentials
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-[#131926] border border-slate-800 space-y-1">
                    <div className="flex justify-between text-indigo-300 font-bold">
                      <span>B.Tech – Information Technology</span>
                      <span className="font-mono text-slate-400">2022 – 2026</span>
                    </div>
                    <div className="text-white font-medium">RMK Engineering College</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#131926] border border-slate-800 space-y-1">
                    <div className="flex justify-between text-indigo-300 font-bold">
                      <span>HSC – Class XII</span>
                      <span className="font-mono text-slate-400">2020 – 2021</span>
                    </div>
                    <div className="text-white font-medium">Sishya Matric Hr. Sec. School</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#131926] border border-slate-800 space-y-1">
                    <div className="flex justify-between text-indigo-300 font-bold">
                      <span>SSLC – Class X</span>
                      <span className="font-mono text-slate-400">2018 – 2019</span>
                    </div>
                    <div className="text-white font-medium">Sishya Matric Hr. Sec. School</div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Action Bar */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Open to freelance and internship opportunities.
              </span>
              <a
                href="https://drive.google.com/file/d/1GYYz-5R3yfUfzOJX_47eOZHZCGPnwCP1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg"
              >
                <FaFileDownload /> Download Resume
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;