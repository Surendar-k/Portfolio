import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaExternalLinkAlt, FaFolder, FaCodeBranch } from "react-icons/fa";

// Import project images
import coffeeproj from "../assets/coffeeproj.png";
import hotelproj from "../assets/hotelproj.png";
import iconEdu from "../assets/icon-edu-siteproj.png";
import mcqgame from "../assets/mcqgameproj.png";
import profuel from "../assets/profuelproj.png";
import todolist from "../assets/todolistproj.png";
import tyrewhizz from "../assets/tyrewhizzproj.png";
import rmkzapout from "../assets/rmkzapoutproj.png";
import tourgenieproj from "../assets/tourgenie.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  const projectList = [
   {
  title: "TourGenie - Tour Operations and Holiday Package Management System",
  desc: "Full-stack tour management platform for managing holiday packages, tour operations, bookings,finance management and customer experiences.",
  tags: ["React.ts", "Spring Boot", "MySQL", "REST API"],
  img: tourgenieproj,
  repo: "https://github.com/Surendar-k/TourGenie",
  site: null,
},
    {
      title: "CoffeeSpot Web App",
      desc: "Full-stack coffee ordering platform with real-time order management, automated billing, and customer rewards program.",
      tags: ["React", "Node.js", "MySQL"],
      img: coffeeproj,
      repo: "https://github.com/Surendar-k/Retrocoffeeshop",
      site: "https://caffeeespot.web.app/",
    },
    {
      title: "RMK Zapout",
      desc: "College gate pass & On-Duty management portal. Features multi-level staff workflows and automated parent WhatsApp notifications.",
      tags: ["Full Stack", "Firebase", "Node.js"],
      img: rmkzapout,
      repo: "https://github.com/Surendar-k/RMK-ZapOut",
      site: "https://rmkzapout.web.app/",
    },
    {
      title: "Icon School Education Site",
      desc: "Freelance educational website landing page designed with modern UI/UX principles and interactive animations.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      img: iconEdu,
      repo: "https://github.com/Surendar-k/icon-edu-site",
      site: "https://icon-edu-site.web.app/",
    },
    {
      title: "ProFuel - Healthy Food E-Commerce",
      desc: "Nutrition-focused web platform for selling health supplements featuring a modern UI and seamless product browser.",
      tags: ["JavaScript", "HTML5/CSS3", "E-Commerce"],
      img: profuel,
      repo: "https://github.com/Surendar-k/Profuel",
      site: "https://surendar-k.github.io/Profuel/",
    },
    {
      title: "Smart IoT Tyre Monitoring System",
      desc: "Predictive car maintenance dashboard designed to track real-time tire pressure and deliver immediate fault detection alerts.",
      tags: ["IoT", "Dashboard", "React"],
      img: tyrewhizz,
      repo: "https://github.com/Surendar-k/TyreWhizz",
      site: null,
    },
    {
      title: "To-Do List App",
      desc: "Minimalist task management web app built with local storage persistence and interactive task tracking.",
      tags: ["JavaScript", "LocalStorage", "CSS"],
      img: todolist,
      repo: "https://github.com/Surendar-k/OCTANET_JANUARY_ToDo-List",
      site: "https://surendar-k.github.io/OCTANET_JANUARY_ToDo-List/",
    },
    {
      title: "MCQ Quiz Game App",
      desc: "Interactive multiple-choice quiz application utilizing dynamic scoring logic and custom game feedback.",
      tags: ["React", "JavaScript", "Logic"],
      img: mcqgame,
      repo: "https://github.com/Surendar-k/MCQ-Gameusing-React",
      site: "https://funprogramzzz.netlify.app/",
    },
    {
      title: "Hotel Management System",
      desc: "Responsive web portal managing hotel bookings, guest checkouts, room allocation, and automated bill calculation.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      img: hotelproj,
      repo: "https://github.com/Surendar-k/HotelManagement",
      site: "https://surendar-k.github.io/HotelManagement/",
    },
  ];

  useGSAP(
    () => {
      // Staggered Cards Reveal Animation
      gsap.fromTo(
        ".project-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-24 px-4 sm:px-8 bg-[#080b11] text-slate-100 font-sans overflow-hidden"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 right-10 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <FaCodeBranch /> REPOSITORIES_INSIGHT
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Explore live builds, GitHub codebases, and web applications built using modern frameworks.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((p, idx) => (
            <div
              key={idx}
              className="project-card group relative bg-[#0e131f] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom Animation */}
                <div className="relative w-full aspect-video bg-[#141a29] overflow-hidden border-b border-slate-800/80">
                  <img
                    src={p.img}
                    alt={p.title}
                    className={`w-full h-full ${
                      p.title.includes("Tyre Monitoring")
                        ? "object-contain p-4 group-hover:scale-105"
                        : "object-cover group-hover:scale-110"
                    } transition-transform duration-500 ease-out`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e131f] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3">
                  {/* Tag Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-[#161c2e] border border-slate-700/60 text-[11px] font-mono text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Card Bottom Links */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/40 mt-4 text-xs font-mono">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141a29] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50 transition-all"
                  >
                    <FaGithub className="text-indigo-400" /> Source
                  </a>
                )}

                {p.site ? (
                  <a
                    href={p.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 transition-all shadow-md"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono italic">
                    [ Not Deployed ]
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;