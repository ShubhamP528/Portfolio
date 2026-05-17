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
  const [isDark, setIsDark] = useState(true); // Default to dark mode for a premium feel

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
    <div className="min-h-screen relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background Animated Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <Helmet>
        <title>Shubham Prajapati - Software Developer</title>
        <meta name="description" content="Portfolio of Shubham Prajapati, a passionate software developer." />
      </Helmet>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar NavStatus={{ sideNav, setSideNav }} Theam={{ isDark, setIsDark }} />
        <SideNavBar NavStatus={{ sideNav, setSideNav }} Theam={{ isDark, setIsDark }} />
        
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 py-20">
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
