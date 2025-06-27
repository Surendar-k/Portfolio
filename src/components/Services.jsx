import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush />,
    title: "Web Design",
    desc: "Clean, responsive, and modern UI designs tailored for smooth user experiences and unique brand presence.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Full-stack web applications using React, Node.js, and MySQL with optimized performance and scalability.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "High-performance cross-platform mobile apps using Flutter, with intuitive UI and powerful features.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden"
    >
      {/* Custom glowing background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500 via-purple-700 to-transparent z-0" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-violet-500 drop-shadow-[0_0_30px_rgba(139,92,246,0.6)] animate-fade-in">
          My Services
        </h2>
<p className="max-w-2xl mx-auto mb-10 text-white/70 text-md animate-fade-in delay-100">
  As a freelance full-stack developer, I specialize in creating impactful web and mobile solutions that help startups, businesses, and individuals grow online. Below are the services I offer — tailored with performance, design, and scalability in mind.
</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-violet-500/30 transition duration-300 hover:-translate-y-2 transform animate-slide-up"
            >
              {/* Icon Centered */}
              <div className="flex justify-center items-center mb-5">
                <div className="text-5xl text-violet-400 group-hover:scale-110 group-hover:text-white transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-violet-200">{service.title}</h3>
              <p className="text-white/70 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
