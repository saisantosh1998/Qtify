import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.mainText}>100 Thousand Songs, ad-free</h2>
        <p className={styles.subText}>Over thousands podcast episodes</p>
      </div>
      <img
        src="headphones.png"
        alt="Vibrating Headphones"
        className={styles.headphonesImage}
      />
    </div>
  );
};

export default HeroSection;
