import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Searchbar from "../Searchbar/Searchbar";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo src="logo.png" alt="qtify logo" />
      <Searchbar />
      <Button
        text="Give Feedback"
        styles={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-primary)",
          border: "solid 1px black",
          borderRadius: "5px",
        }}
      />
    </nav>
  );
}

export default Navbar;
