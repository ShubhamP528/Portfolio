import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = ({ NavStatus, Theam }) => {
  const ShowSideNavBar = () => {
    NavStatus.setSideNav(!NavStatus.sideNav);
  };

  const handleDownload = () => {
    const url = "/ShubhamPrajapati.pdf";
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(new Blob([blob]));
        link.setAttribute("download", "Shubham Prajapati.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  const switchButton = () => {
    Theam.setIsDark(!Theam.isDark);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#project' },
    { name: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 dark:bg-background/40 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="group">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl font-mono font-black text-text tracking-wider"
          >
            <span className="text-cyan-500">{"<"}</span>
            SP
            <span className="text-cyan-500">{" />"}</span>
          </motion.h3>
        </a>
        
        {/* Desktop Links & Actions */}
        <div className="hidden items-center gap-8 md:flex">
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex list-none items-center gap-6"
          >
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <a
                  href={link.href}
                  className="text-xs font-mono font-bold text-text-muted hover:text-cyan-500 uppercase tracking-widest relative py-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-indigo-500 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          
          <div className="h-5 w-px bg-black/10 dark:bg-white/10"></div>

          <div className="flex items-center gap-4">
            {/* Premium Sliding Theme Toggle Switch */}
            <div 
              onClick={switchButton}
              className="relative w-16 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-black/5 dark:border-white/5 p-1 flex items-center justify-between cursor-pointer select-none transition-colors duration-300"
            >
              <div className="text-[10px] pl-1.5 text-slate-500 dark:text-slate-400"><FiSun size={12} className="text-amber-500" /></div>
              <div className="text-[10px] pr-1.5 text-slate-500 dark:text-slate-400"><FiMoon size={12} /></div>
              {/* Sliding Capsule */}
              <motion.div 
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute w-6 h-6 rounded-full bg-white dark:bg-slate-950 border border-black/10 dark:border-white/10 shadow-md flex items-center justify-center"
                style={{ left: Theam.isDark ? 'calc(100% - 1.75rem)' : '0.25rem' }}
              >
                {Theam.isDark ? <FiMoon size={10} className="text-indigo-400" /> : <FiSun size={10} className="text-amber-500" />}
              </motion.div>
            </div>
            
            {/* Download CV */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.03] shadow-md shadow-cyan-500/10"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Mobile Actions (Pill, switch, and trigger aligned) */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Sliding Theme Switch */}
          <div 
            onClick={switchButton}
            className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 border border-black/5 dark:border-white/5 p-1 flex items-center justify-between cursor-pointer select-none transition-colors duration-300"
          >
            <div className="text-[10px] pl-1.5 text-slate-500"><FiSun size={10} className="text-amber-500" /></div>
            <div className="text-[10px] pr-1.5 text-slate-500"><FiMoon size={10} /></div>
            {/* Sliding Capsule */}
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute w-5 h-5 rounded-full bg-white dark:bg-slate-950 border border-black/10 dark:border-white/10 shadow-md flex items-center justify-center"
              style={{ left: Theam.isDark ? 'calc(100% - 1.5rem)' : '0.25rem' }}
            >
              {Theam.isDark ? <FiMoon size={9} className="text-indigo-400" /> : <FiSun size={9} className="text-amber-500" />}
            </motion.div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={ShowSideNavBar}
            className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-black/5 dark:border-white/5 text-text hover:text-cyan-400 transition-all active:scale-95 ${NavStatus.sideNav ? 'hidden' : 'flex'}`}
            aria-label="Open Menu"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
