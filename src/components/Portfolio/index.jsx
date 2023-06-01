import React from "react";
import Card from "./Card";
import styles from "./Portfolio.module.css";
import cards from "../../data/projects.json";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h2>Portfolio</h2>
      <section className={styles.cards}>
        {cards.map((card, index) => {
          if (index === 0) return <Card mainCard={true} cardData={card} />;
          else return <Card cardData={card} />;
        })}
      </section>
    </div>
  );
};

export default Portfolio;
