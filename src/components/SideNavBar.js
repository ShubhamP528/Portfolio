const SideNavBar = ({ NavStatus, Theam }) => {
  const ShowSideNavBar = () => {
    NavStatus.setSideNav(!NavStatus.sideNav);
  };

  const BtnShowSideNavBar = () => {
    setTimeout(() => {
      NavStatus.setSideNav(!NavStatus.sideNav);
    }, 500);
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
    <div className={`${"md:hidden"}   `}>
      {NavStatus.sideNav && (
        <div
          data-state="open"
          className="fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm"
          style={{ pointerEvents: "auto" }}
          data-aria-hidden="true"
          aria-hidden="true"
        ></div>
      )}
      <div
        role="dialog"
        id="radix-:R1mja:"
        aria-describedby="radix-:R1mjaH2:"
        aria-labelledby="radix-:R1mjaH1:"
        data-state="open"
        className={`bg-white fixed z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100 inset-y-0 right-0 h-full max-w-xs w-full data-[state=open]:animate-drawer-open data-[state=closed]:animate-drawer-close  ${
          !NavStatus?.sideNav && "hidden"
        } `}
        tabIndex="-1"
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <h3 className="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 font-bold">
            {"<SP />"}
          </h3>
          <button
            onClick={ShowSideNavBar}
            className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
            type="button"
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
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="border-b border-gray-100 p-4">
          <ul className="flex list-none flex-col gap-4">
            <li>
              <a
                target="_self"
                className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                href="#about"
                onClick={BtnShowSideNavBar}
              >
                About
              </a>
            </li>

            <li>
              <a
                target="_self"
                className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                href="#work"
                onClick={BtnShowSideNavBar}
              >
                Work
              </a>
            </li>

            <li>
              <a
                target="_self"
                className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                href="#project"
                onClick={BtnShowSideNavBar}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                target="_self"
                className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                href="#contact"
                onClick={BtnShowSideNavBar}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <p className="text-normal text-base">Switch Theme</p>

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
          </div>
          <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800">
            Download CV
          </button>
        </div>
      </div>
      {NavStatus.sideNav && (
        <span
          data-radix-focus-guard
          tabIndex="0"
          style={{
            outline: "none",
            opacity: "0",
            position: "fixed",
            pointerEvents: "none",
          }}
          data-aria-hidden="true"
          aria-hidden="true"
        ></span>
      )}
    </div>
  );
};

export default SideNavBar;
