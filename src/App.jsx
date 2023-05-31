import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("about-me");

  const changeActiveSection = (targetState) => {
    setActiveSection(targetState);
  };

  const mainSection = () => {
    if (activeSection === "about-me") {
      return <About />;
    } else if (activeSection === "portfolio") {
      return <Portfolio />;
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
