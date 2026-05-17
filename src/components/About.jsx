const About = () => {
  return (
    <section className="w-full py-16" id="about">
      <div className="flex flex-col items-center gap-10 md:gap-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center justify-center rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 border border-primary-500/20 px-6 py-2 backdrop-blur-md">
          <span className="text-sm font-semibold tracking-wider uppercase">About Me</span>
        </div>
        
        <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 glass-card p-6 sm:p-8 md:p-12">
          
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl rotate-3 opacity-30 blur-xl group-hover:rotate-6 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="absolute inset-0 border-2 border-primary-500/20 rounded-2xl -rotate-3 transition-transform group-hover:-rotate-6 duration-300"></div>
              <img
                alt="Shubham Prajapati"
                loading="lazy"
                width="1833"
                height="2318"
                className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] rounded-2xl border-4 border-white/10 shadow-2xl object-cover"
                src="https://res.cloudinary.com/dgsjppp4a/image/upload/v1714049749/skwgsw6savbvv1gferdi.jpg"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            <h3 className="text-2xl md:text-4xl font-bold font-heading text-text text-center lg:text-left">
              Curious about me? Here you have it:
            </h3>
            
            <div className="flex flex-col gap-4 text-text-muted text-base md:text-lg leading-relaxed text-justify sm:text-left">
              <p>
                I'm a passionate,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline underline-offset-4 transition-colors"
                  href="https://github.com/ShubhamP528"
                >
                  self-proclaimed developer
                </a>
                {" "}who specializes in full stack development (React.js, Node.js & React Native). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
              </p>
              <p>
                I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. I'm building cutting-edge web applications using modern technologies such as React.js, Node.js, Express.js, MongoDB, PostgreSQL, Tailwindcss and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline underline-offset-4 transition-colors"
                  href="https://twitter.com/shubham14481056"
                >
                  Twitter
                </a>
                {" "}where I share tech-related bites and build in public, or you can follow me on{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline underline-offset-4 transition-colors"
                  href="https://github.com/ShubhamP528"
                >
                  GitHub
                </a>.
              </p>
              <p>
                One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
