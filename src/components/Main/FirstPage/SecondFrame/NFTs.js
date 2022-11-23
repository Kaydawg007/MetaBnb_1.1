import React from "react";
import Styles from "./NFTs.module.css";
import NFT1 from "../../../../Assets/Images/NFT1.png";
import NFT2 from "../../../../Assets/Images/NFT2.png";
import NFT3 from "../../../../Assets/Images/NFT3.png";
import NFT4 from "../../../../Assets/Images/NFT4.png";
import NFT5 from "../../../../Assets/Images/NFT5.png";
import NFT6 from "../../../../Assets/Images/NFT6.png";
import NFT7 from "../../../../Assets/Images/NFT7.png";
import NFT8 from "../../../../Assets/Images/NFT8.png";

const NFTees = [
  { Img: NFT1, id: 1 },
  { Img: NFT2, id: 2 },
  { Img: NFT3, id: 3 },
  { Img: NFT4, id: 4 },
  { Img: NFT5, id: 5 },
  { Img: NFT6, id: 6 },
  { Img: NFT7, id: 7 },
  { Img: NFT8, id: 8 },
];

const NFTs = () => {
  return (
    <div className={Styles.NFTs}>
      <h2>Inspiration for your next adventure</h2>
      <div className={Styles.ImageBox}>
        {NFTees.map((image) => (
          <img key={image.id} src={image.Img} />
        ))}
      </div>
    </div>
  );
};

export default NFTs;
