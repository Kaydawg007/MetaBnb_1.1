import React from "react";
import Styles from "./TextPart.module.css";
import Button from "../../../../UI/Button/Button";

const Text = () => {
  return (
    <div className={Styles.Text}>
      <h1>
        Rent a <span>Place</span> away from <span>Home</span> in the
        <span> Metaverse</span>
      </h1>
      <p>
        We provide you access to luxury and affordable houses in the metaverse,
        get a chance to turn your imagination to reality at your comfort zone
      </p>
      <div className={Styles.InputBox}>
        <input type="text" placeholder="Search for location" />
        <Button className={Styles.btn}>Search</Button>
      </div>
    </div>
  );
};

export default Text;
