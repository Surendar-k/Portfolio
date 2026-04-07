import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import your project images
import coffeeproj from "../assets/coffeeproj.png";
import hotelproj from "../assets/hotelproj.png";
import iconEdu from "../assets/icon-edu-siteproj.png";
import mcqgame from "../assets/mcqgameproj.png";
import profuel from "../assets/profuelproj.png";
import todolist from "../assets/todolistproj.png";
import tyrewhizz from "../assets/tyrewhizzproj.png";
import rmkzapout from "../assets/rmkzapoutproj.png";
const Projects = () => {
  const projectList = [
    {
      title: "CoffeeSpot Web App",
     desc: "A full-stack coffee ordering platform built with React, Node.js, and MySQL, featuring real-time order management, automated billing system, and a customer rewards program to enhance user engagement and streamline café operations.",
      img: coffeeproj,
      repo: "https://github.com/Surendar-k/Retrocoffeeshop",
      site: "https://caffeeespot.web.app/",
    },
     {
      title: "RMK Zapout",
     desc: "A full-stack smart gate pass and On-Duty (OD) management system designed for colleges. It enables students to apply digitally for gate passes and OD requests, with a multi-level approval workflow for staff. The system sends real-time WhatsApp notifications to parents with detailed updates, ensuring transparency, security, and efficient campus management.",
      img: rmkzapout,
      repo: "https://github.com/Surendar-k/RMK-ZapOut",
      site: "https://rmkzapout.web.app/",
    },
     {
      title: "Icon School Education Site",
      desc: "Designed and developed a freelance educational website landing page with modern UI/UX and smooth animations, delivering a responsive and visually engaging experience for improved user interaction.",
      img: iconEdu,
      repo: "https://github.com/Surendar-k/icon-edu-site",
      site: "https://icon-edu-site.web.app/",
    },
    {
      title: "ProFuel - Healthy Food E-Commerce Website",
      desc: "Developed a freelance nutrition-focused web application for selling protein and healthy food products, featuring a modern UI, product catalog, and user-friendly browsing experience tailored for fitness-conscious customers.",
      img: profuel,
      repo: "https://github.com/Surendar-k/Profuel",
      site: "https://surendar-k.github.io/Profuel/",
    },
     {
      title: "Smart IoT-Based Tyre Monitoring System",
      desc: "Predictive car maintenance dashboard with smart alerts and fault detections on tyre.",
      img: tyrewhizz,
      repo: "https://github.com/Surendar-k/TyreWhizz",
      
    },
     {
      title: "To-Do List App",
      desc: "Simple and elegant task management app using local storage and interactive UI.",
      img: todolist,
      repo: "https://github.com/Surendar-k/OCTANET_JANUARY_ToDo-List",
      site: "https://surendar-k.github.io/OCTANET_JANUARY_ToDo-List/",
    },
     {
      title: "MCQ Game App",
      desc: "Fun multiple-choice quiz game using vanilla JS logic and scoring system.",
      img: mcqgame,
      repo: "https://github.com/Surendar-k/MCQ-Gameusing-React",
      site: "https://funprogramzzz.netlify.app/",
    },
      
    {
      title: "Hotel Management System",
      desc: "Responsive hotel web portal for booking, checkout, and billing with HTML, CSS, and JavaScript.",
      img: hotelproj,
      repo: "https://github.com/Surendar-k/HotelManagement",
      site: "https://surendar-k.github.io/HotelManagement/",
    },
   
 
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-violet-950 via-black to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
      <h2
  className="text-4xl md:text-5xl font-bold text-center mb-14 
             text-transparent bg-clip-text bg-gradient-to-r 
             from-violet-300 via-white to-violet-500 
             drop-shadow-[0_0_25px_rgba(167,139,250,0.6)] 
             leading-tight"
>
  My Projects
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((p, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.1)] hover:shadow-violet-500/20 transition duration-300 backdrop-blur-md"
            >
            <img
  src={p.img}
  alt={p.title}
  className={`w-full h-48 ${
    p.title === "Smart IoT-Based Tyre Monitoring System" ? "object-contain scale-90" : "object-cover"
  } transition-transform duration-300 ease-in-out`}
/>


              {/* Content */}
              <div className="p-5">
               <h3 className="text-xl font-semibold text-violet-300 mb-2 leading-snug break-words">
  {p.title}
</h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">{p.desc}</p>

                <div className="flex items-center gap-6">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={p.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
