import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SideNavBar from "./components/SideNavBar";
import Skills from "./components/Skills";

function App() {
  const [sideNav, setSideNav] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // console.log(sideNav);
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      // setViewportWidth(window.innerWidth);
      // Perform actions based on the viewport width change
      // For example:
      if (window.innerWidth > 768) {
        setSideNav(false);
      } else {
        // Do something else
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that effect runs only once after initial render

  return (
    <div>
      <Navbar
        NavStatus={{ sideNav, setSideNav }}
        Theam={{ isDark, setIsDark }}
      />
      <SideNavBar
        NavStatus={{ sideNav, setSideNav }}
        Theam={{ isDark, setIsDark }}
      />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>

    // <Test />
  );
}

export default App;
