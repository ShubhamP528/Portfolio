const Hero = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="hero">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row mt-10">
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <img
                alt="Headshot of Shubham"
                loading="lazy"
                width="1067"
                height="1067"
                decoding="async"
                data-nimg="1"
                className="absolute z-10 h-[280px] w-[240px] border-8 border-gray border-white max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ color: "transparent", objectFit: "cover" }}
                src="https://res.cloudinary.com/dgsjppp4a/image/upload/c_crop,g_auto,h_800,w_826/xzyxaah7rqp10qzybskl.jpg"
              />

              <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
            </div>
          </div>
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900 text-nowrap">
                Hi, I'm Shubham
                <span className="inline-block animate-waving-hand">👋</span>
              </h1>
              <p className="text-normal text-base">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating exceptional digital experiences that are fast,
                accessible, visually appealing, and responsive. Even though I
                have been creating web applications I still love it as if it was
                something new.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-gray-600"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="text-normal text-base">Bareilly, India</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <p>Available for new projects</p>
              </div>
            </div>
            <div className="flex gap-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ShubhamP528"
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/shubham14481056"
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokewinecap="round"
                  strokewinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shubham-prajapati-a3b635228"
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 60 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokewinecap="round"
                  strokewinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path
                    d="M14.2 19.6H1.7c-.4 0-.8.3-.8.8v37.4c0 .4.3.8.8.8h12.4c.4 0 .8-.3.8-.8V20.3c0-.4-.3-.7-.7-.7zM13.4 57H2.5V21.1h10.9V57zM8 1.5C3.5 1.5.2 4.5.2 8.7s3.2 7.2 7.6 7.2H8c4.5 0 7.8-3 7.8-7.2-.2-4.2-3.3-7.2-7.8-7.2zm0 13c-3.7 0-6.2-2.4-6.2-5.7C1.8 5.4 4.3 3 8 3c3.6 0 6.1 2.3 6.2 5.7 0 3.4-2.5 5.8-6.2 5.8zM44.7 18.7c-5.4 0-8.5 2.3-10.5 4.6v-3c0-.4-.3-.8-.8-.8H21c-.2 0-.4.1-.5.2-.1.1-.2.3-.2.6.2 3.4 0 37 0 37.4 0 .2.1.4.2.5.1.1.3.2.5.2h12.4c.4 0 .8-.3.8-.8V36.8c0-1.3.1-2.2.4-2.8.5-1.2 2-4.1 5.7-4.1s5.5 2.6 5.5 7.7v20c0 .4.3.8.8.8H59c.4 0 .8-.3.8-.8V36.3c0-11-5.7-17.6-15.1-17.6zM58.2 57H47.3V37.7c0-5.9-2.5-9.2-7-9.2-3.2 0-5.8 1.9-7.1 5-.3.8-.5 1.8-.5 3.3V57H21.8c0-4.8.1-30.3 0-35.9h10.9v4.3c-.1.2-.1.5.1.7.1.2.4.4.7.4.4 0 .7-.3.7-.6 1.8-2.7 4.6-5.7 10.5-5.7 8.6 0 13.6 5.9 13.6 16.1V57z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" id="linkedin">
  <path d="M14.2 19.6H1.7c-.4 0-.8.3-.8.8v37.4c0 .4.3.8.8.8h12.4c.4 0 .8-.3.8-.8V20.3c0-.4-.3-.7-.7-.7zM13.4 57H2.5V21.1h10.9V57zM8 1.5C3.5 1.5.2 4.5.2 8.7s3.2 7.2 7.6 7.2H8c4.5 0 7.8-3 7.8-7.2-.2-4.2-3.3-7.2-7.8-7.2zm0 13c-3.7 0-6.2-2.4-6.2-5.7C1.8 5.4 4.3 3 8 3c3.6 0 6.1 2.3 6.2 5.7 0 3.4-2.5 5.8-6.2 5.8zM44.7 18.7c-5.4 0-8.5 2.3-10.5 4.6v-3c0-.4-.3-.8-.8-.8H21c-.2 0-.4.1-.5.2-.1.1-.2.3-.2.6.2 3.4 0 37 0 37.4 0 .2.1.4.2.5.1.1.3.2.5.2h12.4c.4 0 .8-.3.8-.8V36.8c0-1.3.1-2.2.4-2.8.5-1.2 2-4.1 5.7-4.1s5.5 2.6 5.5 7.7v20c0 .4.3.8.8.8H59c.4 0 .8-.3.8-.8V36.3c0-11-5.7-17.6-15.1-17.6zM58.2 57H47.3V37.7c0-5.9-2.5-9.2-7-9.2-3.2 0-5.8 1.9-7.1 5-.3.8-.5 1.8-.5 3.3V57H21.8c0-4.8.1-30.3 0-35.9h10.9v4.3c-.1.2-.1.5.1.7.1.2.4.4.7.4.4 0 .7-.3.7-.6 1.8-2.7 4.6-5.7 10.5-5.7 8.6 0 13.6 5.9 13.6 16.1V57z"></path>
</svg>;
