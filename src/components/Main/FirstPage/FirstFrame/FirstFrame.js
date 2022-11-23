import React from "react";
import Styles from "./FirstFrame.module.css";
import Header from "./Header/Header";
import Image from "./Home/ImagePart";
import Text from "./Home/TextPart";

const FirstFrame = () => {
  return (
    <div>
      <Header />
      <div className={Styles.scnPart}>
        <Text />
        <Image />
      </div>
    </div>
  );
};

export default FirstFrame;
