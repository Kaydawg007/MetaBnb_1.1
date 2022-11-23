import React from "react";
import Styles from "./Footer.module.css";
import MetaBnbSvg from "../../../UI/SVGs/MetaBnbSvg";
import FacebookSvg from "../../../UI/SVGs/facebookSvg";
import TwitterSvg from "../../../UI/SVGs/twitterSvg";
import IGsvg from "../../../UI/SVGs/iGsvg";

const Footer = () => {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Logos}>
        <span className={Styles.Metabnb}>
          <MetaBnbSvg className={Styles.Svg} />
        </span>
        <span>
          <FacebookSvg className={Styles.Svg} />
          <IGsvg className={Styles.Svg} />
          <TwitterSvg className={Styles.Svg} />
          <div className={Styles.cpr}>&copy; 2022 MetaBnb</div>
        </span>
      </div>
      <div className={Styles.fLinks}>
        <h3>Community</h3>
        <p>NTF</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </div>
      <div className={Styles.fLinks}>
        <h3>Places</h3>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn More</p>
      </div>
      <div className={Styles.fLinks}>
        <h3>About Us</h3>
        <p>Road Maps</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;
