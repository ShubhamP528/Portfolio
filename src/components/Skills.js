const Skills = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium">Skills</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
          <div className="flex flex-col items-center gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <img
                alt="Javascript"
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-javascript.d5945e90.svg"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Javascript</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://react.dev/">
              <img
                alt="React"
                loading="lazy"
                width="71"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-react.f09634b9.svg"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">React</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://nodejs.org/">
              <img
                alt="Node.js"
                loading="lazy"
                width="57"
                height="64"
                decoding="async"
                data-nimg="1"
                class="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-nodejs.e9fdb7cb.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <p className="text-normal text-base md:text-lg">Node.js</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://expressjs.com/">
              <img
                alt="Express.js"
                loading="lazy"
                width="65"
                height="64"
                decoding="async"
                data-nimg="1"
                class="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-express.14fe67e7.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <p className="text-normal text-base md:text-lg">Express.js</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://socket.io/">
              <img
                alt="Socket.io"
                loading="lazy"
                width="65"
                height="64"
                decoding="async"
                data-nimg="1"
                class="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-socket.b8aba332.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <p className="text-normal text-base md:text-lg">Socket.io</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.postgresql.org/"
            >
              <img
                alt="PostgreSQL"
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                data-nimg="1"
                class="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-postgresql.37b474b1.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <p className="text-normal text-base md:text-lg">PostgreSQL</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://www.mongodb.com/">
              <img
                alt="MongoDB"
                loading="lazy"
                width="31"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-mongodb.e1664f55.svg"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">MongoDB</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
              <img
                alt="Tailwindcss"
                loading="lazy"
                width="106"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-tailwindcss.6649f603.svg"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Tailwindcss</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://git-scm.com/">
              <img
                alt="Git"
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://sagarshah.dev/_next/static/media/icon-git.e364d254.svg"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Git</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://go.dev/">
              <img
                alt="Go"
                loading="lazy"
                width="73"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Go</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://prometheus.io/">
              <img
                alt="Prometheus"
                loading="lazy"
                width="45"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://static-00.iconduck.com/assets.00/file-type-prometheus-icon-360x512-uvrmbt7e.png"
                style={{ color: "red" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Prometheus</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://grafana.com/">
              <img
                alt="Grafana"
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/375px-Grafana_icon.svg.png"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Grafana</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://isocpp.org/">
              <img
                alt="C++"
                loading="lazy"
                width="62"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">C++</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://getbootstrap.com/docs/5.0/about/brand/"
            >
              <img
                alt="Bootstrap"
                loading="lazy"
                width="85"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://www.postman.com/">
              <img
                alt="Postman"
                loading="lazy"
                width="68"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Postman</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a target="_blank" rel="noreferrer" href="https://www.docker.com/">
              <img
                alt="Javascript"
                loading="lazy"
                width="60"
                height="64"
                decoding="async"
                data-nimg="1"
                className="transition-transform duration-300 md:hover:scale-110"
                src="https://cdn.worldvectorlogo.com/logos/docker-4.svg"
                style={{ color: "transparent" }}
              ></img>
            </a>
            <p className="text-normal text-base md:text-lg">Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
