import React from "react";
import Styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${Styles.Button}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
