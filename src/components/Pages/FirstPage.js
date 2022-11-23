import React from "react";
import FirstFrame from "../Main/FirstPage/FirstFrame/FirstFrame";
import Logos from "../Main/FirstPage/CompanyLogo-Frame/Logo";
import NFTs from "../Main/FirstPage/SecondFrame/NFTs";
import ThirdFrame from "../Main/FirstPage/ThirdFrame/ThirdFrame";
import Footer from "../Main/FirstPage/Footer/Footer";

const FirstPage = () => {
  return (
    <React.Fragment>
      <FirstFrame />
      <Logos />
      <NFTs />
      <ThirdFrame />
      <Footer />
    </React.Fragment>
  );
};

export default FirstPage;
