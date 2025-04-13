import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("about-me");

  const changeActiveSection = (targetState) => {
    setActiveSection(targetState);
  };

  // Conditionally render components based on the state of `activeSection`
  const mainSection = () => {
    if (activeSection === "about-me") {
      return <About />;
    } else if (activeSection === "projects") {
      return <Projects />;
    } else if (activeSection === "contact-me") {
      return <Contact />;
    }
  };

  return (
    <div className="App">
      <Header changeActiveSection={changeActiveSection} />
      <main>{mainSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
