import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  // Form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Currently active error message
  const [errorMessage, setErrorMessage] = useState("");

  // Checks form element for changes and saves value to corresponding state.
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      return setName(value);
    } else if (name === "email") {
      return setEmail(value);
    } else if (name === "message") {
      return setMessage(value);
    }
  };

  // Checks form elements if input is valid. If not provide a detailed error message to the user.
  const validateInput = (e) => {
    const { name, value } = e.target;

    let newMessage = "";

    if (value === "") {
      newMessage = `The ${name} field is required and cannot be left blank.`;
    }

    if (
      name === "email" &&
      value.length > 0 &&
      !value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      newMessage = `Invalid email address. Please enter a valid email address.`;
    }

    setErrorMessage(newMessage);
  };

  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <section className={styles.contactForm}>
        <form>
          <label name="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            onBlur={validateInput}
            value={name}
            id=""
          />
          <label name="email">Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            onBlur={validateInput}
            value={email}
            id=""
          />
          <label name="message">Message:</label>
          <textarea
            name="message"
            onChange={handleInputChange}
            onBlur={validateInput}
            value={message}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className={styles.error}>{errorMessage}</div>
          <div className={styles.buttonContainer}>
            <button onClick={(e) => e.preventDefault()}>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
