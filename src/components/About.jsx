import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story' },
    { id: 'focus', label: 'Core Focus' },
    { id: 'philosophy', label: 'Philosophy' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <motion.div
            key="story"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 text-text-muted text-base md:text-lg leading-relaxed"
          >
            <p>
              I began my journey as a developer in 2023, driven by a deep fascination with how complex digital products come to life. Over the last couple of years, I’ve grown into a passionate, self-motivated{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 underline underline-offset-4 transition-colors"
                href="https://github.com/ShubhamP528"
              >
                full-stack developer
              </a>.
            </p>
            <p>
              I specialize in scaling systems end-to-end, writing clear and testable code, and translating complex Figma blueprints into high-fidelity, polished interactive layouts. Whether it’s web architectures or mobile ecosystems (React Native), I bring modern technical execution to every project.
            </p>
            <p>
              When I'm not writing code, I love following tech startups, building tools in public on Twitter, and tinkering with early-stage open-source projects.
            </p>
          </motion.div>
        );
      case 'focus':
        return (
          <motion.div
            key="focus"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface/50 border border-black/5 dark:border-white/5">
                <h4 className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm uppercase tracking-wider mb-2">⚡ Front-End Artistry</h4>
                <p className="text-sm text-text-muted">Building responsive, pixel-perfect, and dynamic client interfaces using React, Next.js, and Framer Motion.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/50 border border-black/5 dark:border-white/5">
                <h4 className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm uppercase tracking-wider mb-2">⚙️ Scalable Back-Ends</h4>
                <p className="text-sm text-text-muted">Designing fast servers and relational databases with Node.js, Express, Go, PostgreSQL, and MongoDB.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/50 border border-black/5 dark:border-white/5">
                <h4 className="text-purple-600 dark:text-purple-400 font-mono font-bold text-sm uppercase tracking-wider mb-2">📱 Mobile Ecosystems</h4>
                <p className="text-sm text-text-muted">Architecting native, cross-platform mobile apps for iOS and Android using React Native.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/50 border border-black/5 dark:border-white/5">
                <h4 className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-sm uppercase tracking-wider mb-2">🛠️ System Optimization</h4>
                <p className="text-sm text-text-muted">Monitoring high-throughput database aggregates, Socket.io channels, and load monitoring (Grafana/Prometheus).</p>
              </div>
            </div>
          </motion.div>
        );
      case 'philosophy':
        return (
          <motion.div
            key="philosophy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 text-text-muted text-base md:text-lg leading-relaxed"
          >
            <p className="border-l-2 border-cyan-500 pl-4 italic text-text">
              "Simple is better than complex. Complex is better than complicated."
            </p>
            <p>
              My goal as a developer is to write code that is elegant, readable, and built to scale. I believe in clean code architectures, minimal state footprints, and high performance as foundational requirements, not optional additions.
            </p>
            <p>
              I take pride in my attention to details: from responsive alignment across devices to precise micro-animations, ensuring each interaction feels clean and premium.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-16" id="about">
      <div className="flex flex-col items-center gap-10 md:gap-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 px-6 py-2 backdrop-blur-md"
          >
            <span className="text-sm font-semibold tracking-wider uppercase">About Me</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-text mt-2"
          >
            Who I Am & What I Drive
          </motion.h2>
        </div>
        
        {/* Glass Container */}
        <div className="flex w-full flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16 glass-card p-6 sm:p-8 md:p-12 glow-shadow-purple">
          
          {/* Left Side: Aesthetic Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex items-center justify-center relative"
          >
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px]">
              {/* Outer Glow Backings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:scale-105 transition-transform duration-500 animate-pulse"></div>
              
              {/* Sleek Picture Container */}
              <div className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-[#0b0f19] shadow-2xl p-3">
                <img
                  alt="Shubham Prajapati portrait"
                  loading="lazy"
                  width="1833"
                  height="2318"
                  className="rounded-2xl w-full h-[360px] md:h-[420px] object-cover"
                  src="https://res.cloudinary.com/dgsjppp4a/image/upload/v1714049749/skwgsw6savbvv1gferdi.jpg"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Tabbed Dynamic Content Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 w-full">
              {/* Tab Header Buttons */}
              <div className="flex items-center gap-3 p-1.5 rounded-xl bg-slate-100 dark:bg-[#070a12]/50 border border-black/5 dark:border-white/5 self-start max-w-full overflow-x-auto scrollbar-none">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                        : 'text-text-muted hover:text-text hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Tab Body with Transition */}
              <div className="min-h-[260px] py-2 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-black/5 dark:border-white/5 pt-8 mt-6">
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-cyan-600 dark:text-cyan-400">2+</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Years Experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-indigo-600 dark:text-indigo-400">15+</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Projects Built</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-purple-600 dark:text-purple-400">24/7</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Dev Mindset</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
