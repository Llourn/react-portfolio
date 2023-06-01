import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="./images/logo-main.svg" alt="" />
      <h1>Lorne Cyr</h1>
      <img src="./images/logo-cursor.svg" alt="" />
    </div>
  );
};

export default Logo;
