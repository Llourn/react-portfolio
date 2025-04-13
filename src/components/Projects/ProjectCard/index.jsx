import React from "react";
import styles from "./ProjectCard.module.css";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ mainCard, cardData }) => {
  return (
    <div className={`${mainCard ? styles.mainCard : ""} ${styles.container}`}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(/images/${cardData.imageFileName})`,
        }}
      ></div>
      <section className={styles.content}>
        <h3>{cardData.title}</h3>
        <p>{cardData.description}</p>
      </section>
      <div className={styles.links}>
        {cardData.siteUrl && (
          <a href={cardData.siteUrl} rel="noreferrer" target="_blank">
            <CgWebsite />
          </a>
        )}
        {cardData.repoUrl && (
          <a href={cardData.repoUrl} rel="noreferrer" target="_blank">
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
