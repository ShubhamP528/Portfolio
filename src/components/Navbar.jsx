import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';

const Navbar = ({ NavStatus, Theam }) => {
  const ShowSideNavBar = () => {
    NavStatus.setSideNav(!NavStatus.sideNav);
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
    <header className="fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-surface/80 border-b border-surface-hover shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <a href="#hero" className="group">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text transition-transform duration-300 group-hover:scale-105">
            <span className="text-primary-500">{"<"}</span>
            SP
            <span className="text-primary-500">{"/>"}</span>
          </h3>
        </a>
        
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex list-none items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-text-muted transition-colors hover:text-primary-500 uppercase tracking-wider relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="h-6 w-px bg-slate-300 dark:bg-slate-700"></div>

          <div className="flex items-center gap-4">
            <button
              onClick={switchButton}
              className="p-2.5 rounded-full glass hover:bg-surface-hover text-text transition-all duration-300 hover:rotate-12"
              aria-label="Toggle Dark Mode"
            >
              {Theam.isDark ? <FiSun size={20} className="text-amber-400" /> : <FiMoon size={20} className="text-slate-600" />}
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center rounded-full bg-text px-6 py-2.5 text-sm font-semibold text-surface transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-white/10"
            >
              Download CV
            </button>
          </div>
        </div>

        <button
          onClick={ShowSideNavBar}
          className={`md:hidden p-2 rounded-xl glass text-text transition-transform active:scale-95 ${NavStatus.sideNav ? 'hidden' : 'flex'}`}
          aria-label="Open Menu"
        >
          <FiMenu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
