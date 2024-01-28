import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

const Card = ({ album }) => {
  const { title, follows, image, likes } = album;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardInfo}>
          {follows && (
            <Chip
              label={`${follows} Follows`}
              sx={{
                backgroundColor: "var(--color-black)",
                color: "var(--color-white)",
              }}
            />
          )}
          {likes && (
            <Chip
              label={`${likes} Likes`}
              sx={{
                backgroundColor: "var(--color-black)",
                color: "var(--color-white)",
              }}
            />
          )}
        </div>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};

export default Card;
