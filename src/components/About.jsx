import profileImage from '../assets/profile.png';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaGraduationCap,
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
  SiGooglemaps,
} from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-gradient-to-br from-violet-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* === LEFT COLUMN: Content + Education === */}
        <div className="space-y-10">

          {/* About Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-violet-500 drop-shadow-[0_0_25px_rgba(167,139,250,0.6)]">
              About Me
            </h2>

            <p className="text-white/80 text-lg">
              I'm <span className="text-violet-400 font-semibold">Surendar K</span>, a full-stack developer building seamless solutions using <span className="text-violet-300">React.js</span>, <span className="text-violet-300">Node.js</span>, and <span className="text-violet-300">TailwindCSS</span>.
            </p>

            <p className="text-white/70 text-sm">
              Focused on writing clean, efficient code and growing through new challenges. Open to freelance and internship opportunities.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: <FaBirthdayCake className="text-violet-300 mt-1" />, label: 'Date of Birth', value: 'April 19, 2004' },
                { icon: <FaMapMarkerAlt className="text-violet-300 mt-1" />, label: 'Location', value: 'Tiruvannamalai, TN' },
                { icon: <FaEnvelope className="text-violet-300 mt-1" />, label: 'Email', value: 'surendarkumar2k@gmail.com', href: 'mailto:surendarkumar2k@gmail.com' },
                { icon: <FaPhone className="text-violet-300 mt-1" />, label: 'Phone', value: '+91 94877 69772', href: 'tel:+919487769772' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h3 className="text-sm text-violet-300">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-blue-400 hover:underline">{item.value}</a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Box */}
          <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-violet-300 mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-lg" /> Education
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div>
                <h4 className="text-white font-medium">B.Tech – IT</h4>
                <p className="text-white/60">RMD Engineering College (2021 – 2025)</p>
              </div>
              <div>
                <h4 className="text-white font-medium">HSC – Class XII</h4>
                <p className="text-white/60">Sacred Heart Hr. Sec. School (2020 – 2021)</p>
              </div>
              <div>
                <h4 className="text-white font-medium">SSLC – Class X</h4>
                <p className="text-white/60">Sacred Heart Hr. Sec. School (2018 – 2019)</p>
              </div>
              {/* Resume Button */}
          <div className="w-full pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-white text-violet-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-violet-100 transition"
            >
              📄 Download Resume
            </a>
          </div>
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN: Profile + Skills + Resume === */}
        <div className="flex flex-col items-center space-y-10">

          {/* Profile Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(139,92,246,0.3)] bg-white/5 backdrop-blur-md p-2">
            <img
              src={profileImage}
              alt="Surendar K"
              className="w-80 h-80 rounded-2xl object-top object-contain shadow-lg"
            />
          </div>

          {/* Skills */}
          <div className="w-full bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-md -mt-4">

            <h3 className="text-xl font-semibold text-violet-300 mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-lg" /> Skills
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center text-white">
              {[
                { icon: <FaHtml5 className="text-orange-500 text-2xl" />, name: 'HTML5' },
                { icon: <FaCss3Alt className="text-blue-500 text-2xl" />, name: 'CSS3' },
                { icon: <FaJsSquare className="text-yellow-400 text-2xl" />, name: 'JavaScript' },
                { icon: <FaReact className="text-cyan-400 text-2xl" />, name: 'React' },
                { icon: <FaNodeJs className="text-green-500 text-2xl" />, name: 'Node' },
                { icon: <FaDatabase className="text-indigo-400 text-2xl" />, name: 'MySQL' },
                { icon: <FaGitAlt className="text-orange-400 text-2xl" />, name: 'Git' },
                { icon: <SiGithub className="text-white text-2xl" />, name: 'GitHub' },
                { icon: <SiTailwindcss className="text-sky-400 text-2xl" />, name: 'Tailwind' },
                { icon: <SiFirebase className="text-yellow-500 text-2xl" />, name: 'Firebase' },
                { icon: <SiGooglecloud className="text-blue-300 text-2xl" />, name: 'GCloud' },
                { icon: <SiNetlify className="text-green-400 text-2xl" />, name: 'Netlify' },
                { icon: <SiGooglemaps className="text-red-400 text-2xl" />, name: 'Maps API' },
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  {skill.icon}
                  <span className="mt-1 text-xs text-white/80">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
