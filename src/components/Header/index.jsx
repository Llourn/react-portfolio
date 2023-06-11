import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";

const Header = ({ changeActiveSection }) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav>
          <ul className={styles.links}>
            <li onClick={() => changeActiveSection("about-me")}>About Me</li>
            <li onClick={() => changeActiveSection("portfolio")}>Portfolio</li>
            <li onClick={() => changeActiveSection("contact-me")}>Contact</li>
            <li onClick={() => changeActiveSection("resume")}>Resume</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
