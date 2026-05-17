import { useState } from "react";
import { FiMail, FiPhone, FiCopy, FiCheck, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [copiedStates, setCopiedStates] = useState({
    email: false,
    phone: false
  });

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section className="w-full py-16" id="contact">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 border border-primary-500/20 px-6 py-2 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-wider uppercase">Get in touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text">
            Let's build something great together
          </h2>
          <p className="text-base md:text-lg text-text-muted mt-2 max-w-xl mx-auto">
            What's next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
          </p>
        </div>

        <div className="w-full max-w-3xl glass-card p-8 md:p-12 flex flex-col items-center gap-10">
          
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 group w-full justify-center">
              <div className="p-4 rounded-full bg-surface border border-white/5 shadow-md text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <FiMail size={28} />
              </div>
              <h2 className="text-xl md:text-3xl font-bold font-heading text-text truncate max-w-full">
                shubham528prajapati@gmail.com
              </h2>
              <button
                className="relative p-3 rounded-xl glass hover:bg-surface-hover text-text-muted hover:text-text transition-all duration-300 active:scale-95"
                onClick={() => handleCopy("shubham528prajapati@gmail.com", "email")}
                aria-label="Copy Email"
              >
                {copiedStates.email ? <FiCheck size={24} className="text-green-500" /> : <FiCopy size={24} />}
                {copiedStates.email && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-green-500 text-white px-3 py-1 text-xs font-semibold whitespace-nowrap shadow-lg animate-fade-in">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 group w-full justify-center">
              <div className="p-4 rounded-full bg-surface border border-white/5 shadow-md text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <FiPhone size={28} />
              </div>
              <h2 className="text-xl md:text-3xl font-bold font-heading text-text">
                +91 9027640571
              </h2>
              <button
                className="relative p-3 rounded-xl glass hover:bg-surface-hover text-text-muted hover:text-text transition-all duration-300 active:scale-95"
                onClick={() => handleCopy("+919027640571", "phone")}
                aria-label="Copy Phone Number"
              >
                {copiedStates.phone ? <FiCheck size={24} className="text-green-500" /> : <FiCopy size={24} />}
                {copiedStates.phone && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-green-500 text-white px-3 py-1 text-xs font-semibold whitespace-nowrap shadow-lg animate-fade-in">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-4">
            <p className="text-text-muted font-medium">
              You may also find me on these platforms
            </p>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ShubhamP528"
                className="p-3 rounded-full bg-surface border border-white/5 shadow-md text-text-muted hover:text-text hover:scale-110 transition-all duration-300 hover:shadow-primary-500/20"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/shubham14481056"
                className="p-3 rounded-full bg-surface border border-white/5 shadow-md text-text-muted hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300 hover:shadow-[#1DA1F2]/20"
                aria-label="Twitter"
              >
                <FiTwitter size={24} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shubham-prajapati-a3b635228"
                className="p-3 rounded-full bg-surface border border-white/5 shadow-md text-text-muted hover:text-[#0A66C2] hover:scale-110 transition-all duration-300 hover:shadow-[#0A66C2]/20"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
