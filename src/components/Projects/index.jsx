import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <section className={styles.cards}>
        {projectsData.map((project, index) => {
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

export default Projects;
