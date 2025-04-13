import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <section>
        <p>
          I can be reached at my email{" "}
          <a href="mailto:Lorne.S.Cyr@gmail.com">Lorne.S.Cyr@gmail.com</a> or on{" "}
          <a
            href="https://www.linkedin.com/in/lornecyr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Contact;
