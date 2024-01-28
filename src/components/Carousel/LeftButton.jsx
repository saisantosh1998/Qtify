import React from "react";
import Button from "../Button/Button";

const LeftButton = ({click}) => {
  return (
    <Button
      click = {click}
      icon={
        <img
          src="lt.svg"
          alt="Search Icon"
        />
      }
      styles={{
        backgroundColor: "var(--color-black)",
        color: "var(--color-primary)",
        border: "solid 0px black",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    />
  );
};

export default LeftButton;
