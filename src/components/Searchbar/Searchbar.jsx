import React from "react";
import styles from "./Searchbar.module.css";
import Button from "../Button/Button";

const Searchbar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search a album of your choice"
      />
      <Button
        styles={{
          marginLeft: "-3em",
          width:'3em',
        }}
        icon={
          <img
            src="searchicon.svg"
            alt="Search Icon"
            className={styles.searchIcon}
          />
        }
      />
    </div>
  );
};

export default Searchbar;
