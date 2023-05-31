import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={"bubble-japanese"}>
          <span>こ</span>
          <span>ん</span>
          <span>に</span>
          <span>ち</span>
          <span>は</span>
        </h1>
      </div>
      <section className={styles.infoSection}>
        <h2>About Me</h2>
        <section>
          <p>Hi, I'm Lorne. 👋🏻</p>
          <p>
            I'm a software developer based in Fredericton, NB specializing in
            full stack development. I appreciate motivation, but prefer
            discipline especially when it comes to learning and writing code. My
            career in development started in gameplay programming, building
            games/applications for studios throughout the maritimes. I've since
            moved into web development, building online courses for{" "}
            <a href="http://ufred.ca" target="_blank" rel="noopener noreferrer">
              The University of Fredericton
            </a>{" "}
            and Vue apps for{" "}
            <a
              href="http://battlesnake.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Battlesnake Inc.
            </a>{" "}
            In my spare time I like to work on personal projects related to
            other interests of mine, like learning Japanese 「がんばってね！」.
            I also value work/life balance and know when to step away from the
            computer and recharge.
          </p>
        </section>
      </section>
    </div>
  );
};

export default About;
