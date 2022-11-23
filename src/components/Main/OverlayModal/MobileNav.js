import React from "react";
// import AuthContext from "../../Store/AuthContext";
import Styles from "./MobileNav.module.css";
import Button from "../../UI/Button/Button";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${Styles.backDrop} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

const NavItems = (props) => {
  return (
    <div className={Styles.menu}>
      <p>Home</p>
      <p>Place To Stay</p>
      <p>NFTs</p>
      <p>Community</p>
      <Button onClick={props.onClick}>Connect Wallet</Button>
    </div>
  );
};

const MobileNav = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClick={props.onClick} />
      <NavItems onClick={props.connectWalletToggle} />
    </React.Fragment>
  );
};

export default MobileNav;
