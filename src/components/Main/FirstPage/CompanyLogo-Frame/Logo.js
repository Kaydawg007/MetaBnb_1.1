import React from "react";
import Styles from "./Logo.module.css";
import MBToken from "../../../../Assets/Images/MBToken.svg";
import MetaMask from "../../../../Assets/Images/MetaMask.svg";
import OpenSea from "../../../../Assets/Images/OpenSea.svg";

const Logos = () => {
  return (
    <div className={Styles.Logos}>
      <img src={MBToken} />
      <img src={MetaMask} />
      <img src={OpenSea} />
    </div>
  );
};

export default Logos;
