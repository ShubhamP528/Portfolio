const skillsData = [
  { name: 'JavaScript', img: 'https://sagarshah.dev/_next/static/media/icon-javascript.d5945e90.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', img: 'https://sagarshah.dev/_next/static/media/icon-react.f09634b9.svg', link: 'https://react.dev/' },
  { name: 'Node.js', img: 'https://sagarshah.dev/_next/static/media/icon-nodejs.e9fdb7cb.svg', link: 'https://nodejs.org/' },
  { name: 'Express.js', img: 'https://sagarshah.dev/_next/static/media/icon-express.14fe67e7.svg', link: 'https://expressjs.com/' },
  { name: 'Socket.io', img: 'https://sagarshah.dev/_next/static/media/icon-socket.b8aba332.svg', link: 'https://socket.io/' },
  { name: 'PostgreSQL', img: 'https://sagarshah.dev/_next/static/media/icon-postgresql.37b474b1.svg', link: 'https://www.postgresql.org/' },
  { name: 'MongoDB', img: 'https://sagarshah.dev/_next/static/media/icon-mongodb.e1664f55.svg', link: 'https://www.mongodb.com/' },
  { name: 'Tailwindcss', img: 'https://sagarshah.dev/_next/static/media/icon-tailwindcss.6649f603.svg', link: 'https://tailwindcss.com/' },
  { name: 'Git', img: 'https://sagarshah.dev/_next/static/media/icon-git.e364d254.svg', link: 'https://git-scm.com/' },
  { name: 'Go', img: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png', link: 'https://go.dev/' },
  { name: 'Prometheus', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg', link: 'https://prometheus.io/' },
  { name: 'Grafana', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg', link: 'https://grafana.com/' },
  { name: 'C++', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', link: 'https://isocpp.org/' },
  { name: 'Bootstrap', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg', link: 'https://getbootstrap.com/' },
  { name: 'Postman', img: 'https://voyager.postman.com/logo/postman-logo-icon-orange.svg', link: 'https://www.postman.com/' },
  { name: 'Docker', img: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg', link: 'https://www.docker.com/' },
];

const Skills = () => {
  return (
    <section className="w-full py-16" id="skills">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 border border-primary-500/20 px-6 py-2 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-wider uppercase">Skills</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text">
            Technologies & Tools
          </h2>
          <p className="text-base md:text-lg text-text-muted mt-2">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="w-full max-w-5xl glass-card p-8 md:p-12">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-8 md:gap-12">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-4 group">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={skill.link}
                  className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl glass transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary-500/20 group-hover:-translate-y-2 p-3"
                >
                  <img
                    alt={skill.name}
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-md"
                    src={skill.img}
                  />
                </a>
                <p className="text-sm md:text-base font-medium text-text-muted group-hover:text-primary-500 transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
