import { FiHeart } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 mt-12 border-t border-surface-hover bg-surface/50 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm font-medium text-text-muted flex items-center flex-wrap justify-center gap-1.5">
          © {year} | Coded with <FiHeart className="text-red-500 fill-red-500 animate-pulse inline-block" size={16} /> by
          <a
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            href="https://github.com/ShubhamP528"
          >
            Shubham Prajapati
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
