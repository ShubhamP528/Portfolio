import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center pt-24 pb-12 overflow-hidden" id="hero">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 w-full py-8">
        
        {/* Left Side: Text and Terminal */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col gap-8 md:pr-4"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase">⚡ Full-Stack Developer</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight text-text leading-none">
              Shubham <br />
              <span className="text-gradient-cyan">Prajapati</span>
            </h1>
            
            <h2 className="text-lg md:text-xl font-mono text-text-muted mt-2">
              {"// CRAFTING HIGH-PERFORMANCE DIGITAL ECOSYSTEMS"}
            </h2>
            
            <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl mt-4">
              I construct fast, visually stunning, and highly responsive web and mobile solutions using React, Node.js, and Go. Specializing in end-to-end full-stack architectures.
            </p>
          </div>

          {/* CTA & Social Actions */}
          <div className="flex flex-wrap items-center gap-6 mt-2">
            <a
              href="#project"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-cyan-500/20"
            >
              Explore Projects
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass border-black/5 dark:border-white/5 text-text hover:bg-surface-hover font-semibold transition-all duration-300"
            >
              Let's Connect
            </a>

            <div className="flex items-center gap-3 ml-2">
              {[
                { icon: FaGithub, href: "https://github.com/ShubhamP528", color: "hover:text-cyan-600 dark:hover:text-cyan-400" },
                { icon: FaTwitter, href: "https://twitter.com/shubham14481056", color: "hover:text-blue-500 dark:hover:text-blue-400" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/shubham-prajapati-a3b635228", color: "hover:text-indigo-600 dark:hover:text-indigo-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 glass rounded-xl text-text-muted transition-all duration-300 hover:-translate-y-1 hover:bg-surface-hover ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glowing Monospace Terminal Card & Image Frame */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[45%] flex flex-col items-center justify-center gap-8"
        >
          {/* Holographic Developer Card */}
          <div className="w-full max-w-md bg-[#0b0f19] border border-black/5 dark:border-white/5 rounded-2xl shadow-2xl overflow-hidden glow-shadow-cyan">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#070a12] border-b border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs font-mono text-text-muted">shubham@dev: ~</span>
              <div className="w-6"></div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm text-cyan-400/90 leading-relaxed bg-[#0b0f19]/80 backdrop-blur-md">
              <p className="text-text-muted"># Initialize full-stack developer portfolio</p>
              <p className="text-purple-400">$ <span className="text-emerald-400">node</span> profile.js</p>
              
              <div className="mt-3 text-cyan-300">
                <p>{"{"}</p>
                <p className="pl-4"><span className="text-amber-400">"name"</span>: <span className="text-emerald-300">"Shubham Prajapati"</span>,</p>
                <p className="pl-4"><span className="text-amber-400">"role"</span>: <span className="text-emerald-300">"Full Stack Tech Lead"</span>,</p>
                <p className="pl-4"><span className="text-amber-400">"location"</span>: <span className="text-emerald-300">"Bareilly, India"</span>,</p>
                <p className="pl-4"><span className="text-amber-400">"stack"</span>: [</p>
                <p className="pl-8"><span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Node.js"</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">"Golang"</span>, <span className="text-emerald-300">"React Native"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-amber-400">"status"</span>: <span className="text-purple-300">"BUILDING_AWESOME_PRODUCTS"</span></p>
                <p>{"}"}</p>
              </div>

              <div className="mt-4 border-t border-black/5 dark:border-white/5 pt-4 text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Ready to collaborate</span>
              </div>
            </div>
          </div>

          {/* Profile Photo Frame Overlay */}
          <div className="relative group mt-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-3xl rotate-3 opacity-30 blur-xl group-hover:rotate-6 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-3xl -rotate-3 transition-transform group-hover:-rotate-6 duration-500 border border-black/5 dark:border-white/10"></div>
            <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-3xl overflow-hidden border-4 border-black/5 dark:border-white/5 shadow-2xl z-10">
              <img
                src="https://res.cloudinary.com/dgsjppp4a/image/upload/c_crop,g_auto,h_800,w_826/xzyxaah7rqp10qzybskl.jpg"
                alt="Shubham Prajapati"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
