const Projects = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="project">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium">Projects</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
          <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://syncmovie-watch.netlify.app/"
            >
              <img
                alt="SyncMovie Watching Application"
                loading="lazy"
                width="1711"
                height="1141"
                decoding="async"
                data-nimg="1"
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                style={{ color: "transparent", objectFit: "cover" }}
                src="https://res.cloudinary.com/dgsjppp4a/image/upload/v1715045687/yr0ynwae0whq9smnqvo1.png"
              ></img>
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              SyncMovie Watching Application
            </p>
            <p className="text-normal text-base">
              Experience the joy of synchronized movie magic with our innovative
              app! Connect with friends, near or far, and watch your favorite
              films together in perfect harmony. Whether it's laughter, tears,
              or edge-of-your-seat suspense, share every cinematic moment in
              real-time with our sync movie watching app.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">React</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Socket.io</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Tailwindcss</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Express.js</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Youtube API</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">MongoDB</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Formik</p>
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
              href="https://syncmovie-watch.netlify.app/"
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
                className="lucide lucide-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
          <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r md:order-last">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://shoping-deal.vercel.app/"
            >
              <img
                alt="Shopping App"
                loading="lazy"
                width="1711"
                height="1141"
                decoding="async"
                data-nimg="1"
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                style={{ color: "transparent", objectFit: "cover" }}
                src="https://res.cloudinary.com/dgsjppp4a/image/upload/c_crop,g_north,h_1830,w_1920/wptburafgwshbnurz82k.jpg"
              ></img>
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12 md:order-first">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Shoping App
            </p>
            <p className="text-normal text-base">
              Discover convenience at your fingertips with our shopping app!
              Browse, buy, and delight in a seamless shopping experience. From
              must-have essentials to trending favorites, explore a world of
              endless possibilities, all in one place. Elevate your shopping
              journey today!
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Express</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">EJS</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Passport Auth</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Bootstrap</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Javascipt</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">MongoDB</p>
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
              href="https://shoping-deal.vercel.app/"
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
                className="lucide lucide-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
          <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://chating-application.onrender.com/"
            >
              <img
                alt="Chating application"
                loading="lazy"
                width="1711"
                height="1141"
                decoding="async"
                data-nimg="1"
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                style={{ color: "transparent", objectFit: "cover" }}
                src="https://res.cloudinary.com/dgsjppp4a/image/upload/v1715059178/d6r2m27lj06bwhs4stoh.png"
              ></img>
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Chating App
            </p>
            <p className="text-normal text-base">
              Connecting people, one chat at a time. Welcome to our vibrant
              community where conversations spark, friendships flourish, and
              memories are made. Join us and let your words create waves of
              connection across the digital landscape.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Express</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">EJS</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Socket.io</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Javascipt</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Bootstrap</p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                <p className="text-normal text-sm font-medium">Passport Auth</p>
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
              href="https://chating-application.onrender.com/"
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
                className="lucide lucide-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
