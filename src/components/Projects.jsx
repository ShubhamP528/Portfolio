import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "SyncMovie Watching Application",
    tagline: "REAL-TIME STREAM SYNC ENGINE",
    description: "Experience synchronized movie magic! Connect with friends and watch films in perfect real-time harmony. Share reactions and video controls seamlessly.",
    image: "https://res.cloudinary.com/dgsjppp4a/image/upload/v1715045687/yr0ynwae0whq9smnqvo1.png",
    link: "https://syncmovie-watch.netlify.app/",
    tech: ["React", "Socket.io", "Express.js", "MongoDB", "Google Auth", "Formik"],
    metrics: [
      "⚡ Ultra-low latency stream synchronization via Socket.io channels.",
      "🎥 Integrated Youtube & external iframe player hooks.",
      "🔐 Secure third-party authentication integration."
    ],
    accentClass: "from-cyan-500 to-blue-600",
    glowClass: "hover:shadow-cyan-500/10 hover:border-cyan-500/30",
    accentColor: "text-cyan-600 dark:text-cyan-400"
  },
  {
    title: "Smart Shop Shopping Platform",
    tagline: "HIGH-FIDELITY E-COMMERCE ENGINE",
    description: "Discover convenience at your fingertips! A complete commerce client featuring full checkout cycles, persistent cart, and responsive grids.",
    image: "https://res.cloudinary.com/dgsjppp4a/image/upload/v1739580588/s7c4ym9e7baiyss9cmse.png",
    link: "https://smart-shop-kro.netlify.app",
    tech: ["React", "Redux Toolkit", "Express", "MongoDB", "JWT Auth", "Tailwind"],
    metrics: [
      "🛒 Redux Toolkit global state store with browser state caching.",
      "🛡️ JWT & Google OAuth double-layered session configurations.",
      "🔥 High-performance paginated product aggregate lookups."
    ],
    accentClass: "from-indigo-500 to-purple-600",
    glowClass: "hover:shadow-indigo-500/10 hover:border-indigo-500/30",
    accentColor: "text-indigo-600 dark:text-indigo-400"
  },
  {
    title: "Cheeta WebRTC Chating System",
    tagline: "PEER-TO-PEER VIDEO & CHAT CHANNEL",
    description: "Connecting people, one room at a time. A peer-to-peer real-time media router supporting room creation, camera switching, and low-latency texts.",
    image: "https://res.cloudinary.com/dgsjppp4a/image/upload/v1739580559/i1cvekway4cnksjrbzvx.png",
    link: "https://cheeta-chat.netlify.app/",
    tech: ["React JS", "WebRTC", "Socket.io", "Express", "MongoDB", "JWT Auth"],
    metrics: [
      "💬 Zero-latency voice and video sessions direct peer connections.",
      "🔒 Private room passcodes and dynamic session router channels.",
      "💡 Live client indicators and automatic offline syncs."
    ],
    accentClass: "from-purple-500 to-pink-600",
    glowClass: "hover:shadow-purple-500/10 hover:border-purple-500/30",
    accentColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Link Breeze Analytics SHORTENER",
    tagline: "URL CONDENSER & ANALYTICS LOGGER",
    description: "Experience effortless link management! Shorten URLs instantly, log traffic details, and optimize your overall redirection analytics.",
    image: "https://res.cloudinary.com/dgsjppp4a/image/upload/v1739583370/mbjdyotqrcb9wq502ely.png",
    link: "https://linkbreeze.netlify.netlify.app/",
    tech: ["React JS", "Express", "MongoDB", "JWT Auth", "Tailwind", "Javascript"],
    metrics: [
      "✨ High-performance custom hash URL identifier algorithm.",
      "📊 Live traffic analytics chart displaying geolocation clicks.",
      "⚡ Highly optimized database query index architectures."
    ],
    accentClass: "from-amber-500 to-rose-600",
    glowClass: "hover:shadow-amber-500/10 hover:border-amber-500/30",
    accentColor: "text-amber-600 dark:text-amber-400"
  }
];

const Projects = () => {
  return (
    <section className="w-full py-16" id="project">
      <div className="flex flex-col items-center gap-16 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 px-6 py-2 backdrop-blur-md"
          >
            <span className="text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-text"
          >
            Noteworthy Engineering Deployments
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-muted mt-2"
          >
            A selective index of production-ready full stack systems I’ve architected, coded, and deployed.
          </motion.p>
        </div>

        {/* Asymmetrical Bento Columns for Projects */}
        <div className="w-full flex flex-col gap-16">
          {projects.map((project, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch w-full ${
                  isOdd ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image container with glow frame */}
                <div className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden p-3 bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 shadow-2xl flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.accentClass} opacity-10 group-hover:opacity-25 blur-lg transition-opacity duration-500 pointer-events-none`}></div>
                  <div className="w-full h-full rounded-2xl overflow-hidden relative border border-black/5 dark:border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 md:h-[360px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between py-2">
                  <div className="flex flex-col gap-6">
                    {/* Project Categories */}
                    <div className="flex flex-col gap-2">
                      <span className={`text-xs font-mono font-bold uppercase tracking-widest ${project.accentColor}`}>
                        {project.tagline}
                      </span>
                      <h3 className="text-3xl font-extrabold font-heading text-text group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-text-muted text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="flex flex-col gap-3 mt-2 border-l-2 border-black/10 dark:border-white/10 pl-4 py-1">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm md:text-base text-text-muted">
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-6">
                    {/* Tech tag chips */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 text-text-muted hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="border-t border-black/5 dark:border-white/5 pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.accentClass} text-white font-bold text-sm transition-all duration-300 transform hover:scale-[1.03] shadow-lg`}
                      >
                        Launch Application
                        <FiExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
