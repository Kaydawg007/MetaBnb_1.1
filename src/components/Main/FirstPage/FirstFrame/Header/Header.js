import React, { useContext } from "react";
import MobileNav from "../../../OverlayModal/MobileNav";
import AuthContext from "../../../../Store/AuthContext";
import Metamask from "../../../../../Assets/Images/Metamask.png";
import WalletConnect from "../../../../../Assets/Images/WalletConnect.png";
import MetaBnb from "../../../../../Assets/Images/MetaBnb.png";
import arrow from "../../../../../Assets/Images/arrow.png";
import Hamburger from "../../../../../Assets/Images/menu-outline.svg";
import close from "../../../../../Assets/Images/close.png";
import Button from "../../../../UI/Button/Button";
import Styles from "./Header.module.css";

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

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className={Styles.Header}>
        <img src={MetaBnb} />
        <div className={Styles.Hyperlink}>
          <a href="#">Home</a>
          <a href="#">Place To Stay</a>
          <a href="#">NFTs</a>
          <a href="#">Community</a>
        </div>
        <Button onClick={authCtx.wcToggleFunction} className={Styles.Button}>
          Connect Wallet
        </Button>
        <div onClick={authCtx.toggleHandler} className={Styles.mobileModal}>
          <img src={authCtx.modalState === true ? Hamburger : close} />
        </div>
      </div>

      {authCtx.wcModalState && <Backdrop onClick={authCtx.wcToggleFunction} />}

      {authCtx.wcModalState && (
        <div className={Styles.connectWallet}>
          <div className={Styles.box1}>
            <span className={Styles.box1h}>Connect Wallet</span>
            <span
              onClick={authCtx.wcToggleFunction}
              style={{ fontSize: "24px", cursor: "pointer" }}
            >
              X
            </span>
          </div>
          <hr />
          <div className={Styles.box2}>
            <p className={Styles.wt}>Choose your preferred wallet:</p>
            <span className={Styles.wco}>
              <div className={Styles.mmwc}>
                <img src={Metamask} />
                <p className={Styles.mmwcp}>Metamask</p>
              </div>
              <img src={arrow} />
            </span>
            <span className={Styles.wco}>
              <div className={Styles.mmwc}>
                <img src={WalletConnect} />
                <p className={Styles.mmwcp}>WalletConnect</p>
              </div>
              <img src={arrow} />
            </span>
          </div>
        </div>
      )}

      {!authCtx.modalState && (
        <MobileNav
          onClick={authCtx.toggleHandler}
          connectWalletToggle={authCtx.wcToggleFunction}
        />
      )}
    </React.Fragment>
  );
};

export default Header;
