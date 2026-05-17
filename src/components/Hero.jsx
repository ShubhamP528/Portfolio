import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center pt-24 pb-12" id="hero">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full glass-card p-8 md:p-12 animate-slide-up">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-8 md:pr-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text tracking-tight">
              Hi, I'm Shubham
              <span className="inline-block animate-waving-hand ml-4">👋</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gradient">
              Full Stack Developer
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
              I specialize in React.js and Node.js, focusing on creating exceptional digital 
              experiences that are fast, accessible, visually appealing, and responsive. 
              I craft solutions that don't just work, but feel amazing to use.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-text-muted font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Bareilly, India
            </div>
            
            <div className="flex items-center gap-3 font-medium">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-green-600 dark:text-green-400">Available for new projects</span>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            {[
              { icon: FaGithub, href: "https://github.com/ShubhamP528" },
              { icon: FaTwitter, href: "https://twitter.com/shubham14481056" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/shubham-prajapati-a3b635228" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 glass rounded-xl hover:-translate-y-1 hover:shadow-primary-500/20 text-text hover:text-primary-500 transition-all duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="w-[280px] h-[320px] md:w-[350px] md:h-[400px] relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-2xl rotate-3 transition-transform hover:rotate-6 duration-300"></div>
          <img
            src="https://res.cloudinary.com/dgsjppp4a/image/upload/c_crop,g_auto,h_800,w_826/xzyxaah7rqp10qzybskl.jpg"
            alt="Shubham Prajapati"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl border-4 border-white/20 shadow-2xl z-10"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
