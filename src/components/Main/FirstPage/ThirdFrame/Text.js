import React from "react";
import Styles from "./Text.module.css";
import Button from "../../../UI/Button/Button";

const Text = () => {
  return (
    <div className={Styles.Text}>
      <h2>MetaBnb NFTs</h2>
      <p>
        Discover our NFT gift cards collection. Loyal customers gets amazing
        gift cards which are traded as NFTs. These NFTs gives our cutomer access
        to loads of our exclusive services.
      </p>
      <Button className={Styles.Button}>Learn More</Button>
    </div>
  );
};

export default Text;
