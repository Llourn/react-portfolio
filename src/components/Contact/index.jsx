import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <section className={styles.contactForm}>
        <form>
          <label name="name">Name:</label>
          <input type="text" name="name" id="" />
          <label name="email">Email:</label>
          <input type="text" name="email" id="" />
          <label name="message">Message:</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <div className={styles.buttonContainer}>
            <button onClick={(e) => e.preventDefault()}>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
