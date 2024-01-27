import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const buttonStyles = props.styles || {};
  return <button onClick={props.click} id="customButton" style={buttonStyles}>{props.text || props.icon}</button>;
}

export default Button;
