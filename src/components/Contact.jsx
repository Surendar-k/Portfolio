import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaUser,
  FaCommentDots,
  FaPaperPlane,
  FaTerminal,
  FaCube,
} from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  // Entrance Animations
  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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

  const contactList = [
    {
      icon: <FaEnvelope className="text-cyan-400 text-lg" />,
      label: "PRIMARY_EMAIL",
      value: "surendarkumar2k@gmail.com",
      href: "mailto:surendarkumar2k@gmail.com",
    },
    {
      icon: <FaPhone className="text-cyan-400 text-lg" />,
      label: "DIRECT_PHONE",
      value: "+91 94877 69772",
      href: "tel:+919487769772",
    },
    {
      icon: <FaLinkedin className="text-cyan-400 text-lg" />,
      label: "LINKEDIN_PROFILE",
      value: "linkedin.com/in/k-surendar",
      href: "https://www.linkedin.com/in/k-surendar/",
    },
    {
      icon: <FaGithub className="text-cyan-400 text-lg" />,
      label: "GITHUB_REPOS",
      value: "github.com/Surendar-k",
      href: "https://github.com/Surendar-k",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-24 px-4 sm:px-8 bg-[#080b11] text-slate-100 font-sans overflow-hidden"
    >
      {/* CSS 3D Keyframe Animations */}
      <style>{`
        @keyframes rotate3D {
          0% {
            transform: rotateY(0deg) rotateX(10deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(-10deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(10deg);
          }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-rotate-3d {
          animation: rotate3D 12s linear infinite;
          transform-style: preserve-3d;
        }
        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Glow Overlays */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-cyan-400 text-xs font-mono">
            <FaTerminal className="text-xs" /> INITIATE_CONNECT
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's Get In Touch
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Have a project in mind, a freelance inquiry, or just want to discuss web development? Send me a message!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 3D Rotating Image Badge + Contact Details */}
          <div className="lg:col-span-5 space-y-8 contact-anim">
            
            {/* 3D Rotating Image Card Container */}
            <div className="relative w-full h-64 bg-[#0e131f] border border-slate-800/80 rounded-2xl overflow-hidden flex items-center justify-center p-6 [perspective:1000px]">
              
              {/* Background Glow Ring */}
              <div className="absolute w-40 h-40 bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse-glow" />

              {/* 3D Rotating Badge Wrapper */}
              <div className="relative z-10 w-36 h-36 animate-rotate-3d flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-cyan-400 p-[2px] shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                  <div className="w-full h-full bg-[#080b11] rounded-[14px] flex flex-col items-center justify-center p-4 text-center space-y-2 border border-slate-800">
                    <FaCube className="text-4xl text-cyan-400 animate-bounce" />
                    <span className="text-[11px] font-mono font-bold text-white tracking-widest uppercase">
                      Dev Studio
                    </span>
                  </div>
                </div>
              </div>

              {/* Console Badge Footer Overlay */}
              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-500 bg-black/40 px-2 py-0.5 rounded border border-slate-800">
                // 3D_ROTATING_OBJECT
              </div>
            </div>

            {/* Contact Items Stack */}
            <div className="space-y-3">
              {contactList.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3.5 bg-[#0e131f] border border-slate-800/80 rounded-xl hover:border-cyan-500/40 hover:bg-[#121827] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#141a29] border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Formspree Form */}
          <div className="lg:col-span-7 contact-anim">
            <form
              action="https://formspree.io/f/mvgrywyz"
              method="POST"
              className="bg-[#0e131f] border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl space-y-5 relative"
            >
              <div className="text-xs font-mono text-cyan-400 border-b border-slate-800/80 pb-3 flex items-center justify-between">
                <span>// DISPATCH_MESSAGE_FORM</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">YOUR_NAME</label>
                <div className="relative flex items-center">
                  <FaUser className="absolute left-3.5 text-slate-500 text-xs" />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#141a29] border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">YOUR_EMAIL</label>
                <div className="relative flex items-center">
                  <FaEnvelope className="absolute left-3.5 text-slate-500 text-xs" />
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#141a29] border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Message Box */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">MESSAGE_CONTENT</label>
                <div className="relative flex items-start">
                  <FaCommentDots className="absolute left-3.5 top-3.5 text-slate-500 text-xs" />
                  <textarea
                    name="message"
                    placeholder="Write your message or inquiry here..."
                    rows="4"
                    required
                    className="w-full bg-[#141a29] border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all font-mono resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-mono font-semibold text-xs py-3.5 px-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                TRANSMIT_MESSAGE
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;