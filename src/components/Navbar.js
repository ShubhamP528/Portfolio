const Navbar = ({ NavStatus, Theam }) => {
  const ShowSideNavBar = () => {
    NavStatus.setSideNav(!NavStatus.sideNav);
  };

  const switchButton = () => {
    if (Theam.isDark) {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      document.getElementsByTagName("html")[0].classList.add("light");
      document
        .getElementsByTagName("html")[0]
        .setAttribute("style", "color-scheme: light");
      Theam.setIsDark(false);
    } else {
      document.getElementsByTagName("html")[0].classList.remove("light");
      document.getElementsByTagName("html")[0].classList.add("dark");
      document
        .getElementsByTagName("html")[0]
        .setAttribute("style", "color-scheme: dark");
      Theam.setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-transparent max-md:border-gray-100 bg-gray/50 backdrop-blur-xl md:border-gray-100">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <a href="#">
          <h3 className="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 font-bold">
            {"<SP />"}
          </h3>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            <li className="cursor-pointer hover:text-gray-800">
              <a
                target="_self"
                className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-800">
              <a
                target="_self"
                className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                href="#work"
              >
                Work
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-800">
              <a
                target="_self"
                className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                href="#project"
              >
                Projects
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-800">
              <a
                target="_self"
                className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>

          <div className="flex items-center gap-4">
            <button
              className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
              onClick={switchButton}
            >
              {Theam.isDark ? (
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
                  className="lucide lucide-sun"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              ) : (
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
                  className="lucide lucide-moon-star"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  <path d="M21 5h-4"></path>
                  <path d="M19 3v4"></path>
                </svg>
              )}
            </button>
            <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800">
              Download CV
            </button>
          </div>
        </div>
        <button
          onClick={ShowSideNavBar}
          className={`relative justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6 flex md:hidden ${
            NavStatus.sideNav && "hidden"
          }`}
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R1mja:"
          data-state="closed"
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
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
