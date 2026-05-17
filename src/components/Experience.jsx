import clawLaw from "../Assets/gptclaw.PNG";
import rablo from "../Assets/rablo.png";
import dezhub from "../Assets/dezhub.png";

const experiences = [
  {
    company: "Claw Legal Tech",
    logo: clawLaw,
    period: "May 2024 - Present",
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
      <div className="flex flex-col items-center gap-10 md:gap-16 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 border border-primary-500/20 px-6 py-2 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-wider uppercase">Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text">
            My Professional Journey
          </h2>
          <p className="text-base md:text-lg text-text-muted mt-2">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-6 md:gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-gradient-to-b from-primary-500 to-purple-500"></div>
              
              <div className="md:w-1/4 flex flex-row md:flex-col items-center md:items-stretch justify-between md:justify-start gap-4">
                <div className="h-14 w-28 sm:h-16 sm:w-32 md:h-20 md:w-full flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:scale-105 transition-transform duration-300">
                  <img
                    alt={`${exp.company} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                    src={exp.logo}
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-text-muted text-right md:hidden">
                  {exp.period}
                </p>
              </div>

              <div className="md:w-2/4 flex flex-col gap-6 md:gap-8">
                {exp.roles.map((role, rIndex) => (
                  <div key={rIndex} className="relative">
                    {exp.roles.length > 1 && (
                      <div className="absolute -left-4 sm:-left-[1.65rem] top-2 bottom-[-1.5rem] w-px bg-gray-300 dark:bg-white/10 hidden sm:block"></div>
                    )}
                    <div className="relative">
                      {exp.roles.length > 1 && (
                        <div className="absolute -left-[1.3rem] sm:-left-[2rem] top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(var(--primary-500),0.5)] hidden sm:block"></div>
                      )}
                      <h3 className="text-lg md:text-xl font-bold text-text mb-1">
                        {role.title}
                      </h3>
                      <time className="block text-xs sm:text-sm font-medium text-primary-500 mb-3 md:hidden">
                        {role.duration}
                      </time>
                      <ul className="flex flex-col gap-2 mt-3 md:mt-0">
                        {role.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm md:text-base text-text-muted flex items-start gap-2.5">
                            <span className="text-primary-500 mt-0.5 md:mt-1 text-lg">•</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:w-1/4 hidden md:flex justify-end">
                <p className="text-sm font-medium text-text-muted mt-1 whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
