import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Portfolio.module.css";
import projects from "../../data/projects.json";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1>Portfolio</h1>
      <section className={styles.cards}>
        {projects.map((project, index) => {
          if (index === 0)
            return (
              <ProjectCard mainCard={true} cardData={project} key={index} />
            );
          else return <ProjectCard cardData={project} key={index} />;
        })}
      </section>
    </div>
  );
};

export default Portfolio;
