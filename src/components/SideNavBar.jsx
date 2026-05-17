import { FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const SideNavBar = ({ NavStatus, Theam }) => {
  const ShowSideNavBar = () => {
    NavStatus.setSideNav(!NavStatus.sideNav);
  };

  const BtnShowSideNavBar = () => {
    setTimeout(() => {
      NavStatus.setSideNav(!NavStatus.sideNav);
    }, 300);
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

  return (
    <AnimatePresence>
      {NavStatus.sideNav && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={ShowSideNavBar}
          />
          
          {/* Drawer Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 h-full max-w-xs w-full glass border-l border-white/5 shadow-2xl flex flex-col z-50"
          >
            <div className="flex items-center justify-between border-b border-white/5 p-5">
              <h3 className="text-xl font-mono font-black text-text">
                <span className="text-cyan-500">{"<"}</span>
                SP
                <span className="text-cyan-500">{"/>"}</span>
              </h3>
              <button
                onClick={ShowSideNavBar}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-black/5 dark:border-white/5 text-text hover:text-cyan-400 transition-colors active:scale-95"
                aria-label="Close Menu"
              >
                <FiX size={20} />
              </button>
            </div>
            
            <div className="p-4 mt-4">
              <motion.ul 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
                }}
                className="flex flex-col gap-3"
              >
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={BtnShowSideNavBar}
                      className="block w-full px-5 py-3.5 rounded-2xl text-base font-bold text-text-muted hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-all"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-6 p-6 mt-auto border-t border-white/5"
            >
              {/* Sliding Theme Toggle pill inside Drawer */}
              <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/60 border border-black/5 dark:border-white/5 p-4 rounded-2xl">
                <p className="text-sm font-bold text-text pl-1">Aesthetic Mode</p>
                <div 
                  onClick={switchButton}
                  className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-900 border border-black/5 dark:border-white/5 p-1 flex items-center justify-between cursor-pointer select-none transition-colors duration-300"
                >
                  <div className="text-[10px] pl-1.5 text-slate-500"><FiSun size={10} className="text-amber-500" /></div>
                  <div className="text-[10px] pr-1.5 text-slate-500"><FiMoon size={10} /></div>
                  {/* Sliding Capsule */}
                  <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute w-5 h-5 rounded-full bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 shadow-md flex items-center justify-center"
                    style={{ left: Theam.isDark ? 'calc(100% - 1.5rem)' : '0.25rem' }}
                  >
                    {Theam.isDark ? <FiMoon size={9} className="text-indigo-400" /> : <FiSun size={9} className="text-amber-500" />}
                  </motion.div>
                </div>
              </div>

              {/* Download CV Gradient Button */}
              <button
                onClick={handleDownload}
                className="w-full inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 py-4 font-bold text-white transition-all shadow-lg shadow-cyan-500/10 text-sm tracking-wide uppercase"
              >
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SideNavBar;
