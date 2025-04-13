import React from "react";
import styles from "./About.module.css";
import lorneImage from "./working-hard.jpeg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={`${styles.heroText} bubble-japanese`}>
          <span>こ</span>
          <span>ん</span>
          <span>に</span>
          <span>ち</span>
          <span>は</span>
        </div>
      </div>
      <section className={styles.infoSection}>
        <h1>About Me</h1>
        <section>
          <img
            className={styles.avatar}
            src={lorneImage}
            alt="Lorne, diligently working on something super important."
          />
          <div className={styles.content}>
            <p>Hi, I'm Lorne. 👋</p>
            <p>
              I'm a software developer with a knack for building tools that make
              life easier for both users and dev teams. I’ve worked on
              everything from internal apps that automate huge workflows, to
              real-time tournament platforms, to VR projects and online learning
              tools. These days I’m working at Hexagon, where I help maintain
              and improve a pretty complex tech stack with AngularJS, .NET, and
              a bit of AI exploration on the side.
            </p>
            <p>
              I enjoy solving tricky problems, improving performance, and
              finding ways to speed up development without sacrificing quality.
              I’ve also had a chance to mentor new devs, lead projects, and work
              closely with designers and content teams to bring ideas to life.
            </p>
            <p>
              Outside of work, I’m learning Japanese (頑張りましょう！) and
              planning a future trip to Japan. Always happy to connect with
              folks working on cool projects—tech-related or otherwise.
            </p>
            <div className={styles.socials}>
              <a
                href="https://github.com/Llourn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/lornecyr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
