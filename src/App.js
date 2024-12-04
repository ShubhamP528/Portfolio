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
import { Helmet } from "react-helmet";

function App() {
  const [sideNav, setSideNav] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // console.log(sideNav);
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const newSocket = new WebSocket(
      "wss://20.198.24.104:8000/api/v1/gpt/generate"
    );

    newSocket.onopen = () => {
      console.log("WebSocket connection established");
      // if (promptsArrSelector.length > 0 && !promptsArrSelector[0].isDocument) {
      //   newSocket.send(
      //     JSON.stringify({
      //       prompt: promptsArrSelector[0].text,
      //       context: "",
      //     })
      //   );
      // }
    };

    newSocket.onmessage = (event) => {
      // const formattedData = event.data
      //   .replaceAll("\\\\n\\\\n", "<br/>")
      //   .replaceAll("\\\\n", "<br/>")
      //   .replaceAll("\\n\\n", "<br/>")
      //   .replaceAll("\\n", "<br/>")
      //   .replaceAll("\n", "<br/>")
      //   .replaceAll(/\*([^*]+)\*/g, "<strong>$1</strong>")
      //   .replaceAll("\\", "")
      //   .replaceAll('"', "")
      //   .replaceAll(":", " :")
      //   .replaceAll("#", "");
      // setMessage((prevMessages) => [...prevMessages, formattedData]);
    };

    newSocket.onclose = (event) => {
      console.log(event);
      console.log("Closed code:", event.code);
      console.log("Close reason:", event.reason);
      console.log("WebSocket connection closed");
    };

    newSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

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
      <Helmet>
        <title>Shubham Prajapati - Software Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Shubham Prajapati, a passionate software developer specializing in web and mobile application development."
        />
        <meta
          name="keywords"
          content="Shubham Prajapati, software developer, web development, mobile development, portfolio, programming, coding"
        />
        <meta name="author" content="Shubham Prajapati" />
        <link rel="canonical" href="https://shubhamprajapati528.netlify.app/" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Shubham Prajapati - Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Welcome to the portfolio of Shubham Prajapati, a passionate software developer specializing in web and mobile application development."
        />
        <meta
          property="og:url"
          content="https://shubhamprajapati528.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://shubhamprajapati528.netlify.app/og-image.jpg"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shubham Prajapati - Software Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Welcome to the portfolio of Shubham Prajapati, a passionate software developer specializing in web and mobile application development."
        />
        <meta
          name="twitter:image"
          content="https://shubhamprajapati528.netlify.app/twitter-image.jpg"
        />
      </Helmet>
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
