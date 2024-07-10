import React from "react";
import saleImg1 from "../../assets/images/friday_sale_img1.png";
import saleImg2 from "../../assets/images/friday_sale_img2.png";
import saleImg3 from "../../assets/images/friday_sale_img3.png";
import saleImg4 from "../../assets/images/collection_img1.png";
import "./ScrollingBanner.css";

const ScrollingText = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-white relative z-10">
        <p className="outlined-text">Special Friday Sale!</p>
      </h1>
    </div>
  );
};

export default function ScrollingBanner() {
  return (
    <div className="relative bg-green-700">
      <ScrollingText />
      <div className=" w-full  grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 friday-sale">
        <img
          src={saleImg1}
          alt="Friday sale images"
          className="hidden sm:block"
        />
        <img
          src={saleImg2}
          alt="Friday sale images"
          className="hidden sm:block"
        />
        <img src={saleImg3} alt="Friday sale images" />
        <img src={saleImg4} alt="Friday sale images" />
      </div>
    </div>
  );
}
