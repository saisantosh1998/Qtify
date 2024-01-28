import React from "react";
import Button from "../Button/Button";

const RightButton = ({click}) => {
  return (
    <Button
    click = {click}
      icon={
        <img
          src="gt.svg"
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

export default RightButton;
