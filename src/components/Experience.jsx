import { motion } from 'framer-motion';
import clawLaw from "../Assets/gptclaw.PNG";
import rablo from "../Assets/rablo.png";
import dezhub from "../Assets/dezhub.png";

const experiences = [
  {
    company: "Claw Legal Tech",
    logo: clawLaw,
    period: "May 2024 - Present",
    current: true,
    roles: [
      {
        title: "Full Stack Lead",
        duration: "June 2025 - Present",
        responsibilities: [
          "Managed and optimized the backend server architecture for improved performance.",
          "Implemented new features, APIs, and overall system enhancements.",
          "Led a team of developers in delivering high-quality software solutions.",
          "Built and maintained two cross-platform mobile applications using React Native."
        ]
      },
      {
        title: "Full-Stack Developer",
        duration: "May 2024 - June 2025",
        responsibilities: [
          "Developed end-to-end full-stack web applications.",
          "Translated complex Figma designs into responsive, interactive UI components."
        ]
      }
    ]
  },
  {
    company: "Rablo",
    logo: rablo,
    period: "Feb 2024 - April 2024",
    current: false,
    roles: [
      {
        title: "Backend Developer",
        duration: "Feb 2024 - April 2024",
        responsibilities: [
          "Served as Backend Team Lead, overseeing API development and deployment.",
          "Conducted comprehensive API testing and debugging using Postman.",
          "Authored detailed technical documentation for backend APIs.",
          "Resolved critical backend issues to ensure system stability."
        ]
      }
    ]
  },
  {
    company: "Dezhub",
    logo: dezhub,
    period: "Nov 2023 - Jan 2024",
    current: false,
    roles: [
      {
        title: "Backend Developer",
        duration: "Nov 2023 - Jan 2024",
        responsibilities: [
          "Wrote concurrent and efficient backend logic using Go (Golang) and Goroutines.",
          "Developed new backend modules to extend application functionality.",
          "Generated mock user data via the Fakeit library to facilitate rigorous API testing.",
          "Utilized Grafana and Prometheus for database visualization and system monitoring."
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section className="w-full py-16" id="work">
      <div className="flex flex-col items-center gap-16 px-4 sm:px-6 overflow-hidden max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 px-6 py-2 backdrop-blur-md"
          >
            <span className="text-sm font-semibold tracking-wider uppercase">History</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-text"
          >
            Professional Engagements
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-muted mt-2"
          >
            Engineering scalable platforms, leading development, and collaborating inside fast-growing ecosystems.
          </motion.p>
        </div>

        {/* Dynamic Timeline Layout */}
        <div className="w-full flex flex-col gap-10 relative">
          
          {/* Vertical left accent glow track */}
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/10 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 w-full md:pl-16"
            >
              {/* Central Glowing status node dot */}
              <div className="absolute left-6 w-5 h-5 rounded-full bg-[#080a10] border-4 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)] top-[26px] transform -translate-x-1/2 hidden md:block z-10"></div>
              
              {/* Left Side: Brand Panel */}
              <div className="w-full md:w-1/4 flex flex-col md:items-start gap-3">
                <div className="h-14 w-28 md:w-36 flex items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 shadow-md">
                  <img
                    alt={`${exp.company} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter brightness-110"
                    src={exp.logo}
                  />
                </div>

                <div className="flex flex-col gap-1 mt-1">
                  <h3 className="text-lg font-black font-heading text-text tracking-wide">{exp.company}</h3>
                  <span className="text-xs font-mono font-semibold text-text-muted">{exp.period}</span>
                </div>

                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm shadow-emerald-500/5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Current Role
                  </span>
                )}
              </div>

              {/* Right Side: Details list */}
              <div className="w-full md:w-3/4 flex flex-col gap-8 glass-card p-6 md:p-8 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none rounded-bl-full"></div>

                {exp.roles.map((role, rIndex) => (
                  <div key={rIndex} className="flex flex-col gap-4 relative">
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-black/5 dark:border-white/5 pb-3">
                      <h4 className="text-xl font-bold text-text group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {role.title}
                      </h4>
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-1 sm:mt-0 uppercase tracking-widest bg-indigo-500/10 dark:bg-indigo-500/20 px-2.5 py-1 rounded-md self-start border border-indigo-500/15">
                        {role.duration}
                      </span>
                    </div>

                    {/* Bullet Achievements */}
                    <ul className="flex flex-col gap-3">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm md:text-base text-text-muted flex items-start gap-3 leading-relaxed">
                          {/* Cyan hexagon dot */}
                          <span className="text-cyan-600 dark:text-cyan-400 mt-1 select-none flex-shrink-0">◆</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
