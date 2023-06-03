import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.container}>
      <h1>Resume</h1>
      <h2>Software Developer</h2>
      <h3>Skills</h3>
      <p>
        React, Vue, Angular, TypeScript, Javascript, jQuery, SASS, Shoelace,
        MaterialUI
      </p>
      <p>
        NodeJS, SQL, MySQL, MongoDB, Sequelize, TypeORM, Express, REST API, .NET
        Core
      </p>
      <p>
        Python, Machine Learning, Deep Learning, NLP, spaCy, gensim, fasttext,
        sklearn, pandas
      </p>
      <h3 className={styles.spaceAbove}>Experience</h3>
      <h4>Hexagon Asset Lifecycle Intelligence</h4>
      <p>Software Developer (May 2023 - present)</p>
      <ul>
        <li>Internal tools developement</li>
        <li>Maintaining Angular front end and .NET back end</li>
        <li>Researching and developing ML/DL solutions</li>
      </ul>

      <h4>Battlesnake Inc.</h4>
      <p>Software Developer (May 2022 - Nov 2022)</p>
      <ul>
        <li>
          Developed on a team of 7, a web platform for running real-time
          tournaments.
        </li>
        <li>
          Refactored legacy UI elements to Vue 3 web components, improving
          maintainability of our front end code.
        </li>
        <li>
          Developed a new competition coordination platform that improved user
          engagement.
        </li>
        <li>
          Sped up development by integrating UI component library Element-Plus.
        </li>
      </ul>

      <h4>University of Fredericton</h4>
      <p>Software Developer (Nov 2019 - May 2022)</p>
      <ul>
        <li>
          Collaborated with content writers and design team to develop online
          courses for over 7300 students.
        </li>
        <li>
          Updated UI with a mobile-first design resulting in an increase in
          mobile users.
        </li>
        <li>
          Planned and developed a complete reimagining of the course UI that led
          to a 40% decrease in course load times.
        </li>
        <li>
          Designed, developed and maintained internal applications/tools that
          improved development workflow.
        </li>
        <li>Led hiring, training, and mentoring for new developers.</li>
      </ul>
    </div>
  );
};

export default Resume;
