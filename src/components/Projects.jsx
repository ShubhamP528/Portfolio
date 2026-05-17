import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "SyncMovie Watching Application",
    description: "Experience the joy of synchronized movie magic with our innovative app! Connect with friends, near or far, and watch your favorite films together in perfect harmony. Whether it's laughter, tears, or edge-of-your-seat suspense, share every cinematic moment in real-time.",
    image: "https://res.cloudinary.com/dgsjppp4a/image/upload/v1715045687/yr0ynwae0whq9smnqvo1.png",
    link: "https://syncmovie-watch.netlify.app/",
    tech: ["React", "Socket.io", "Tailwindcss", "Google Auth", "Express.js", "Youtube API", "MongoDB", "Formik"]
  },
  {
    title: "Shoping Application",
    description: "Discover convenience at your fingertips with our shopping app! Browse, buy, and delight in a seamless shopping experience. From must-have essentials to trending favorites, explore a world of endless possibilities, all in one place. Elevate your shopping journey today!",
    image: "https://res.cloudinary.com/dgsjppp4a/image/upload/v1739580588/s7c4ym9e7baiyss9cmse.png",
    link: "https://smart-shop-kro.netlify.app",
    tech: ["Express", "React JS", "Redux Toolkit", "JWT Auth", "Google Auth", "Tailwind", "Javascript", "MongoDB"]
  },
  {
    title: "Chating Application",
    description: "Connecting people, one chat at a time with the power of WebRTC. Welcome to our vibrant community, where real-time messaging, voice, and video conversations bring people closer. Spark meaningful connections, build friendships, and create lasting memories.",
    image: "https://res.cloudinary.com/dgsjppp4a/image/upload/v1739580559/i1cvekway4cnksjrbzvx.png",
    link: "https://cheeta-chat.netlify.app/",
    tech: ["React JS", "Express", "Mongo DB", "Web RTC", "Socket.io", "Javascript", "Tailwind", "JWT Auth", "Google Auth"]
  },
  {
    title: "Link Breeze",
    description: "Experience effortless link management with Link Breeze! ✨ Shorten URLs instantly, track analytics seamlessly, and optimize your online presence—all in one place. Whether you're a marketer, content creator, or just love simplicity, Link Breeze makes link sharing smarter and more efficient.",
    image: "https://res.cloudinary.com/dgsjppp4a/image/upload/v1739583370/mbjdyotqrcb9wq502ely.png",
    link: "https://linkbreeze.netlify.app/",
    tech: ["Express", "React JS", "JWT Auth", "Tailwind", "Javascript", "MongoDB"]
  }
];

const Projects = () => {
  return (
    <section className="w-full py-16" id="project">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 border border-primary-500/20 px-6 py-2 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-wider uppercase">Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text">
            Some of my noteworthy projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-24 w-full">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-3xl rotate-2 opacity-30 blur-xl group-hover:rotate-4 group-hover:opacity-50 transition-all duration-500"></div>
                <a href={project.link} target="_blank" rel="noreferrer" className="relative block overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-text">
                  {project.title}
                </h3>
                <p className="text-text-muted text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-surface-hover text-text border border-white/5 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors shadow-lg shadow-primary-500/30"
                  >
                    View Project
                    <FiExternalLink size={18} />
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
