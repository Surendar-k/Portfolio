import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaUser,
  FaCommentDots,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-violet-800 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-white to-violet-400 drop-shadow-[0_0_25px_rgba(167,139,250,0.4)]">
            Let's Get In Touch
          </h2>
          <p className="text-white/70 mt-2 text-sm">I'd love to hear from you!</p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <FaEnvelope className="text-violet-400 text-xl" />,
                label: 'Email',
                value: 'surendarkumar2k@gmail.com',
                href: 'mailto:surendarkumar2k@gmail.com',
              },
              {
                icon: <FaPhone className="text-violet-400 text-xl" />,
                label: 'Phone',
                value: '+91 94877 69772',
                href: 'tel:+919487769772',
              },
              {
                icon: <FaLinkedin className="text-violet-400 text-xl" />,
                label: 'LinkedIn',
                value: 'linkedin.com/in/k-surendar',
                href: 'https://www.linkedin.com/in/k-surendar/',
              },
              {
                icon: <FaGithub className="text-violet-400 text-xl" />,
                label: 'GitHub',
                value: 'github.com/Surendar-k',
                href: 'https://github.com/Surendar-k',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
              >
                {item.icon}
                <div>
                  <h4 className="text-sm text-white/60">{item.label}</h4>
                  <a
                    href={item.href}
                    className="text-white font-medium hover:underline break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 space-y-5"
>
  {/* Hidden Access Key for Web3Forms */}
 <input type="hidden" name="access_key" value="8cf5f43e-3acf-450d-a470-1627530f3430" />

  {/* Optional: Redirect after submission */}
  <input
    type="hidden"
    name="redirect"
    value="https://web3forms.com/success"
  />

  <div className="flex items-center border-b border-white/20 py-2 hover:scale-[1.01] transition">
    <FaUser className="text-violet-300 mr-3" />
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full bg-transparent text-white placeholder-white/60 outline-none"
    />
  </div>

  <div className="flex items-center border-b border-white/20 py-2 hover:scale-[1.01] transition">
    <FaEnvelope className="text-violet-300 mr-3" />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full bg-transparent text-white placeholder-white/60 outline-none"
    />
  </div>

  <div className="flex items-start border-b border-white/20 py-2 hover:scale-[1.01] transition">
    <FaCommentDots className="text-violet-300 mt-1 mr-3" />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      required
      className="w-full bg-transparent text-white placeholder-white/60 outline-none resize-none"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-violet-600 hover:bg-violet-700 transition text-white font-semibold py-3 px-4 rounded-full shadow-lg"
  >
    ✉️ Send Message
  </button>
</form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
