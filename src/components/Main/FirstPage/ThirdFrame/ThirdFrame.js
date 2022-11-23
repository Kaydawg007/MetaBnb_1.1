import React from "react";
import Styles from "./ThirdFrame.module.css";
import Text from "./Text";
import Image from "./Image";

const ThirdFrame = () => {
  return (
    <div className={Styles.ThirdFrame}>
      <Text />
      <Image />
    </div>
  );
};

export default ThirdFrame;
