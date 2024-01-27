import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

const Card = ({ album }) => {
  const { title, description, follows, image } = album;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardInfo}>
          <Chip
            label={`${follows} Follows`}
            sx={{
              backgroundColor: "var(--color-black)",
              color: "var(--color-white)",
            }}
          />
        </div>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};

export default Card;
