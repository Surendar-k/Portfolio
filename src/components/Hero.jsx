
import './Hero.css';

// Import SVGs as URLs
import reactLogo from '../assets/icons/react.svg';
import htmlLogo from '../assets/icons/html5.svg';
import cssLogo from '../assets/icons/css.svg';
import jsLogo from '../assets/icons/javascript.svg';
import gitLogo from '../assets/icons/git.svg';
import firebaseLogo from '../assets/icons/firebase.svg';
import gCloudLogo from '../assets/icons/googlecloud.svg';
import netlifyLogo from '../assets/icons/netlify.svg';
import canvaLogo from '../assets/icons/canva.svg';
import figmaLogo from '../assets/icons/figma.svg';
import tailwindcssLogo from '../assets/icons/tailwindcss.svg';
import githubLogo from '../assets/icons/github.svg';

// Array of floating icons with position and size
const icons = [
  { src: htmlLogo,      className: "top-[15vh] left-[10vw] w-16 animate-float",           color: "bg-orange-500" },
  { src: cssLogo,       className: "top-[20vh] right-[8vw] w-20 animate-float-small",    color: "bg-blue-300" },
  { src: jsLogo,        className: "top-[45vh] left-[5vw] w-16 animate-spin-slow",       color: "bg-yellow-400" },
  { src: gitLogo,       className: "bottom-[25vh] right-[12vw] w-20 animate-float",      color: "bg-red-600" },
  { src: reactLogo,     className: "top-[12vh] right-[25vw] w-16 animate-float-small",   color: "bg-blue-500" },
  { src: firebaseLogo,  className: "bottom-[20vh] left-[20vw] w-20 animate-bounce-slow", color: "bg-yellow-500" },
  { src: gCloudLogo,    className: "top-[60vh] right-[20vw] w-24 animate-float-small",   color: "bg-sky-400" },
  { src: netlifyLogo,   className: "bottom-[10vh] left-[10vw] w-20 animate-float-small", color: "bg-cyan-500" },
  { src: canvaLogo,     className: "top-[35vh] left-[18vw] w-20 animate-bounce-slow",    color: "bg-indigo-400" },
  { src: figmaLogo,     className: "bottom-[8vh] right-[28vw] w-20 animate-spin-slow",   color: "bg-pink-500" },
  { src: tailwindcssLogo, className: "top-[28vh] right-[15vw] w-20 animate-float",       color: "bg-teal-400" },
  { src: githubLogo,      className: "bottom-[15vh] right-[6vw] w-16 animate-float",     color: "bg-gray-800" },
];




const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-violet-800 via-black to-gray-900 px-4 text-white overflow-hidden"
    >
     {icons.map(({ src, className, color }, index) => (
  <div
    key={index}
    className={`absolute ${className} h-auto aspect-square rounded-full backdrop-blur-md ${color} bg-opacity-30 p-1`}
  >
    <img
      src={src}
      alt={`tech-icon-${index}`}
      className="w-full h-full p-2 rounded-full drop-shadow-[0_0_6px_white]"
    />
  </div>
))}




      {/* ==== Hero Main Content ==== */}
      <div className="relative z-10 max-w-3xl w-full text-center ]">
        {/* Name with Glowing Text */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-violet-500 drop-shadow-[0_0_30px_rgba(167,139,250,0.7)] animate-float">
          Hi, I'm Surendar K <span className="text-white">👋</span>
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl font-semibold text-violet-300 mb-8 tracking-wider transform rotate-x-6 hover:rotate-x-0 transition-all duration-500">
          Web Developer | Web Designer | Freelancer
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed">
          I design and build sleek, fast, and scalable web experiences using{" "}
          <span className="text-violet-400 font-medium">React.js</span>,{" "}
          <span className="text-violet-400 font-medium">Node.js</span>, and{" "}
          <span className="text-violet-400 font-medium">Flutter</span>. Let’s turn your ideas into reality.
        </p>

        {/* Call to Action */}
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-white text-violet-700 font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-violet-100"
        >
          🚀 View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
