import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";

const Card = ({ album }) => {
  const { title, follows, image, likes, songs } = album;

  return (
    <>
      {songs && songs.length > 0 ? (
        <Tooltip title={`${songs.length} Songs`} arrow placement="top">
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
        </Tooltip>
      ) : (
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
      )}
    </>
  );
};

export default Card;
