import React from "react";
import Styles from "./ImagePart.module.css";
import ImageG from "../../../../../Assets/Images/ImO4.png";

const Image = () => {
  return <img src={ImageG} className={Styles.Image} />;
};

export default Image;
