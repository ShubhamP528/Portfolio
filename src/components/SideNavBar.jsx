import { FiX, FiSun, FiMoon } from "react-icons/fi";

const SideNavBar = ({ NavStatus, Theam }) => {
  const ShowSideNavBar = () => {
    NavStatus.setSideNav(!NavStatus.sideNav);
  };

  const BtnShowSideNavBar = () => {
    setTimeout(() => {
      NavStatus.setSideNav(!NavStatus.sideNav);
    }, 300);
  };

  const handleDownload = () => {
    const url = "/ShubhamPrajapati.pdf";
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(new Blob([blob]));
        link.setAttribute("download", "Shubham Prajapati.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  const switchButton = () => {
    Theam.setIsDark(!Theam.isDark);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#project' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`md:hidden`}>
      {NavStatus.sideNav && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity"
          onClick={ShowSideNavBar}
        ></div>
      )}
      <div
        className={`fixed z-50 inset-y-0 right-0 h-full max-w-xs w-full glass shadow-2xl transition-transform duration-300 ease-in-out ${
          NavStatus.sideNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-surface-hover p-4">
          <h3 className="text-2xl font-bold font-heading text-text">
            <span className="text-primary-500">{"<"}</span>
            SP
            <span className="text-primary-500">{"/>"}</span>
          </h3>
          <button
            onClick={ShowSideNavBar}
            className="p-2 rounded-xl hover:bg-surface-hover text-text transition-colors active:scale-95"
            aria-label="Close Menu"
          >
            <FiX size={24} />
          </button>
        </div>
        
        <div className="border-b border-surface-hover p-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={BtnShowSideNavBar}
                  className="block w-full px-4 py-3 rounded-xl text-base font-semibold text-text-muted hover:text-primary-500 hover:bg-surface-hover transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col gap-6 p-6">
          <div className="flex items-center justify-between bg-surface-hover p-4 rounded-xl">
            <p className="text-sm font-semibold text-text">Theme</p>
            <button
              onClick={switchButton}
              className="p-2 rounded-full glass hover:bg-surface-hover text-text transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {Theam.isDark ? <FiSun size={20} className="text-amber-400" /> : <FiMoon size={20} className="text-slate-600" />}
            </button>
          </div>
          <button
            onClick={handleDownload}
            className="w-full inline-flex items-center justify-center rounded-xl bg-primary-600 hover:bg-primary-500 px-4 py-3 font-semibold text-white transition-colors shadow-lg shadow-primary-500/30"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
