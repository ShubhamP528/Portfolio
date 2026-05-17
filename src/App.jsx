import { useEffect, useState } from "react";
import "./index.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SideNavBar from "./components/SideNavBar";
import Skills from "./components/Skills";
import { Helmet } from "react-helmet";

function App() {
  const [sideNav, setSideNav] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode for premium developer aesthetic

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [isDark]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSideNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-text transition-colors duration-300">
      
      {/* Background Futuristic Ambient Mesh & Auroras */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full filter blur-[80px] sm:blur-[100px] animate-blob"></div>
        <div className="absolute top-[30%] right-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full filter blur-[100px] sm:blur-[120px] animate-blob" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full filter blur-[80px] sm:blur-[100px] animate-blob" style={{ animationDelay: '6s' }}></div>
        <div className="aurora-bg opacity-70 dark:opacity-100"></div>
      </div>

      <Helmet>
        <title>Shubham Prajapati | Full-Stack Software Engineer</title>
        <meta name="description" content="Portfolio of Shubham Prajapati, a passionate software developer specializing in building premium full-stack web and mobile products." />
      </Helmet>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar NavStatus={{ sideNav, setSideNav }} Theam={{ isDark, setIsDark }} />
        <SideNavBar NavStatus={{ sideNav, setSideNav }} Theam={{ isDark, setIsDark }} />
        
        {/* Responsive gaps and paddings optimized for mobile viewports */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 md:gap-32 py-24 sm:py-28">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
