import React from "react";
import styles from "./Header.module.css";
import { FaToriiGate } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <FaToriiGate />
      </div>
      <nav>
        <ul className={styles.links}>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
