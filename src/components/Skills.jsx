import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Creating responsive, immersive user interfaces with flawless design fidelity.",
    colorClass: "from-cyan-500 to-blue-600",
    glowClass: "group-hover:shadow-cyan-500/10",
    borderGlow: "before:from-cyan-500/40 before:to-blue-500/40",
    skills: [
      { name: 'JavaScript', img: 'https://sagarshah.dev/_next/static/media/icon-javascript.d5945e90.svg', level: 90 },
      { name: 'React.js', img: 'https://sagarshah.dev/_next/static/media/icon-react.f09634b9.svg', level: 95 },
      { name: 'Tailwindcss', img: 'https://sagarshah.dev/_next/static/media/icon-tailwindcss.6649f603.svg', level: 95 },
      { name: 'Bootstrap', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg', level: 85 },
    ]
  },
  {
    title: "Backend & Systems",
    description: "Architecting high-throughput, performant, and scalable server applications.",
    colorClass: "from-indigo-500 to-purple-600",
    glowClass: "group-hover:shadow-indigo-500/10",
    borderGlow: "before:from-indigo-500/40 before:to-purple-500/40",
    skills: [
      { name: 'Node.js', img: 'https://sagarshah.dev/_next/static/media/icon-nodejs.e9fdb7cb.svg', level: 90 },
      { name: 'Express.js', img: 'https://sagarshah.dev/_next/static/media/icon-express.14fe67e7.svg', level: 90 },
      { name: 'Go (Golang)', img: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png', level: 75 },
      { name: 'Socket.io', img: 'https://sagarshah.dev/_next/static/media/icon-socket.b8aba332.svg', level: 85 },
    ]
  },
  {
    title: "Databases & DevOps",
    description: "Designing reliable storage schemas and robust deployment flows.",
    colorClass: "from-emerald-500 to-teal-600",
    glowClass: "group-hover:shadow-emerald-500/10",
    borderGlow: "before:from-emerald-500/40 before:to-teal-500/40",
    skills: [
      { name: 'MongoDB', img: 'https://sagarshah.dev/_next/static/media/icon-mongodb.e1664f55.svg', level: 90 },
      { name: 'PostgreSQL', img: 'https://sagarshah.dev/_next/static/media/icon-postgresql.37b474b1.svg', level: 80 },
      { name: 'Docker', img: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg', level: 70 },
      { name: 'Git & GitHub', img: 'https://sagarshah.dev/_next/static/media/icon-git.e364d254.svg', level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section className="w-full py-16" id="skills">
      <div className="flex flex-col items-center gap-16 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 px-6 py-2 backdrop-blur-md"
          >
            <span className="text-sm font-semibold tracking-wider uppercase">Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-text"
          >
            Core Expertise & Technologies
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-muted mt-2"
          >
            I specialize in full-stack JavaScript frameworks, optimized system structures, and reactive native mobile layers.
          </motion.p>
        </div>

        {/* Bento Board layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: catIndex * 0.15 }}
              className={`glass-card p-8 flex flex-col justify-between hover:border-black/10 dark:hover:border-white/10 relative group overflow-hidden ${category.glowClass}`}
            >
              {/* Category Gradient Header Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.colorClass}`}></div>

              <div>
                {/* Category Titles */}
                <h3 className="text-2xl font-black font-heading text-text tracking-wide mt-2">
                  {category.title}
                </h3>
                <p className="text-sm text-text-muted mt-3 leading-relaxed mb-8">
                  {category.description}
                </p>

                {/* Skills Stack List */}
                <div className="flex flex-col gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Mini logo container compatible with theme */}
                          <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 flex items-center justify-center p-1.5 shadow-md">
                            <img
                              src={skill.img}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-sm font-bold text-text-muted group-hover:text-text transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        {/* Expertise label */}
                        <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                      </div>

                      {/* Micro Progress Bar Glowing track */}
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.colorClass}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Holographic accent number background */}
              <div className="absolute -bottom-8 -right-8 text-8xl font-black font-heading opacity-5 text-text select-none pointer-events-none">
                {catIndex + 1}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
