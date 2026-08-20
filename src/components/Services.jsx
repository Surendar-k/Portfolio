import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaTerminal, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    id: "SRV_01",
    icon: <FaPaintBrush className="text-pink-400" />,
    title: "Web Design & UI/UX",
    desc: "Crafting modern, user-centric interfaces with responsive layouts, smooth animations, and optimized interaction design for strong brand impact.",
    tags: ["FigmaToCode", "TailwindCSS", "Responsive"],
    accent: "group-hover:border-pink-500/50 hover:shadow-[0_0_35px_rgba(244,114,182,0.15)]",
    badge: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  },
  {
    id: "SRV_02",
    icon: <FaCode className="text-cyan-400" />,
    title: "Web Development",
    desc: "Building scalable full-stack web platforms using React, Node.js, and relational databases focused on speed, security, and clean architecture.",
    tags: ["React.js", "Node.js", "MySQL/REST"],
    accent: "group-hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]",
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    id: "SRV_03",
    icon: <FaMobileAlt className="text-indigo-400" />,
    title: "Mobile Development",
    desc: "Developing smooth cross-platform mobile applications that combine native-like fluid performance with clean, modular codebases.",
    tags: ["CrossPlatform", "MobileUI", "API Integration"],
    accent: "group-hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.15)]",
    badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative py-24 px-4 sm:px-8 bg-[#080b11] text-slate-100 font-sans overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Dev Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-cyan-400 text-xs font-mono">
            <FaTerminal className="text-xs" /> SERVICES_STACK.init()
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            My Services
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Delivering clean, scalable, and high-performance digital products tailored for web and mobile platforms.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`service-card group relative bg-[#0e131f] border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${service.accent}`}
            >
              <div className="space-y-5">
                {/* Header Info */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#141a29] border border-slate-700/60 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${service.badge}`}>
                    {service.id}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#131926] border border-slate-700/50 text-[11px] font-mono text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Console Style Bar */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  AVAILABLE
                </span>
                <a
                  href="#contact"
                  className="flex items-center gap-1 text-slate-400 group-hover:text-cyan-400 transition-colors"
                >
                  Inquire <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;